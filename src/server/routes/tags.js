const db = require('../models');

const { Tag, Item, User, UserTag, sequelize } = db;

exports.getTags = async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          association: Tag.Followers,
          attributes: User.customAttributes,
        },
      ],
    });
    res.status(200).send({ tags });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.getTag = async (req, res) => {
  try {
    const { tagName } = req.params;
    const tag = await Tag.findOne({
      where: { name: tagName },
      include: [
        {
          association: Tag.Items,
          where: { status: 'posted' },
          include: [
            {
              association: Item.User,
              attributes: User.customAttributes,
            },
            {
              association: Item.Likers,
              attributes: User.customAttributes,
            },
            {
              association: Item.Tags,
            },
          ],
        },
        {
          association: Tag.Followers,
          attributes: User.customAttributes,
        },
      ],
    });
    if (!tag) {
      res.sendStatus(404);
    } else {
      res.status(200).send({ tag });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.followTag = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { tagId } = req.params;
      const userTag = await UserTag.create({ userId, tagId });
      res.status(200).send({ userTag });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.unfollowTag = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { tagId } = req.params;
      await UserTag.destroy({ where: { userId, tagId } });
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

const allTagRankingSql = `
  SELECT
    COUNT(*)
  FROM
    "ItemTags"
  WHERE
    "ItemTags"."tagId" = "Tag"."id"`;
const oneWeek = '1week';
const oneMonth = '1month';
const createCondition = interval =>
  `AND "ItemTags"."createdAt" > now() - interval '${interval}'`;
const weeklyCondition = createCondition(oneWeek);
const monthlyCondition = createCondition(oneMonth);
const createSql = interval => {
  if (interval === 'weekly') {
    return `(${allTagRankingSql} ${weeklyCondition})`;
  }
  if (interval === 'monthly') {
    return `(${allTagRankingSql} ${monthlyCondition})`;
  }
  return `(${allTagRankingSql})`;
};
exports.ranking = async (req, res) => {
  try {
    const { interval } = req.query;
    const sql = createSql(interval);
    const tags = await Tag.findAll({
      attributes: [
        ...Object.keys(Tag.attributes),
        [sequelize.literal(sql), 'itemsCount'],
      ],
      order: [[sequelize.literal('"itemsCount"'), 'DESC']],
      limit: 10,
    });
    res.status(200).send({ tags });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

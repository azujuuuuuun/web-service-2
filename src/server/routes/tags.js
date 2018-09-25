const db = require('../models');

const { Tag, Item, User, UserTag } = db;

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

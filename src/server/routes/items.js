const db = require('../models');

const { sequelize, User, Item, Tag, ItemTag, Comment, Like, Stock } = db;

exports.createItem = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId, {
      attributes: User.customAttributes,
    });
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { title, tagNames, body, status } = req.body;
      const item = await Item.create(
        { title, body, status, userId },
        { transaction },
      );
      const tags = await Promise.all(
        tagNames.split(' ').map(async t => {
          const [tag] = await Tag.findOrCreate({
            where: { name: t },
            defaults: { name: t },
            transaction,
          });
          return tag;
        }),
      );
      await Promise.all(
        tags.map(t =>
          ItemTag.create({ itemId: item.id, tagId: t.id }, { transaction }),
        ),
      );
      item.dataValues.user = user;
      item.dataValues.tags = tags;
      await transaction.commit();
      res.status(200).send({ item });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    await transaction.rollback();
    res.status(400).send(err);
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.findAll({
      where: { status: 'posted' },
      include: [
        {
          association: Item.User,
          attributes: User.customAttributes,
        },
      ],
    });
    res.status(200).send({ items });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.getItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const item = await Item.findOne({
      where: { id: itemId, status: 'posted' },
      include: [
        {
          association: Item.User,
          attributes: User.customAttributes,
        },
        {
          association: Item.Tags,
        },
        {
          association: Item.Likers,
          attributes: User.customAttributes,
        },
        {
          association: Item.Comments,
          include: [
            {
              association: Comment.User,
              attributes: User.customAttributes,
            },
          ],
        },
      ],
    });
    if (!item) {
      res.sendStatus(404);
    } else {
      res.status(200).send({ item });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.likeItem = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { itemId } = req.params;
      const like = await Like.create({ userId, itemId });
      res.status(200).send({ like });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.unlikeItem = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { itemId } = req.params;
      await Like.destroy({ where: { userId, itemId } });
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.stockItem = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { itemId } = req.params;
      const stock = await Stock.create({ userId, itemId });
      res.status(200).send({ stock });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.unstockItem = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { itemId } = req.params;
      await Stock.destroy({ where: { userId, itemId } });
      res.sendStatus(204);
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.comment = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { text } = req.body;
      const { itemId } = req.params;
      const comment = await Comment.create({ text, userId, itemId });
      comment.dataValues.user = user;
      res.status(200).send({ comment });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

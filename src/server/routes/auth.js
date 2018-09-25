const jwt = require('jsonwebtoken');

const db = require('../models');

const { User, Item, Tag } = db;

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create(
      { username, email, password },
      {
        attributes: User.customAttributes,
      },
    );
    const token = jwt.sign({ userId: user.id }, 'shhhhh');
    res.status(200).send({ token, user });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: { username, password },
      attributes: User.customAttributes,
    });
    if (!user) {
      res.status(400).send('User was not found.');
    } else {
      const token = jwt.sign({ userId: user.id }, 'shhhhh');
      res.status(200).send({ token, user });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.auth = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId, {
      attributes: { exclude: ['email', 'password'] },
      include: [
        {
          association: User.Items,
          include: [Item.Tags],
        },
        {
          association: User.Likes,
        },
        {
          association: User.Stocks,
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
              association: Item.Comments,
            },
          ],
        },
        {
          association: User.Followings,
          attributes: User.customAttributes,
        },
        {
          association: User.Followers,
          attributes: User.customAttributes,
        },
        {
          association: User.FollowingTags,
          include: [
            {
              association: Tag.Items,
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
        },
        {
          association: User.Notifications,
        },
      ],
    });
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      res.status(200).send({ user });
    }
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
    res.status(400).send(e);
  }
};

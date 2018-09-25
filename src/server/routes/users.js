const db = require('../models');

const { User, Item, Relationship } = db;

exports.getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({
      where: { username },
      attributes: User.customAttributes,
      include: [
        {
          association: User.Items,
          where: { status: 'posted' },
          include: [
            {
              association: Item.User,
              attributes: User.customAttributes,
            },
          ],
          required: false,
        },
        {
          association: User.FollowingTags,
        },
        {
          association: User.Followings,
        },
      ],
    });
    if (!user) {
      res.sendStatus(404);
    } else {
      res.status(200).send({ user });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: User.customAttributes,
    });
    res.status(200).send({ users });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.updatePasspord = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const { currentPassword } = req.body;
    const user = await User.findOne({
      where: {
        id: userId,
        password: currentPassword,
      },
    });
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { newPassword } = req.body;
      const result = await User.update(
        { password: newPassword },
        {
          where: { id: userId },
        },
      );
      res.status(200).send({ result });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { payload } = req.body;
      const row = await User.update(
        { ...payload },
        {
          where: { id: userId },
        },
      );
      res.status(200).send({ row });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.follow = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { followedId } = req.params;
      const relationship = await Relationship.create({
        followerId: userId,
        followedId,
      });
      res.status(200).send({ relationship });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

exports.unfollow = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { followedId } = req.params;
      await Relationship.destroy({
        where: {
          followerId: userId,
          followedId,
        },
      });
      res.status(204);
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

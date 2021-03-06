const db = require('../models');

const { User, Notification } = db;

exports.createNotifications = async (req, res) => {
  try {
    const { id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      res.status(400).send('User was not found');
    } else {
      const { notificationKinds } = req.body;
      const records = Object.keys(notificationKinds).map(k => ({
        kind: k,
        userId,
      }));
      await Notification.destroy({ where: { userId } });
      const notifications = await Notification.bulkCreate(records);
      res.status(200).send({ notifications });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

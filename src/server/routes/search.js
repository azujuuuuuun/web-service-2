const db = require('../models');

const { Sequelize, Item, User } = db;
const { Op } = Sequelize;

exports.search = async (req, res) => {
  try {
    const { q } = req.query;
    const qs = q.split(' ').map(p => `%${p}%`);
    const items = await Item.findAll({
      where: {
        [Op.and]: {
          status: 'posted',
          [Op.or]: [
            {
              title: {
                [Op.like]: { [Op.any]: qs },
              },
            },
            {
              body: {
                [Op.like]: { [Op.any]: qs },
              },
            },
          ],
        },
      },
      include: [
        {
          association: Item.User,
          attributes: User.customAttributes,
        },
      ],
    });
    if (items.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).send({ items });
    }
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
};

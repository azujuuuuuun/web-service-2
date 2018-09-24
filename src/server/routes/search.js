const express = require('express');

const db = require('../models');

const router = express.Router();

const { Sequelize, Item, User } = db;
const { Op } = Sequelize;

router.get('/', async (req, res) => {
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
    res.status(200).send({ items });
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
    res.status(400).send(err);
  }
});

module.exports = router;

'use strict'; // eslint-disable-line

module.exports = {
  up: (queryInterface, Sequelize) => { // eslint-disable-line
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const now = new Date();
    return queryInterface.bulkInsert('UserTags', [{
      createdAt: now,
      updatedAt: now,
      userId: 1,
      tagId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => { // eslint-disable-line
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('UserTags', null, {});
  },
};

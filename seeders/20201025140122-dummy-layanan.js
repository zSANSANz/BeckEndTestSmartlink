'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('layanans', [{
      nama: 'cuci kering',
      unit: 'kg',
      harga: 10000

    }, {
      nama: 'cuci basah',
      unit: 'kg',
      harga: 5000
    }, {
      nama: 'cuci setrika',
      unit: 'kg',
      harga: 15000
    }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('layanans', null, {});
  }
};

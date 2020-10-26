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
    return queryInterface.bulkInsert('transaksis', [{
      pelanggan: 'Hery Kartiko',
      layanan_id: 1,
      qty: 3,
      diskon_persen: 10
    }, {
      pelanggan: 'Riko Sujanarko',
      layanan_id: 3,
      qty: 5,
      diskon_persen: 5
    }, {
      pelanggan: 'siti sunaryo',
      layanan_id: 2,
      qty: 1,
      diskon_persen: 70
    }, {
      pelanggan: 'jono markuno',
      layanan_id: 1,
      qty: 4,
      diskon_persen: 50
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

    return queryInterface.bulkDelete('transaksis', null, {});
  }
};

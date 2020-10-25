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
    return queryInterface.bulkInsert('registers', [{
      nama: 'Sandi Permana',
      username: 'zSANSANz',
      password: 'admin1',
      telepon: '082142796339'
    }, {
      nama: 'abdullah',
      username: 'abd',
      password: 'abd1',
      telepon: '082112342233'
    }, {
      nama: 'umar',
      username: 'umr',
      password: 'umr1',
      telepon: '082112344512'
    }, {
      nama: 'usman',
      username: 'usm',
      password: 'usm1',
      telepon: '082112345465'
    }, {
      nama: 'ali',
      username: 'ali',
      password: 'ali1',
      telepon: '082112341122'
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

    return queryInterface.bulkDelete('registers', null, {});

  }
};

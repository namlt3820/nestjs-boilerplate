'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Step 1: Add the new UUID column
    await queryInterface.addColumn('users', 'id_temp', {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
    });

    // Step 2: Drop the old INTEGER column
    await queryInterface.removeColumn('users', 'id');

    // Step 3: Rename the new UUID column to 'id'
    await queryInterface.renameColumn('users', 'id_temp', 'id');

    // Step 4: Add the primary key constraint to the new 'id' column
    await queryInterface.changeColumn('users', 'id', {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Step 1: Add the old INTEGER column back
    await queryInterface.addColumn('users', 'id_temp', {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    });

    // Step 2: Drop the UUID column
    await queryInterface.removeColumn('users', 'id');

    // Step 3: Rename the old INTEGER column back to 'id'
    await queryInterface.renameColumn('users', 'id_temp', 'id');
  },
};

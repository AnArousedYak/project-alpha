import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import { hashPassword } from '../utils/Hash.js';

const Employee = sequelize.define(
  'Employee',
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    username: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },

    isLoggedIn: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },

  {
    tableName: 'Employees',
    timestamps: true,
    hooks: {
      async beforeCreate(employee) {
        employee.password = await hashPassword(employee.password);
      },

      async beforeUpdate(employee) {
        if (employee.changed('password')) {
          employee.password = await hashPassword(employee.password);
        }
      },
    },
  }
);

export default Employee;

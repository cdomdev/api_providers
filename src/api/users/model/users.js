import { DataTypes } from "sequelize";
import { conecction } from "../../../index.js";

export const User = conecction.define(
  "up_users",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    reset_password_token: {
      type: DataTypes.STRING,
    },
    provider: {
      type: DataTypes.STRING,
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
    },
    blocked: {
      type: DataTypes.BOOLEAN,
    },
   
  },
  {
    tableName: "up_users",
    timestamps: false,
  }
);

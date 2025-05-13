import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  education: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
await sequelize.sync({ alter: true }); // Automatically updates table without deleting data

export default User;

import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

// Define User model
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync model (create table if not exists)
await User.sync();

export default User;

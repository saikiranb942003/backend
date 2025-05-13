import { sequelize, connectDB } from "../config/database.js";
import User from "./User.js";

// Sync all models
await sequelize.sync();
console.log("All models synchronized.");

// Export models
export { User, connectDB };

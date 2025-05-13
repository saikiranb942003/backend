import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false, // Disable console logging of SQL queries
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection to PostgreSQL established successfully.");
  } catch (error) {
    console.error("Unable to connect to PostgreSQL:", error);
  }
}

testConnection();
export default sequelize;

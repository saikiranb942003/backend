import express from "express";
import { connectDB, User } from "./models/index.js";

const app = express();
app.use(express.json());

// Connect to database
connectDB();

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to Sequelize with PostgreSQL");
});

// User routes
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({ name, email, password });
  res.status(201).json(newUser);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

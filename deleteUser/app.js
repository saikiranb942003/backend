const express = require("express");
require("dotenv").config();
const sequelize = require("./config/database");
const User = require("./models/user");
const usersRouter = require("./routes/users");

const app = express();
app.use(express.json());

app.use("/users", usersRouter);

const PORT = process.env.PORT || 3000;

// Sync database and start server
sequelize.sync({ force: false })  // `force: false` avoids dropping tables
  .then(() => {
    console.log("Database synced");
    async function seed() {
        const count = await User.count();
        if (count === 0) {
          await User.bulkCreate([
            { name: "jeeva", email: "jeeva@example.com" },
            { name: "baskar", email: "basker@example.com" },
          ]);
          console.log("Seeded initial users");
        }
      }
      
      sequelize.sync({ force: false }).then(async () => {
        await seed();
        app.listen(PORT, () => {
          console.log(`Server running on http://localhost:${PORT}`);
        });
      });
      
   
  })
  .catch(err => {
    console.error("Error syncing database:", err);
  });

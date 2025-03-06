require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/authRouter");
const contactRoute = require("./router/contactRouter");
const connectDb = require("./database/db");
const errorHandling = require("./middlewares/errorHandling");

// Middlewares
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorHandling);

const PORT = 8000;

// Connect to DB and start the server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

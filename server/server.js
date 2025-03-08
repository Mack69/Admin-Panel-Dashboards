require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoute = require("./router/authRouter");
const contactRoute = require("./router/contactRouter");
const connectDb = require("./database/db");
const errorHandling = require("./middlewares/errorHandling");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
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

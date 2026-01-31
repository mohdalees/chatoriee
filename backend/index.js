require("dotenv").config();
const axios = require('axios').default;
const express = require("express");
const cors = require("cors");
const connectDB = require("../backend/db");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/Routess"));

axios.post(url, { email, password })

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);


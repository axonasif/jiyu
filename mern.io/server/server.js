const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => {
  console.log(`The app has been launched on port ${port}.`);
});
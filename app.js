const express = require("express");
const app = express();
const scheduleRoutes = require("./Routes/scheduledRoutes");
const restrictionsRouter = require("./Routes/restrictionsRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/schedules", scheduleRoutes);
app.use("/api/restrictions", restrictionsRouter);

const DB = process.env.DB_CONNECT;
mongoose.connect(
  DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

app.listen(5000, () => {
  console.log("app listening to posrt");
});

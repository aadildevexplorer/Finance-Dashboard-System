const express = require("express");
const connectDB = require("./config/db_config");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the Finance Dashboard System",
  });
});

app.use("/api/user", require("./routes/userRoute"));
app.use("/api/record", require("./routes/recordRoute"));
app.use("/api/admin", require("./routes/adminRoute"));
app.use("/api/dashboard", require("./routes/dashbaordSummaryRoute"));
app.use("/api/auth", require("./routes/authRoute"));

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

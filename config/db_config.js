const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(process.env.MONGO_URI);
    console.log("DB CONNECT", conn.connection.name);
  } catch (error) {
    console.log("DB CONNECT", error);
  }
};

module.exports = connectDB;

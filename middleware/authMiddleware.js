const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Auth = require("../models/auth.model");

const protect = expressAsyncHandler(async (req, res, next) => {
  try {
    let token = "";

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      console.log("Token received:", token);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded JWT:", decoded);

      const user = await Auth.findById(decoded.id).select("-password");
      console.log("User found in DB:", user);

      if (!user) {
        console.error("Error: User not found");
        res.status(401);
        throw new Error("Invalid User");
      }

      req.user = user;
      next();
    } else {
      console.error("Error: No token found in headers");
      res.status(401);
      throw new Error("UnAuthorized Access : No Token Found");
    }
  } catch (error) {
    console.error("Middleware Error:", error.message);
    res.status(401);
    throw new Error("UnAuthorized Access : No Token Found");
  }
});

module.exports = protect;

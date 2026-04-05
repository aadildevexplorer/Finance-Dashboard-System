const expressAsyncHandler = require("express-async-handler");
const authService = require("../services/auth.service");
const generateToken = require("../utils/generateToken");

// Register User
const registerUser = expressAsyncHandler(async (req, res) => {
  const user = await authService.registerService(req.body);

  res.status(201).json({
    success: true,
    message: "Registration Successful",
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
    token: generateToken(user._id),
  });
});

// login User
const loginUser = expressAsyncHandler(async (req, res) => {
  const user = await authService.loginService(req.body);

  res.status(200).json({
    success: true,
    message: "Login Successful",
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    status: user.status,
    token: generateToken(user._id),
  });
});

module.exports = { registerUser, loginUser };

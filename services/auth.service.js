const Auth = require("../models/auth.model");
const bcrypt = require("bcryptjs");
const validator = require("validator");

// valid email format
const isValidEmail = (email) => {
  if (!validator.isEmail(email)) return false;

  const allowedDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
  ];

  const domain = email.split("@")[1];
  return allowedDomains.includes(domain);
};

// Register User
const registerService = async ({ name, email, password, role, status }) => {
  if (!name || !email || !password || !role || !status) {
    throw new Error("Please Fill All Details");
  }

  if (password.length < 4) {
    throw new Error("Password must be at least 5 charachter");
  }

  const trimmedEmail = email.trim().toLowerCase();

  if (!isValidEmail(trimmedEmail)) {
    throw new Error("Invalid email format");
  }

  // Check if user Already exist
  const userExist = await Auth.findOne({ email: trimmedEmail });

  if (userExist) {
    throw new Error("User Already Exist");
  }

  // Hash Password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Create User
  const user = await Auth.create({
    name,
    email: trimmedEmail,
    password: hashedPassword,
    role,
    status,
  });

  if (!user) {
    throw new Error("User Registration Failed");
  }

  return user;
};

// login User
const loginService = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Please Fill All Details");
  }

  const user = await Auth.findOne({ email });

  if (!user) {
    throw new Error("User Not Found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  // status check
  if (user.status !== "active") {
    throw new Error("User is inactive. Contact admin");
  }

  if (!isMatch) {
    throw new Error("Invalid Credentials");
  }

  return user;
};

module.exports = { registerService, loginService };

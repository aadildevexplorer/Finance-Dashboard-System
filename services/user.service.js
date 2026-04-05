const User = require("../models/user.model");

// create user
const createUserService = async (data) => {
  const { name, email, password, role, status } = data;

  if (!name || !email || !password || !role || !status) {
    throw new Error("All fields are required");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await User.create(data);

  return user;
};

// get single user
const getSingleUserService = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// delete user
const deleteUserService = async (id) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// update user
const updateUserService = async (id, data) => {
  const user = await User.findByIdAndUpdate(id, data, { new: true });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

module.exports = {
  createUserService,
  getSingleUserService,
  deleteUserService,
  updateUserService,
};

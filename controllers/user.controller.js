const expressAsyncHandler = require("express-async-handler");
const userService = require("../services/user.service");

// create user
const createUser = expressAsyncHandler(async (req, res) => {
  const user = await userService.createUserService(req.body);
  res.status(201).json({
    success: true,
    user,
  });
});

// single user
const getSingleUser = expressAsyncHandler(async (req, res) => {
  const user = await userService.getSingleUserService(req.params.id);
  res.status(200).json({
    success: true,
    user,
  });
});

// delete user
const deleteUser = expressAsyncHandler(async (req, res) => {
  await userService.deleteUserService(req.params.id);

  res.status(200).json({ message: "User deleted successfully" });
});

// update user
const updateUser = expressAsyncHandler(async (req, res) => {
  const user = await userService.updateUserService(req.params.id, req.body);

  res.status(200).json({
    success: true,
    user,
  });
});

module.exports = { createUser, getSingleUser, deleteUser, updateUser };

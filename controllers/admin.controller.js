const adminService = require("../services/admin.service");
const expressAsyncHandler = require("express-async-handler");
const { formatDate } = require("../utils/date");

// get all record
const getAllRecords = expressAsyncHandler(async (req, res) => {
  const records = await adminService.getAllRecordsService(req.query);
  res.status(200).json({
    success: true,
    data: records,
  });
});

// get all user
const getAllUsers = expressAsyncHandler(async (req, res) => {
  const users = await adminService.getAllUsersService();
  res.status(200).json({
    success: true,
    data: users,
  });
});

// create user
const createUser = expressAsyncHandler(async (req, res) => {
  const user = await adminService.createUserServiceFromAdmin(req.body);
  res.status(201).json({
    success: true,
    user,
  });
});

// delete user
const deleteUser = expressAsyncHandler(async (req, res) => {
  await adminService.deleteUserServiceFromAdmin(req.params.id);
  res.status(200).json({ message: "User deleted successfully" });
});

// update user
const updateUser = expressAsyncHandler(async (req, res) => {
  const user = await adminService.updateUserServiceFromAdmin(
    req.params.id,
    req.body,
  );

  res.status(200).json({
    success: true,
    message: "User Update SuccessFul",
    user,
  });
});

// create record
const createRecord = expressAsyncHandler(async (req, res) => {
  const record = await adminService.createRecordServiceFromAdmin(req.body);

  const formattedRecord = {
    ...record._doc,
    date: formatDate(record.date),
  };
  res.status(201).json({
    success: true,
    record: formattedRecord,
  });
});

// delete record
const deleteRecord = expressAsyncHandler(async (req, res) => {
  await adminService.deleteRecordServiceFromAdmin(req.params.id);

  res.status(200).json({
    success: true,
    message: "Record deleted successfully",
  });
});

// update record
const updateRecord = expressAsyncHandler(async (req, res) => {
  const record = await adminService.updateRecordServiceFromAdmin(
    req.params.id,
    req.body,
  );

  res.status(200).json({
    success: true,
    record,
  });
});

module.exports = {
  getAllRecords,
  createRecord,
  updateRecord,
  getAllUsers,
  createUser,
  deleteRecord,
  deleteUser,
  updateUser,
};

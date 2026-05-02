const Record = require("../models/record.model");
const Auth = require("../models/auth.model");
const bcrypt = require("bcryptjs");

// get all records
const getAllRecordsService = async (query) => {
  const { type, category, date } = query;

  let filter = {};
  if (type) {
    filter.type = type;
  }

  if (category) {
    filter.category = category;
  }

  if (date) {
    filter.date = date;
  }

  const all_records = await Record.find(filter);
  if (all_records.length === 0 && (type || category || date)) {
    throw new Error(
      `${type ? "Type" : ""}${category ? " Category" : ""}${date ? " Date" : ""} not found`,
    );
  }

  return all_records;
};

// get all users
const getAllUsersService = async () => {
  const users = await User.find();

  if (!users || users.length === 0) {
    throw new Error("User Not Found");
  }

  return users;
};

// create user from admin side
const createUserServiceFromAdmin = async (data) => {
  const { name, email, password, role, status } = data;

  if (!name || !email || !password || !role || !status) {
    throw new Error("All fields are required");
  }

  const existingUser = await Auth.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await Auth.create({
    name,
    email,
    password: hashedPassword,
    role,
    status,
  });

  return user;
};

// delete user from admin side
const deleteUserServiceFromAdmin = async (id) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// update user from admin side
const updateUserServiceFromAdmin = async (id, data) => {
  const user = await User.findByIdAndUpdate(id, data, { new: true });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// create record from admin side
const createRecordServiceFromAdmin = async (data) => {
  const { amount, type, category, note, date } = data;

  if (!amount || !type || !category || !note || !date) {
    throw new Error("All fields are required");
  }

  // type validation
  if (!["income", "expense"].includes(type)) {
    throw new Error("Invalid type");
  }

  // date validation
  if (isNaN(new Date(date))) {
    throw new Error("Invalid date");
  }

  const record = await Record.create(data);

  return record;
};

// delete record from admin side
const deleteRecordServiceFromAdmin = async (id) => {
  const record = await Record.findByIdAndDelete(id);

  if (!record) {
    throw new Error("Record not found");
  }

  return record;
};

// update record from admin side
const updateRecordServiceFromAdmin = async (id, data) => {
  const record = await Record.findByIdAndUpdate(id, data, { new: true });

  if (!record) {
    throw new Error("Record not found");
  }

  return record;
};

module.exports = {
  getAllRecordsService,
  getAllUsersService,
  createRecordServiceFromAdmin,
  createUserServiceFromAdmin,
  deleteRecordServiceFromAdmin,
  deleteUserServiceFromAdmin,
  updateRecordServiceFromAdmin,
  updateUserServiceFromAdmin,
};

const Record = require("../models/record.model");

// create record
const createRecordService = async (data) => {
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

// get single record
const getSingleRecordService = async (id) => {
  const record = await Record.findById(id);

  if (!record) {
    throw new Error("Record not found");
  }

  return record;
};

// delete record
const deleteRecordService = async (id) => {
  const record = await Record.findByIdAndDelete(id);

  if (!record) {
    throw new Error("Record not found");
  }

  return record;
};

// update record
const updateRecordService = async (id, data) => {
  const record = await Record.findByIdAndUpdate(id, data, { new: true });

  if (!record) {
    throw new Error("Record not found");
  }

  return record;
};

module.exports = {
  createRecordService,
  getSingleRecordService,
  deleteRecordService,
  updateRecordService,
};

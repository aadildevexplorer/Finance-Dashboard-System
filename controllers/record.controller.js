const expressAsyncHandler = require("express-async-handler");
const recordService = require("../services/record.service");
const { formatDate } = require("../utils/date");

// create record
const createRecord = expressAsyncHandler(async (req, res) => {
  const record = await recordService.createRecordService(req.body);

  const formattedRecord = {
    ...record._doc,
    date: formatDate(record.date),
  };
  res.status(201).json({
    success: true,
    record: formattedRecord,
  });
});

// single record
const getSingleRecord = expressAsyncHandler(async (req, res) => {
  const record = await recordService.getSingleRecordService(req.params.id);

  res.status(200).json({
    success: true,
    record: formattedRecord,
  });
});

// delete record
const deleteRecord = expressAsyncHandler(async (req, res) => {
  await recordService.deleteRecordService(req.params.id);

  res.status(200).json({
    success: true,
    message: "Record deleted successfully",
  });
});

// update record
const updateRecord = expressAsyncHandler(async (req, res) => {
  const record = await recordService.updateRecordService(
    req.params.id,
    req.body,
  );

  res.status(200).json({
    success: true,
    record,
  });
});

module.exports = { createRecord, getSingleRecord, deleteRecord, updateRecord };

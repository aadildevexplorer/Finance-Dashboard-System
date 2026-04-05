const express = require("express");
const {
  getAllRecords,
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  createRecord,
  deleteRecord,
  updateRecord,
} = require("../controllers/admin.controller");
const adminProtect = require("../middleware/adminMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const router = express.Router();

// user side
router.get("/getAllRecord", adminProtect, getAllRecords);
router.get("/getAllUser", adminProtect, getAllUsers);
router.post(
  "/createUserFromAdmin",
  adminProtect,
  authorizeRoles("admin"),
  createUser,
);
router.delete(
  "/deleteUserFromAdmin/:id",
  adminProtect,
  authorizeRoles("admin"),
  deleteUser,
);
router.put(
  "/updateUserFromAdmin/:id",
  adminProtect,
  authorizeRoles("admin"),
  updateUser,
);

// record side
router.post(
  "/createRecordFromAdmin",
  adminProtect,
  authorizeRoles("admin"),
  createRecord,
);
router.delete(
  "/deleteRecordFromAdmin/:id",
  adminProtect,
  authorizeRoles("admin"),
  deleteRecord,
);
router.put(
  "/updateRecordFromAdmin/:id",
  adminProtect,
  authorizeRoles("admin"),
  updateRecord,
);

module.exports = router;

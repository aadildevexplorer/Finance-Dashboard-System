const express = require("express");
const {
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const protect = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const router = express.Router();

router.post(
  "/createUser",
  protect,
  authorizeRoles("admin", "analyst", "viewer"),
  createUser,
);
router.get(
  "/singleUser/:id",
  protect,
  authorizeRoles("admin", "analyst", "viewer"),
  getSingleUser,
);
router.delete(
  "/deleteUser/:id",
  protect,
  authorizeRoles("admin", "analyst", "viewer"),
  deleteUser,
);
router.put(
  "/updateUser/:id",
  protect,
  authorizeRoles("admin", "analyst", "viewer"),
  updateUser,
);

module.exports = router;

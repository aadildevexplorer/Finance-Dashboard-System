const express = require("express");
const {
  createRecord,
  getSingleRecord,
  deleteRecord,
  updateRecord,
} = require("../controllers/record.controller");
const protect = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const router = express.Router();

router.post("/createRecord", protect, authorizeRoles("admin"), createRecord);
router.get(
  "/singleRecord/:id",
  protect,
  authorizeRoles("viewer"),
  getSingleRecord,
);
router.delete(
  "/deleteRecord/:id",
  protect,
  authorizeRoles("viewer"),
  deleteRecord,
);
router.put("/updateRecord/:id", protect, authorizeRoles("viewer"), updateRecord);

module.exports = router;

const express = require("express");
const { getDashboard } = require("../controllers/dashboardSummary.controller");
const protect = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

const router = express.Router();

router.get(
  "/summary",
  protect,
  authorizeRoles("admin", "analyst"),
  getDashboard,
);
module.exports = router;

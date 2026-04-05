const dashboardSummeryService = require("../services/dashboardSummary.service");
const getDashboard = async (req, res) => {
  const data = await dashboardSummeryService.getDashboardSummary();
  res.status(200).json({
    success: true,
    data,
  });
};

module.exports = { getDashboard };

const Record = require("../models/record.model");

const getDashboardSummary = async () => {
  try {
    // Total Income
    const income = await Record.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    // Total Expense
    const expense = await Record.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } },
    ]);

    // Category Wise
    const categoryTotals = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    // Recent Activity
    const recent = await Record.find().sort({ createdAt: -1 }).limit(5);

    // Monthly Trend
    const monthly = await Record.aggregate([
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" },
        },
      },
    ]);

    const totalIncome = income[0]?.total || 0;
    const totalExpenses = expense[0]?.total || 0;

    return {
      totalIncome,
      totalExpenses,
      netBalance: totalIncome - totalExpenses,
      categoryTotals,
      recent,
      monthly,
    };
  } catch (error) {
    throw new Error("Failed to fetch dashboard summary");
  }
};

module.exports = { getDashboardSummary };

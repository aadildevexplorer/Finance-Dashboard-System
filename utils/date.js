const formatDate = (date) => {
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

module.exports = { formatDate };

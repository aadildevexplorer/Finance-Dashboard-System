const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // check role exist
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: "No role found" });
    }

    // check allowed roles
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};

module.exports = { authorizeRoles };

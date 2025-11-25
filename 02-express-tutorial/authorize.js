const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "nhan") {
    req.user = { name: "nhan", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorize");
  }
};

module.exports = authorize;

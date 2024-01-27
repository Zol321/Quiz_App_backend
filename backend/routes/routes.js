const Router = require("express");
const router = Router();
const { createUser, loginUser } = require("../controller/userController");
const userModel = require("../database/schema/userModel");

const valiadateEmailAddress = async (req, res, next) => {
  const userData = req.body;
  const user = await userModel.findOne({ email: userData.email });
  if (!user) {
    next();
  } else {
    res.status(403).send({ message: "email is already taken" });
  }
};

// router.post("/signup", valiadateEmailAddress, createUser);
router.post("/signup", valiadateEmailAddress, createUser);
router.post("/login", loginUser);


module.exports = router;

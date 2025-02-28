const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/authController");
const validate = require("../middlewares/authValidate");
const signup = require("../validators/validation");


router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signup),authcontrollers.register);
router.route("/login").post(authcontrollers.login)
module.exports = router;

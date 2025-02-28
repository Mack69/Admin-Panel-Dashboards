const express = require("express");
const router = express.Router();
const contactContollers = require("../controllers/contactController");

router.route("/contact").post(contactContollers.contactForm);

module.exports=router;
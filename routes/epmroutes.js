const express = require("express");
const router = express.Router();
const empController = require("../controllers/empController");
const authController = require("../controllers/authController");

router.post("/login", authController.login);
router.post("/", empController.createEmp);
router.get("/:id", empController.findOne);
router.delete("/:id", empController.deleteEmp);

module.exports = router;
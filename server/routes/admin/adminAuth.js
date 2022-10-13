const router = require("express").Router();
const adminAuthController = require("../../controllers/admin/adminAuthController");

router.post("/signin",  adminAuthController.signIn);
router.post("/signup", adminAuthController.signUp);

module.exports = router;

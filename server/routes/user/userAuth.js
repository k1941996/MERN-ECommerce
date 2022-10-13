const router = require("express").Router();
const userAuthController = require("../../controllers/user/userAuthController");

router.post("/signin", userAuthController.signIn);
router.post("/signup", userAuthController.signUp);

module.exports = router;

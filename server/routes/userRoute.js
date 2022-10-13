const router = require("express").Router();
const userController = require("./../controllers/userController");

router.get("/signin", (req, res) => {
  res.json({ message: "OK Report hai" });
});
router.post("/signup", userController.signIn);
router.post("/signin",userController.signUp);

module.exports = router;

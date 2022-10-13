const router = require("express").Router();

const authRouter = require("./adminAuth");

router.use(authRouter);

module.exports = router;

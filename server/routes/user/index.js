const router = require('express').Router();

const userAuthRouter = require('./userAuth');

router.use(userAuthRouter);

module.exports = router;

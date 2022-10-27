const router = require('express').Router();

const adminRoute = require('./admin');
const userRoute = require('./user');

router.use('/admin', adminRoute);
router.use('/user', userRoute);

module.exports = router;

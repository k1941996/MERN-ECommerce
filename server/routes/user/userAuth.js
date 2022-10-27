const router = require('express').Router();
const userAuthController = require('../../controllers/user/userAuthController');
const { validateSignUpRequest, isRequestValidated } = require('../../validators/authValidator');

router.post('/signin', userAuthController.signIn);
router.post('/signup', validateSignUpRequest, isRequestValidated, userAuthController.signUp);

module.exports = router;

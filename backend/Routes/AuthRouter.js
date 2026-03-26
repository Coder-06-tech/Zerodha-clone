const {Signup,Login,Logout}=require('../controllers/AuthController');
const { userVerification } = require('../controllers/AuthMiddleware');
const router=require('express').Router();
router.post('/signup',Signup);
router.post('/login',Login)
router.get('/verify',userVerification);
router.post('/logout',Logout);
module.exports=router;
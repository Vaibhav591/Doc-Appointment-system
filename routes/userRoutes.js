const express = require('express')
const { loginController, registerController,authController,applyDoctorController, getAllNotificationController, deleteAllNotificationController } = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/AuthMiddleware');

//router object
const router = express.Router()

//router
//LOGIN||POST
router.post('/login',loginController);

//REGISTER|| POST
router.post('/register', registerController);

//Auth || POST
router.post("/getUserData",authMiddleware, authController);

//Apply Doctor || POST
router.post("/apply-doctor",authMiddleware,applyDoctorController);

//Notification || POST
router.post("/get-all-Notification",authMiddleware,getAllNotificationController);

//Notification || POST
router.post("/delete-all-Notification",authMiddleware,deleteAllNotificationController);

module.exports = router;
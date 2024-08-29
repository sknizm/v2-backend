const express = require("express");
const { getAllUsers, createUser, checkUser, getOneUserByEmail, updateUserByEmail } = require("../controllers/userController");
const router = express.Router();


router.get('/',getAllUsers)
router.post('/',createUser)
router.post('/check',checkUser)
router.post('/oneByEmail',getOneUserByEmail)
router.put('/',updateUserByEmail)


module.exports = router;
const express = require("express");
const router = express.Router();
const {getAllEnquiry, deleteEnquiryById, postEnquiry} = require('../controllers/enquiryController')

router.get('/',getAllEnquiry)
router.post('/',postEnquiry)
router.delete('/',deleteEnquiryById)


 
module.exports = router;
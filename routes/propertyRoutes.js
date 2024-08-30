const express = require("express");
const router = express.Router();
const { getPropertyByType, getLatestProperties, deleteProperty, getAllProperty, createProperty, getOnePropertyById} = require("../controllers/propertyController");


router.get('/',getAllProperty);
router.post('/',createProperty);
router.post('/oneById',getOnePropertyById);
router.post('/deleteById',deleteProperty);
router.get('/getLatest',getLatestProperties);
router.post('/getByType',getPropertyByType);




module.exports = router;



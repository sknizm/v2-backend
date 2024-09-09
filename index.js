const express = require("express");
const config = require("./config/config");
const connectDB = require("./database/db");
const app = express();
const cors = require("cors")
const path = require('path');
const port = config.port;
const uploadRoutes = require('./routes/uploadRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes')
const userRoutes = require('./routes/userRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));


// Connect to MongoDB Database
connectDB();

// EndPoints
app.use('/users',userRoutes)
app.use('/property',propertyRoutes);
app.use('/image-upload', uploadRoutes);
app.use('/enquiry', enquiryRoutes);


// Static folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.get('/',(req,res)=>{
    res.send("<h1>Welcome to my API</h1>");
})

app.listen((error)=>{
    if(!error){
        console.log("The Server is running at PORT:",port)
    }
    else{
        console.log(error)
    }
})

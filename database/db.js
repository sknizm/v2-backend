const mongoose = require("mongoose")
const config = require("../config/config")

const connectDB = async () =>{
   try{
    await mongoose.connect(config.mongo_url)
    console.log("MongoDB Connected")
   }catch(error){
    console.error(error.message);
        process.exit(1);
   }
}

module.exports = connectDB;
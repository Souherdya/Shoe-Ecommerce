const mongoose = require("mongoose");
const ConnectDB = async()=>{
   try{ 
    await mongoose.connect("mongodb://127.0.0.1:27017/myDataBase");
    console.log("Connected to DB");
   }
   
   catch(error){
    console.log("Error in connecting...")

   }
}
module.exports = ConnectDB;
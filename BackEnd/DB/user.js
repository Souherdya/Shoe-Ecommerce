const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Name:{
        type : String,
        required : true,
        },
    
    Designation:{
        type : String,
        required : true,
        },
    
    EmailID:{
        type : String,
        required : true,
        },
    
    location:{
        type : String,
        required : true,
        },
    
    ContactNumber:{
        type : String,
        required : true,
        }
    
})
const User  = mongoose.model('User',userSchema)
module.exports = User
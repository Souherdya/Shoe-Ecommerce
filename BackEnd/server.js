const express = require("express");
const app = express();
const port = 8000;
const connectDb = require("./DB/dbCon")
const User = require("./DB/user");


//Middle ware for parsing JSON//

app.use(express.json());

//Registration//

app.post('/register',async(req,res)=>{
    try{
        const {Name,Designation,EmailId,location,ContactNumber} = req.body; 
        console.log(req.body);
        const user = new User({Name,Designation,EmailId,location,ContactNumber});
        await user.save();
        res.status(201).json({message : "Registration successfull"});
    }
    
    catch(error){
        res.status(500).json({error:"Failed!"});
        }
    });

app.listen(port,()=>{
    console.log("Server running on port 8000");
});

connectDb();
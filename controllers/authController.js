const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Emp = require("../models/empModel")

exports.login =async(req, res, next)=>{
    try{
        const {email, password}= req.body;
        const emp =await Emp.findOne({email}).select('+password');
        if(!emp){
            return res.status(404).json({ success: false, message:"is not defind"});
        }
        const ismatch = await bcrypt.compare(password,emp.password)

        if(!ismatch){
            return res.status(401).json({ success: false, message: "pass is wrong"});

          
        }
        const token = jwt.sign({empid:emp._id},process.env.jwt_secret,{expiresIn:"1h"})
        res.cookie(
            "token",token,{httpOnly:true, maxAge:60*60*1000})
            res.status(200).json({success:true, message:"logged"})
    }
     catch(e){
        next(error)
    }
};

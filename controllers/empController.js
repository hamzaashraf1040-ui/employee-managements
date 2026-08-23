const Emp = require("../models/empModel");
const bcrypt = require("bcryptjs");

exports.createEmp = async (req, res, next)=>{
    try {
        const { name, email, age, password } = req.body;
        const hashpassword = await bcrypt.hash(password, 10);
        const emp = await Emp.create({
            name,
            email,
            password: hashpassword,
            department
        
        });
        res.status(201).json({
            success: true,
            message: "employee created",
            data: emp
        })
    }
    catch (error){
        next(error)
    }}

exports.findOne = async (req, res, next) => {
    try {
        const emp = await Emp.findById(req.params.id);
        if (!emp) {
        return res.status(404).json({ success: false, message: "emp not found" });
        }
        res.status(200).json({ success: true, data: emp });
         } catch (e) {
        next(e);
        }
    }
exports.deleteEmp = async(req, res, next)=>{
        try{
            const emp = await Emp.findByIdAndDelete(
                req.params.id);
                if(!emp){
                    return res.status(404).json(
                        { success: false, message: "emp not found" });
                    
                }
                res.status(200).json({
                    success:true,
                    message: "employee deleted"
                })
            }
                catch (e){
                    next(error)
                }
     }

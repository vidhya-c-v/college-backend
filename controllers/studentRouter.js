const express=require("express")
const studentModel=require("../models/studentModel")
const router=express.Router()
router.post("/add",async(req,res)=>{
    let data=req.body
    let student=new studentModel(data)
    let result=await student.save()
    res.json({
        status:"success"
    })

})
module.exports=router
const express=require("express")
const markModel=require("../models/markModel")

const router=express.Router()

router.post("/addmark",async(req,res)=>{
    let data=req.body
    let post=new markModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

module.exports=router
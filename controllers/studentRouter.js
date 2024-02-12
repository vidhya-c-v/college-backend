const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

const studentModel = require("../models/studentModel")
router.post("/addstud", async (req, res) => {

    let { data } = { "data": req.body }
    let password = data.password
    
const hashedPassword=await hashPasswordGenerator(password)
data.password=hashedPassword
let student = new studentModel(data)
let result = await student.save()
            res.json({
                status: "success"
            })



})

router.get("/viewstud",async(req,res)=>{
    let data=await studentModel.find()
    res.json(data)
})



module.exports = router
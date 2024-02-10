const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

const studentModel = require("../models/studentModel")
router.post("/signup", async (req, res) => {

    let { data } = { "data": req.body }
    let password = data.password
    
const hashedPassword=await hashPasswordGenerator(password)
data.password=hashedPassword
let blog = new studentModel(data)
            let result = await blog.save()
            res.json({
                status: "success"
            })



})



module.exports = router
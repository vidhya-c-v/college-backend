const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema(
    {
      name:String,
      rollno:String,
      admno:String,
      collegename:String,
      parentname:String,
      mobileno:String,
      emailId:String,
      password:String
      

    }
)
module.exports=mongoose.model("student",studentSchema)
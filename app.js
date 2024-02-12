const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const studentRouter=require("./controllers/studentRouter")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://vidhya_14:vidhya_14@cluster0.u7pxfo8.mongodb.net/collegeDb?retryWrites=true&w=majority",
{useNewUrlParser:true})
app.use("/api/college",studentRouter)
// app.use("/api/mark",markRouter)
app.listen(3001,()=>{
    console.log("server runnnig")
})
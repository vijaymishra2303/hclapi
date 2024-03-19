// const mongoose=require("mongoose")
// const studentSchema=new mongoose.Schema({
// rollno:Number,
// name:String,
// marks:Number
// })
// module.exports=mongoose.model("students",studentSchema)




const mongoose=require("mongoose")
const ImageSchema=mongoose.Schema({
    name:String,
    image:String
})
module.exports=mongoose.model("students",ImageSchema)
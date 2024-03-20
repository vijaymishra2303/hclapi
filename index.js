const express=require("express")
const cors=require("cors")
const app=express()

require("./mongoosconn01")
app.use(express.json())
app.use(cors())
const studentmodel=require("./studentschema02")

app.get("/",async (req,resp)=>
{
const result=await studentmodel.find()
resp.send(result)
})

app.post("/",async(req,resp)=>{
    const data=await new studentmodel(req.body)
    const result=await data.save()
    resp.send(result)
})


app.delete("/",async (req,resp)=>
{
const result=await studentmodel.deleteOne({rollno:req.body.rollno})
resp.send(result)
})
app.listen(4000)


//file upload
// const express=require("express")
// const app=express()
// const multer=require("multer")
// const path=require("path")
// const fs=require("fs")
// require("./mongoosconn01")
// const ImageModel=require("./studentschema02")
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null,"public/uploads" );
//     },
//     filename: (req, file, cb) => {
//       cb(null,file.originalname);
//     }
//   });
//   const upload = multer({ storage: storage }).single("file");
//  app.post("/",(req,resp)=>
//  {
//    // resp.send("upload")
//     upload(req,resp,(err)=>{
//         if(err)
//         {
//           console.log(err)
//         }
//         else{
//             const newImage=new ImageModel({
//                 name:req.body.name,
//                 image:"http://localhost:4000/uploads"+req.file.filename
//             })
//              newImage.save()
//              resp.send("File Uploaded") 
//         }
//     })
//  })
//  app.listen(4000)






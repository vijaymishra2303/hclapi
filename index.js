const express=require("express")
const app=express()
require("./mongoosconn01")
const studentmodel=require("./studentschema02")
app.use(express.json())
app.get("/",async (req,resp)=>
{
const result=await studentmodel.find()
resp.send(result)
})





app.post("/",async(req,resp)=>{
    const data=await new studentmodel(req.body)
    const result=await data.save()
    resp.send(result)
}
)
app.listen(4000)
const express =require("express");
require("./db/connection");
const Student= require("./model/student")
const  newRouter=require("./router/router")


 const app = express();

 app.use(express.json())
 app.use(newRouter)

// const port=8000;

var port = process.env.PORT || 8000;





//  app.get("/", (req,res)=>{
//    res.send("hello server i am here at 8000")
//  })
//  app.post("/student", (req,res)=>{
//     const user =new Student(req.body);

//     // console.log(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//           res.status(400).send(e)
//     })
    
//  })




app.listen(port,()=>{
    console.log(`server is rinning at port ${port}`)
})
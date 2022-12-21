const express =require("express");
const router = new express.Router();
const Student =require("../model/student")

//post requist

router.post("/student",async(req,res)=>{

    try{
          const user =new Student(req.body);
          const createStudent=await user.save()
          res.status(201).send(createStudent)

      }catch(e){
      res.status(400).send(e)
      }
    
})

// get request 

router.get("/student",async(req,res)=>{

   try{
       
      const studentData= await Student.find();
      res.send(studentData)

   

   }catch(e){
     res.status(400).send(e)
   }
})




// get the indivisual student data by id

router.get("/student/:id",async(req,res)=>{

   try{
     
     const _id =req.params.id;
     const studentIdData= await Student.findById(_id);
     res.send(studentIdData);
   }catch(e){
         res.status(404).send(e);
   }

})

// patch requist
router.patch('/student/:id',async(req,res)=>{

   try{
       const _id =req.params.id;
       const updateStudentData= await Student.findByIdAndUpdate(_id, req.body,{
       new:true
     });
      res.send(updateStudentData);
       
   }catch(e){
     res.status(404).send(e)
   }

})

// delete requist 

router.delete("/student/:id",async(req,res)=>{
   
   try{
   
   const deleteStudentData= await Student.findByIdAndDelete(req.params.id);
   if(!req.params.id){
       return res.status(404).send()
   }
   res.send(deleteStudentData)

   }catch(e){
        res.status(500).send(e)
   }


})



module.exports=router;
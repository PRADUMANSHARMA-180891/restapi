const mongoose=require("mongoose");


     mongoose.connect("mongodb://localhost:27017/newapi",{
    
        // useCreatendex: true, 
        // useFindAndModify: false, 
        // useNewUrlParser: true, 
        // useUnifiedTopology: true 
}).then(()=>{
    console.log("database connection is sucessfull")
}).catch((e)=>{
    console.log(e)
})
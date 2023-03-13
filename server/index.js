const express=require('express')
const port=process.env.PORT||5000
const connect =require("./db/db");
const pizzaRoutes=require("./routes/pizzaRoutes")
require("dotenv").config()

const app=express();
//Middlewares
app.use(express.json());
//route middleware
app.use("/api/pizza",pizzaRoutes);
//Server test route
app.get("/",(req,res)=>{
    res.status(200).json({status:true,message:"Server is online and working!"})
})
//Connection to mongo db
connect(process.env.MONGO_URI)


//Server listening
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

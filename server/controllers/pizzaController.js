const pizzaDb=require("../Model/pizzaModel")


const testRoute=(req,res)=>{
    res.status(200).json({message:"Pizza Route is working fine"})
}




module.exports={testRoute}
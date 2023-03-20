const userDb=require("../Model/userModel")

const test=(req,res)=>{
    res.status(200).json({message:"User Route working fine"})
}

const findUser=async(req,res)=>{
    const id=req.params.id;
    try {
        const user=await userDb.findById({_id:id}).populate('order')
        if(user)
        {
            res.status(200).json({message:"User Found",user})
        }
        else{
            res.status(404).json({message:"User Not found"})
        }
    } catch (error) {
        res.status(500).json({message:"Error in finding user",error})
    }
}


module.exports={test,findUser}
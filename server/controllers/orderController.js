require("dotenv").config
const {v4 : uuidv4} = require('uuid')
const stripe=require("stripe")(process.env.STRIPESECRET)




const test=(req,res)=>{
    res.status(200).json({message:"Order Route Working fine"})
}

const placeOrder=async(req,res)=>{
    const{subtotal,token,currentuser,cartItems}=req.body
    try {
        const customer=await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        
        const payment=await stripe.paymentIntents.create({
            amount:subtotal*100,
            currency:'inr',
            customer:customer.id,
            receipt_email:token.email,
        },{
            idempotencyKey:uuidv4()
        })
       
        

        if(payment){
            console.log(payment)
            res.status(200).json({message:"Payment successful"})
        }
        else{
            res.status(500).json({message:"Error in processing payment"})
        }
    } catch (error) {
        console.log("error occured here")
        console.log(error)
        res.status(500).json({message:"Error occured in processing payment ",error})
    }
}



module.exports={test,placeOrder}
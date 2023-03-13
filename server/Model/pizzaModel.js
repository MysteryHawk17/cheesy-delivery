const mongoose=require("mongoose")

const pizzaSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    varients:{
        type:Array,
        required:true
    },
    prices:{
        type:Array,
        required:true
    },
    catagory:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})
const pizzaModel=mongoose.model("Pizza",pizzaSchema)
module.exports=pizzaModel;
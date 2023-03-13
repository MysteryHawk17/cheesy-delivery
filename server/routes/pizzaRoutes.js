const router=require("express").Router()
const { testRoute } =require("../controllers/pizzaController")


router.get("/test",testRoute)



module.exports=router;
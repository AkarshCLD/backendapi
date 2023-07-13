const  category  = require("../controller/categoryController");

const categoryRouter=require("express").Router();
categoryRouter.get("/category",category)



module.exports=categoryRouter;
const express=require("express");
const categoryRouter = require("./route/categoryRouter");
const userRouter = require("./route/userRouter");
const app=express()
app.use(express.json());
app.use("/api",categoryRouter)
// http://localhost:5000/api/category
app.use("/api/user",userRouter)

//http://localhost:5000/api/user/register
app.listen(5000,()=>{
    console.log("server is running on the port 5000")
})
















//301169
// 301377
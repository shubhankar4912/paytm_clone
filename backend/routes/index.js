const express = require("express");
const userRouter=require("./user")
const accountRouter=require("./account")
const router=express.Router();
router.use("/use",userRouter)
router.use("/account",accountRouter);
module.exports=router;
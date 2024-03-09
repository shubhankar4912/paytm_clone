const express=require('express');
const {default:mongoose}=require('mongoose');
const router = require('./user');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const router=express.Router();

router.get("/balance",authMiddleware,async (req,res)=>{
    const account=await Account.findOne({
        userId:req.userId
    });
    res.json({
        balance:account.balance
    })
});
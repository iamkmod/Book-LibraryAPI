const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
exports.register=async(req,res)=>{
const {email,password}=req.body;
const hash=await bcrypt.hash(password,10);
res.json(await User.create({email,password:hash}));};
exports.login=async(req,res)=>{
const {email,password}=req.body;
const user=await User.findOne({email});
if(!user)return res.status(400).json({msg:"No user"});
const ok=await bcrypt.compare(password,user.password);
if(!ok)return res.status(400).json({msg:"Wrong"});
const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
res.json({token});};
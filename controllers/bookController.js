const Book = require("../models/Book");
exports.create=async(req,res)=>res.json(await Book.create(req.body));
exports.getAll=async(req,res)=>{
const {page=1,search=""}=req.query;
const limit=5;
const books=await Book.find({title:{$regex:search,$options:"i"}})
.skip((page-1)*limit).limit(limit)
.populate("authors borrowedBy issuedBy");
res.json(books);};

exports.getOne=async(req,res)=>{
const book=await Book.findById(req.params.id)
.populate("authors borrowedBy issuedBy");
res.json(book);};
exports.borrow=async(req,res)=>{
  const {studentId,attendantId,returnDate}=req.body;
  const book=await Book.findById(req.params.id);
  if(book.status==="borrowed") return res.status(400).json({msg:"Already borrowed"});
  book.status="borrowed";
  book.borrowedBy=studentId;
  book.issuedBy=attendantId;
  book.returnDate=returnDate;
  await book.save();
  res.json(book);
};
exports.returnBook=async(req,res)=>{
  const book=await Book.findById(req.params.id);
  if(book.status==="available") return res.status(400).json({msg:"Not borrowed"});
  book.status="available";
  book.borrowedBy=null;
  book.issuedBy=null;
  book.returnDate=null;
  await book.save();
  res.json(book);
};
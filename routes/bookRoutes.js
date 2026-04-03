const express = require('express'); //node module for creating server
const router = express.Router();  //router instance
const auth = require("../middleware/auth"); //authentication middleware 
const Book = require("../models/Book"); //Book model

const {create, getAll, getOne, update, remove} = require("../config/endpoints"); //CRUD operations

//Create, Read, Update, Delete routes for Book entity with authentication

router.post("/", auth, create(Book));
router.post("/:id/borrow", auth, require("../controllers/bookController").borrow);
router.post("/:id/return", auth, require("../controllers/bookController").returnBook);
router.get("/", auth, getAll(Book));
router.get("/:id", auth, getOne(Book));
router.put("/:id", auth, update(Book));
router.delete("/:id", auth, remove(Book));

module.exports = router;


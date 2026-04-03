const express = require('express'); //node module for creating server
const router = express.Router();  
const auth = require("../middleware/auth"); //authentication middleware 
const Author = require("../models/Author"); //Author model
const {create, getAll, getOne, update, remove} = require("../config/endpoints"); //CRUD operations

//Create, Read, Update, Delete routes for Author entity with authentication

router.post("/", auth, create(Author));
router.get("/", auth, getAll(Author));
router.get("/:id", auth, getOne(Author));
router.put("/:id", auth, update(Author));
router.delete("/:id", auth, remove(Author));
module.exports = router;


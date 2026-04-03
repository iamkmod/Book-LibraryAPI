const express = require('express'); //node module for creating server
const router = express.Router();  
const auth = require("../middleware/auth"); //authentication middleware 
const Student = require("../models/Student"); //Author model
const {create, getAll, getOne, update, remove} = require("../config/endpoints"); //CRUD operations

//Create, Read, Update, Delete routes for Student entity with authentication

router.post("/", auth, create(Student));
router.get("/", auth, getAll(Student));
router.get("/:id", auth, getOne(Student));
module.exports = router;


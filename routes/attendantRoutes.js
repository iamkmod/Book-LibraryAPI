const express = require('express'); //node module for creating server
const router = express.Router();  
const auth = require("../middleware/auth"); //authentication middleware 
const Attendant = require("../models/Attendant"); //Author model
const {create, getAll,} = require("../config/endpoints"); //CRUD operations

//Create, Read, Update, Delete routes for Attendant entity with authentication

router.post("/", auth, create(Attendant));
router.get("/", auth, getAll(Attendant));
module.exports = router;


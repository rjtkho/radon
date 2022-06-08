const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const userModel = require('../models/userModel.js');








router.post("/creatBook",UserController.creatBook)
    
router.post("/getBooksInYear",UserController.getBooksInYear)
 

router.get("/bookList",UserController.bookList)

router.post("/getParticularBooks",UserController.getParticularBooks)
router.get("/getXINRBooks",UserController.getXINRBooks)
router.get("/getRandomBooks",UserController.getRandomBooks)




//router.get("/t",UserController.bookList)


router.post("/createBook",UserController.createBook)
router.post("/createAuthor",UserController.createAuthor)
router.get("/getChetanBhagatBook",UserController.getChetanBhagatBook)
router.get("/authorOfBook",UserController.authorOfBook)
router.get("/findBook",UserController.findBook)

module.exports = router;
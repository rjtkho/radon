const { model } = require("mongoose")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const creatNewBook= async function(req,res){
    let data= req.body
    let savedBookData= await UserModel.create(data)
    res.send({msg: savedBookData})
}

const getBookList=async function(req,res){
    let allBooks= await UserModel.find()
    res.send({msg: allBooks})
}


module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.creatNewBook=creatNewBook
module.exports.getBookList=getBookList
const res = require("express/lib/response")
const { default: mongoose } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let a=req.body.author_id
    if(a==undefined){return res.send({mas:"this is mendatory"})}
    else{

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
     }}
    // if(mongoose.isValidObjectId.author_id){
    //    res.send(a)


    // }else{
    //     res.send("error")
    // }



const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    
    let specificBook = await bookModel.find().populate("author_id").populate("publisher")
    res.send({data:specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

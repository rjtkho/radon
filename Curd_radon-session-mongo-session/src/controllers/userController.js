const { model, modelNames } = require("mongoose")
const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")





const creatBook= async function(req,res){
    let data= req.body
    let savedBookData= await UserModel.create(data)
    res.send({msg: savedBookData})
}



const bookList=async function(req,res){
    let allBooks= await UserModel.find().select({bookName:1, authorName: 1,_id:0})
    res.send({msg: allBooks})
}

const getBooksInYear= async function(req,res){
    let Publishyear= req.body.year
    let savedBookData= await UserModel.find({year:Publishyear})
    res.send({msg: savedBookData})
}

const getParticularBooks= async function(req,res){
    let fetch= req.body
    let savedBookData= await UserModel.find( {  $or:[  {bookName: fetch.bookName},{tage:fetch.tage},{totalPages:fetch.totalPages},{year:fetch.year},{stockAvailable:fetch.stockAvailable},{authorName:fetch.authorName}]})
    res.send({msg: savedBookData})}



    const getXINRBooks= async function(req,res){
        let savedBookData= await UserModel.find({$or: [{"price.IndianINR":{$eq:"200INR"}},{"price.IndianINR":{$eq:"100INR"}},{"price.IndianINR":{$eq:"500INR"}}]})
        res.send({msg: savedBookData})}

        const getRandomBooks= async function(req,res){
          
            let savedBookData= await UserModel.find({$or:[{stockAvailable:true,$gte:{totalPages:500}}]})
            res.send({msg: savedBookData})}

            

            const createBook= async function(req,res){
                let data= req.body
                let savedBookData= await UserModel.create(data)
                res.send({msg: savedBookData})
            }
            const createAuthor= async function(req,res){
                let data= req.body
                let savedBookData= await UserModel.create(data)
                res.send({msg: savedBookData})
            }
            
               const getChetanBhagatBook= async function(req,res){
                let savedBookData= await UserModel.find({author_name: "Chetan Bhagat"}).select("author_id")
                let bookData=await userModel.find({author_id:savedBookData[0].author_id})
                res.send({msg: bookData})}

                const authorOfBook= async function(req,res){
                    let savedBookData= await UserModel.find({name: "Two states"},{$set:{price:100}},{new:true})
                    let authorData= await UserModel.find({author_id:savedBookData.author_id}).select("author_name")
                    let price=savedBookData.prices
                    res.send({msg:authorData,price})}



                    const findBook= async function(req,res){
                        let savedBookData= await UserModel.find({price: {$gte :50,$lte:100}.select({author_id:1})})
                       
                         res.send({msg:savedBookData})}



module.exports.creatBook=creatBook
module.exports.bookList=bookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks
module.exports.findBook=findBook



module.exports.getChetanBhagatBook=getChetanBhagatBook
module.exports.authorOfBook=authorOfBook
module.exports.createBook=createBook
module.exports.createAuthor=createAuthor





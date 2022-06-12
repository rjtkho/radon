
const bookModel= require("../models/bookModel")
const PublisherModel= require("../models/publisherModel")
const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}


const bookAndPerform= async function (req, res) {
    let publisher = req.body

    let publisherCreated = await PublisherModel.updateOne({name:"Two states"},{$set:{price: "100"}})
    res.send({"data": publisherCreated})
}


module.exports.createPublisher= createPublisher
module.exports.bookAndPerform=bookAndPerform
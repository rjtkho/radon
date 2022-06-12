const bookModel= require("../models/bookModel")
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const PublisherSchema = new mongoose.Schema( {
    name: String,
    headQuarter:String
    }

, { timestamps: true });


module.exports = mongoose.model('NewPublisher', PublisherSchema)
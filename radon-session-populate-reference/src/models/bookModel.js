const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    HardCover:{default:false},
    author_id: {
        type: ObjectId,
        ref: "NEWAuthor"
    },
  
    price: Number,
    ratings: Number,
    publisher:{
        type:ObjectId,
        ref:"NewPublisher"
    }

}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)

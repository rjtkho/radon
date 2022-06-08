const mongoose = require('mongoose');

/*const bookSchema = new mongoose.Schema(
    {
    bookName: {
        type: String,
        required: true,
    },
    price:{IndianPrice:String,
           EuropeanPrice:String},

           year:{type:Number,default:2021},
           tage:[String],
    authorName: String,
   totalPages:Number,
   stockAvailable:Boolean},{ timestamps: true })*/

const authorSchema = new mongoose.Schema(
    {

        author_id: { type: Number, required: true },
        author_name: String,
        age: Number,
        address: String
    },

    { timestamps: true })


const bookSchema = new mongoose.Schema(

    {
        name: String,
        author_id: {type: Number, required: true },
        price: Number,
        ratings: Number,
    }, { timestamps: true })


module.exports = mongoose.model('Mybooks',bookSchema) //mybooks
module.exports = mongoose.model('AuthorCollection',authorSchema)
//const bookS = mongoose.model('Mybooks',  bookSchema);

//const authorS = mongoose.model('authorCollection', authorSchema);

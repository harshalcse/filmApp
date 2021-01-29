var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var filmsSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    },
    realeaseDate: {
        type: String,
        unique : false,
        required : true
    },
    rating:  {
        type: Enum,
        unique : false,
        required : true 
    },
    ticketPrice: {
        type: String,
        unique : false,
        required : true
    },
    country:{
        type: String,
        unique : false,
        required: true
    },
    photo:{
        type: String,
        unique : false,
        required: true
    }
}, {
    timestamps: true
});

module.exports = filmsSchema;
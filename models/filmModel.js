var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//const mongoDbConnect = require('../Utils/mongooseConnect')
mongoose.connect("mongodb://localhost:27017/myApp", {useNewUrlParser: true});
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
    realeaseDate: {
        type: String,
        unique : false,
        required : true
    },
    rating:  {
        type: String,
        enum: ['1','2','3','4','5'],
        default: '1',
        unique : false,
        required : true 
    },
    ticketPrice: {
        type: Number,
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

const models = {};
models.Films = mongoose.model('films', filmsSchema);

module.exports = models;
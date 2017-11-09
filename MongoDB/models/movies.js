const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title : { type:String, required : true },
  poster : String,
  rating : String,
  introduction : String,
  created_at : { type : Date, default : Date.now },
  update_at : { type : Date, default : Date.now }
},{collection:'Movie'})

const Movie = module.exports = mongoose.model('Movie',movieSchema)

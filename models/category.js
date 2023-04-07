const mongoose = require('mongoose')

//define schema
const CategorySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{

        type: String,
        required: true
    }

    },{timestamps:true})


//create collection
//category is the name of collection
//categoryschema is the field of blog collection
const CategoryModel = mongoose.model('category',CategorySchema) 

module.exports = CategoryModel
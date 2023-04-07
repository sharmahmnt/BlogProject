const mongoose =require('mongoose')

// define schema
const ContactSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
},{timestamps:true
})

// create collection
// blog is the name of collections
//  blogschema is the name of field of blog collections
const ContactModel= mongoose.model('contact',ContactSchema)
module.exports=ContactModel


const mongoose =require('mongoose')

// define schema
const AdminSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
    
   
},{timestamps:true
})

// create collection
// blog is the name of collections
//  blogschema is the name of field of blog collections
const AdminModel= mongoose.model('admin',AdminSchema)
module.exports=AdminModel


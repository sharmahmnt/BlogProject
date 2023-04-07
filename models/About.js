const mongoose = require ('mongoose')


// define schema
const AboutSchema =new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
   
    description:{
        type: String,
        required: true
    }
    
   
},{timestamps:true
})
// create collection
// blog is the name of collections
//  blogschema is the name of field of blog collections
const AboutModel= mongoose.model('about',AboutSchema)
module.exports=AboutModel

const mongoose= require('mongoose')
const url ="mongodb://127.0.0.1:27017/blog1project"
const Live_Url = "mongodb+srv://hemantsharma199494:lalitkumar@cluster0.axaw59d.mongodb.net/blog?retryWrites=true&w=majority"

const connectDB =()=>{
    return mongoose.connect(Live_Url)
    .then(()=>{
        console.log("datbase connected...")
    })
    .catch((error)=>{
        console.log(error)
    })
}
module.exports= connectDB

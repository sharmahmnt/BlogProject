const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/web')
const connectDB = require('./db/connectdb')
const fileupload = require("express-fileupload");
var cloudinary =require('cloudinary')
var session = require('express-session')
var flash = require('connect-flash');


//cookies 
const cookieParser = require('cookie-parser')
app.use(cookieParser())


// datbase connection
connectDB()
// this is used for to get data
app.use(express.urlencoded({extended:false}))

// for file upload

app.use(fileupload({useTempFiles:true}));


app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));

app.use(flash());



//router load
app.use('/',web)


//ejs setup
app.set('view engine', 'ejs')





// public route
app.use(express.static('public'))












//server create
app.listen(port, () => {
    console.log('server start localhost:3000')
  })
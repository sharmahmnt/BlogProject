const BlogModel = require("../models/Blog")

const CategoryModel = require("../models/category")
const ContactModel = require("../models/Contact")
const AdminModel = require("../models/Admin")
const AboutModel = require('../models/About')




class FrontController{

    static home= async (req,res)=>{
        try {
            const blogs =await BlogModel.find().sort({_id:-1}).limit(6)
            console.log(blogs)
            res.render('home',{b:blogs})
            
        } catch (error) {
            console.log(error)
            
        }
    }
    static about= async(req,res)=>{
        try {
            const about = await AboutModel.findOne()
            res.render('about')
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
    static contact= (req,res)=>{
        try {
            //console.log("hello")

           
            
            res.render('contact')
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
    static blog= async (req,res)=>{
        const blogs= await BlogModel.find().sort({_id:-1})
        //console.log(blogs)
         res.render('blog',{b:blogs})
    }
    static blog2= async (req,res)=>{
        try {
            //console.log("hello")
            const  blogdetail= await BlogModel.findById(req.params.id)
            const recentblogs= await BlogModel.find().limit(4)
            const category = await CategoryModel.find().limit(2)
            res.render('blog2',{d:blogdetail,r:recentblogs,c:category})
        } catch (error) {
            console.log(error)
            
        }
        
    }
    // static blog2=(req,res)=>{
    //     res.render('blog2')
    // }
    static blog3=(req,res)=>{
        res.render('blog3')
    }
    static login=async(req,res)=>{
        try {
            res.render('login',{message:req.flash('error')})
            
            
        } catch (error) {
            console.log(error)
            
        }

       
    }
    static register = async(req,res)=>{
        try {
            res.render('register',{message:req.flash('error')})
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
    
    // static home=(req,res)=>{
    //     res.send("hello controller")
    // }
    // static about=(req,res)=>{
    //     res.send("hello about section")
    // }
}
module.exports=FrontController
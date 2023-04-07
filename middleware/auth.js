const jwt = require('jsonwebtoken')

const AdminModel = require('../models/Admin')


const checkAdminAuth = async(req,res,next)=>{

    //console.log('hello midddleware')
    const {token} =req.cookies
    //console.log(jwt)K 
    
    if(!token){
        req.flash('error', 'unauthorized admin')
        res.redirect('/login')
    }else{
        const data =jwt.verify(token,'hemantsharma123')
       // console.log(data)

       const admin = await AdminModel.findOne({_id:data.id})
       console.log(admin)
       req.admin =admin
       next()

    }

}
module.exports = checkAdminAuth
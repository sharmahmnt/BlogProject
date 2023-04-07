const ContactModel = require('../../models/Contact')

class ContactController{
    static contactdisplay= async(req,res)=>{

        try {
            const data = await ContactModel.find()
            console.log(data)
            res.render('admin/contact/contactdisplay',{con:data})
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
    static insertcontact= async(req,res)=>{

        try {
            //console.log('gwalior')
            const  insert =await ContactModel.create(req.body)
            console.log(insert)
            res.redirect('/contact')

           
            
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
}
module.exports=ContactController
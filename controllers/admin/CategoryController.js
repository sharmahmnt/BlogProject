const CategoryModel= require('../../models/category')


class CategoryController{
    static categorydisplay = async(req,res)=>{
        try {
            const data= await CategoryModel.find()
            console.log(data)
            res.render('admin/category/categorydisplay',{d:data})
            
        } catch (error) {
            console.log(error)
            
        }
        
    }
    static insertcategory = async(req,res)=>{
        try {
            //console.log(req.body)
            const result = await CategoryModel.create(req.body)
            console.log(result)
            res.redirect('/admin/categorydisplay')
            
        } catch (error) {
            console.log(error)
            
        }
    
    }
    static categoryview = async(req,res)=>{
        try {
            //console.log(req.params.id)
            const result = await CategoryModel.findById(req.params.id)
            console.log(result)
            res.render('admin/category/view',{view:result})
        } catch (error) {
            console.log(error)
            
        }
    }
    static categoryedit = async(req,res)=>{
        try {
            //console.log(req.params.id)
            const result = await CategoryModel.findById(req.params.id)
            console.log(result)
            res.render('admin/category/edit',{edit:result})
        } catch (error) {
            console.log(error)
            
        }
    }
    static categorUpadte = async(req,res)=>{
        try {
            console.log(req.body)
            //console.log(req.params.id)
            const update = await CategoryModel.findByIdAndUpdate(req.params.id,{
                title: req.body.title,
                description:req.body.description
            })
            await update.save()
            res.redirect('/admin/categorydisplay')

            //console.log(update)
            //res.render('admin/category/edit',{edit:result})
        } catch (error) {
            console.log(error)
            
        }
    }
    
    static categoryDelete = async(req,res)=>{
        try {
            console.log(req.body)
            //console.log(req.params.id)
            const Delete =  await CategoryModel.findByIdAndDelete(req.params.id)
            
            res.redirect('/admin/categorydisplay')

            //console.log(update)
            //res.render('admin/category/edit',{edit:result})
        } catch (error) {
            console.log(error)
            
        }
    }
    // static blog2= async (req,res)=>{
    //     try {
    //         //console.log("hello")
    //         const  blogdetail= await BlogModel.findById(req.params.id)
    //         const recentblogs= await BlogModel.find().limit(4)
    //         const category = CategoryModel.find() .limit(2)
    //         res.render('blog2',{d:blogdetail,r:recentblogs,c:category})
    //     } catch (error) {
    //         console.log(error)
            
    //     }
        
    // }
}
module.exports= CategoryController
const BlogModel = require('../../models/Blog')
var cloudinary = require('cloudinary').v2;




cloudinary.config({ 
    cloud_name: 'dk85nynkj', 
    api_key: '554168862152534', 
    api_secret: 'sedGi_LMdAfzT3CqTJJYAgngPYU',
    // secure: true
  });


class BlogController {
    static displayblog = async (req, res) => {

        try {
            const data = await BlogModel.find()
            console.log(data)
            res.render('admin/blog/blogdisplay', { d: data })

        } catch (error) {
            console.log(error)

        }
    }
    
    static insertblog = async (req, res) => {

        try {

            //console.log(req.files.image)

            const file = req.files.image
             const myimage= await cloudinary.uploader.upload(file.tempFilePath,{

                folder:'blog1image'
             })
            //console.log(myimage)
            const result = new BlogModel({
                title:req.body.title,
                description: req.body.description,
                image:{
                    public_id:myimage.public_id,
                    url:myimage.secure_url
                }

            })
            await result.save()
            res.redirect('/admin/blogdisplay')


            // console.log(req.body)
           // const result = await BlogModel.create(req.body)
            //console.log(result)
            // when we use redirect we always take route url  like ('/admin/blogdisplay')
            //res.redirect('/admin/blogdisplay')



            //await result.save()
            // console.log(result)

        } catch (error) {
            console.log(error)

        }
    }
    static blogview = async (req, res) => {
        try {
            // console.log(req.params.id)
            const result = await BlogModel.findById(req.params.id)
            // console.log(data)
            res.render('admin/blog/view', { view: result })

        } catch (error) {
            console.log(error)

        }

    }
    static blogedit = async (req, res) => {
        try {
            const result = await BlogModel.findById(req.params.id)
            res.render('admin/blog/edit', { edit: result })

        } catch (error) {
            console.log(error)

        }
    }
    static blogupdate = async (req, res) => {
        try {
            //console.log(req.body)
            //console.log(req.params.id)
            // first delete image
           const blog = await BlogModel.findById(req.params.id)
            const imageid = blog.image.public_id
            //console.log(imageid)
            await cloudinary.uploader.destroy(imageid)
            //  second update image
            const file = req.files.image
            const myimage= await cloudinary.uploader.upload(file.tempFilePath,{

               folder:'blog1image'
            })

            // first delete image
            
            const update = await BlogModel.findByIdAndUpdate(req.params.id, {

                tittle: req.body.tittle,
                description: req.body.description,
                image:{
                    public_id:myimage.public_id,
                    url:myimage.secure_url
                }

            })
            await update.save()
            res.redirect('/admin/blogdisplay')

        } catch (error) {
            console.log(error)

        }
    }
    static blogDelete = async (req, res) => {
        try {
            //console.log(req.body)
            //console.log(req.params.id)
            const blog = await BlogModel.findById(req.params.id)
            const imageid = blog.image.public_id
            //console.log(imageid)
            await cloudinary.uploader.destroy(imageid)
            await BlogModel.findByIdAndDelete(req.params.id)
            res.redirect('/admin/blogdisplay')

        } catch (error) {
            console.log(error)

        }
    }


}
module.exports = BlogController
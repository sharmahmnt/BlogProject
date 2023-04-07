const AboutModel = require('../../models/About')



class AboutController{
    static Aboutdisplay = async (req, res) => {

        try {
            const data = await AboutModel.findOne()
            //console.log(data)
            res.render('admin/about/display',{a:data})
            

        } catch (error) {
            console.log(error)

        }
    }
    static insertAbout = async (req, res) => {

        try {
            const edit = await AboutModel.create(req.params.id)
            //console.log(data)
            res.redirect('/admin/aboutdisplay',{e:edit})
            

        } catch (error) {
            console.log(error)

        }
    }
    static aboutEdit = async (req, res) => {

        try {
            const edit = await AboutModel.findById(req.params.id)
            //console.log(data)
            res.redirect('/admin/aboutdisplay',{e:edit})
            

        } catch (error) {
            console.log(error)

        }
    }

 
}
module.exports= AboutController
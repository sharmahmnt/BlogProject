const AdminModel = require("../../models/Admin")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


class AdminController {
  static dashboard = async(req, res) => {
    try {
      const {name,email}= req.admin
      res.render('admin/dashboard',{n:name,e:email })
      
    } catch (error) {
      console.log(error)
      
    }
   
  }
  static Register = async (req, res) => {
    try {
      const { name, email, password, confirmpassword } = req.body;
      const admin = await AdminModel.findOne({ email: email });

      if (admin) {
        req.flash("error", "Email already exists");
        res.redirect("/register");
      } else {
        if (name && email && password && confirmpassword) {
          if (password == confirmpassword) {


            const hashpassword = await bcrypt.hash(password, 10)


            const register = await new AdminModel({
              name: name,
              email: email,
              password: hashpassword
            });

            await register.save();
            res.redirect('/login');
          } else {
            req.flash("error", "Password and confirm password does not match");
            res.redirect("/register");
          }
        } else {
          req.flash("error", "All fields are required");
          res.redirect("/register");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // static Register = async (req, res) => {
  //     try {
  //         //console.log(req.body)

  //         const { name, email, password, confirmpassword } = req.body
  //         const admin = await AdminModel.findOne({ email: email })
  //         if (admin) {
  //             req.flash('error', 'email already exist')
  //             res.redirect('/register')
  //         } else {
  //             if (name && email && password && confirmpassword) {
  //                 if (password && confirmpassword) {
  //                     const hashpassword = await bcrypt.hash(password, 10)

  //                     const register = await new AdminModel({
  //                         name: name,
  //                         email: email,
  //                         password: hashpassword
  //                     })
  //                     await register.save()
  //                     res.redirect('/login')

  //                 } else {
  //                     req.flash('error', 'password and confirm password does not match')
  //                     res.redirect('/register')


  //                 }

  //             } else {
  //                 req.flash('error', 'all field are required')
  //                 res.redirect('/register')

  //             }

  //         }



  //     } catch (error) {
  //         console.log(error)

  //     }
  //     //res.render('/register')
  // }
  static Login = async (req, res) => {
    try {
      // console.log(req.body)
      const { email, password } = req.body
      if (email && password) {
        const admin = await AdminModel.findOne({ email: email })
        if (admin != null) {
          const ismatched = await bcrypt.compare(password, admin.password)
          if (ismatched) {
            // genrate jwt  token

            const token = jwt.sign({ id: admin._id }, 'hemantsharma123')
            // console.log(token)
            res.cookie('token', token)
            res.redirect('/admin/dashboard')
          } else {
            req.flash('error', 'password and  password does not match')
            res.redirect('/login')
          }

        } else {
          req.flash('error', 'you are not registerd user')
          res.redirect('/login')


        }

      } else {
        req.flash('error', 'all field are required')
        res.redirect('/login')


      }

    } catch (error) {
      console.log(error)

    }
  }
  static logout = async (req, res) => {
    try {
      res.clearCookie('token')
      res.redirect('/login')

    } catch (error) {
      console.log(error)

    }
  }

}
module.exports = AdminController
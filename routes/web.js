const express= require('express')
const AboutController = require('../controllers/admin/AboutController')
const AdminController = require('../controllers/admin/admincontroller')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const ContactController = require('../controllers/admin/ContactController')
const FrontController = require('../controllers/frontcontroller')
const TeacharController = require('../controllers/teachercontroller')
const BlogModel = require('../models/Blog')
const CategoryModel =require('../models/category')
const auth = require('../middleware/auth')
const router= express.Router()


// FrontController
router.get('/',FrontController.home)
router.get('/about',FrontController.about)
router.get('/contact',FrontController.contact)

router.get('/blog',FrontController.blog)
// router.get('/blog1',FrontController.blog1)
router.get('/blog2/:id',FrontController.blog2)
router.get('/blog3',FrontController.blog3)
router.get('/login',FrontController.login)
router.get('/register',FrontController.register)
// router.get('/blogdetail/:id',FrontController.blogDetail)
//admin controller
router.get('/admin/dashboard',auth,AdminController.dashboard)
router.post('/register',AdminController.Register)
router.post('/verifylogin',AdminController.Login)
router.get('/logout',AdminController.logout)
//blogcontroller
router.get('/admin/blogdisplay', auth,BlogController.displayblog)
router.post('/insertblog',BlogController.insertblog)
router.get('/blogview/:id',BlogController.blogview)
router.get('/blogedit/:id',BlogController.blogedit)
router.post('/blogUpdate/:id',BlogController.blogupdate)
router.get('/blogdelete/:id',BlogController.blogDelete)
//category controller
router.get('/admin/categorydisplay', auth,CategoryController.categorydisplay)
router.post('/insertcategory',CategoryController.insertcategory)
router.get('/categoryview/:id',CategoryController.categoryview)
router.get('/categoryedit/:id',CategoryController.categoryedit)
router.post('/categoryupdate/:id',CategoryController.categorUpadte)
router.get('/category/:id',CategoryController.categoryDelete)

// about controller
router.get('/admin/aboutdisplay', auth,AboutController.Aboutdisplay)
router.post('/insertabout',AboutController.insertAbout)
router.get('/aboutedit/:id',AboutController.aboutEdit)


//contact controller
 router.get('/admin/contactdisplay', auth,ContactController.contactdisplay)
 router.post('/insertcontact',ContactController.insertcontact)



// teacher

router.get('/teacher/display',TeacharController.display)
router.get('/teacher/create',TeacharController.create)
module.exports=router


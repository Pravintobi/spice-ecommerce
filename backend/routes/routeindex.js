import Expres from 'express'
import cors from 'cors'
import productroute from './Productroutes.js'
import ProductReview from './Reviewroutes.js'
import ProductImage from './Imageroutes.js'
import Login from './Loginroutes.js'
import Order from './order&wishlist.js'

const router = Expres.Router()



router.use('/productdetails', productroute)
router.use('/Review',ProductReview)
router.use('/Image', ProductImage)
router.use('/Login',Login)
router.use('/order-wishlist',Order)

router.get('*',(req,res)=>res.send(`<div><h1>404</h1></div>`))

export default router
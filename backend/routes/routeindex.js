import Expres from 'express'
import cors from 'cors'
import productroute from './Productroutes.js'
import ProductReview from './Reviewroutes.js'
import ProductImage from './Imageroutes.js'
import Login from './Loginroutes.js'
import Order from './order&wishlist.js'

const router = Expres.Router()

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
  
  router.use(cors(corsOptions));

router.use('/productdetails', productroute)
router.use('/Review',ProductReview)
router.use('/Image', ProductImage)
router.use('/Login',Login)
router.use('/order-wishlist',Order)

router.get('*',(req,res)=>res.send(`<div><h1>404</h1></div>`))

export default router
import Express from 'express'
import productcategory from '../controller/ProductReview.js'
const router = Express.Router()

router.post('/addreview/:ProductID',productcategory.addReview)
router.get('/getreview/:ProductID',productcategory.getReviews)

export default router
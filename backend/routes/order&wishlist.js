import Express from 'express'
import ordermanagement from '../controller/ordermanagement.js'
const router = Express.Router()

router.post('/createwish', ordermanagement.createwishlist)
router.get('/viewwishlist/:userId',ordermanagement.viewwishlist)
router.delete('/deletewishlist/:userId',ordermanagement.deletewishlist)
router.post('/addtocart/:userId/:ProductId',ordermanagement.addtocart)
router.delete('/deleteaddtocart/:userId',ordermanagement.removecart)

export default router
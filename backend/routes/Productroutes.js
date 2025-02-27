import Express from 'express'
import productcategory from '../controller/Productcontroller.js'
import auth from '../utils/auth.js'
const router = Express.Router()

// router.post('/Productdata', auth.adminAuthMiddleware,productcategory.createProduct)
router.post('/Productdata', productcategory.createProduct)
// router.get('/getproduct/:category',productcategory.getProductsByCategory);
router.get('/getproduct/:category', productcategory.getProductsByCategory);
// router.get('/getproducts/:ID', auth.adminAuthMiddleware,productcategory.getproductByID)
router.get('/getproducts/:ID',productcategory.getproductByID)
// router.get('/getAllProduct', auth.adminAuthMiddleware,productcategory.getAllProduct)
router.get('/getAllProduct',productcategory.getAllProduct)
router.put('/updateProduct/:category/:ProductID', auth.adminAuthMiddleware,productcategory.updateProduct);
router.delete('/deleteProduct/:category/:ProductID', auth.adminAuthMiddleware,productcategory.DeleteProduct);
router.get('/search',productcategory.searchProducts)

export default router
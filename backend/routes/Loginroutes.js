import Express from 'express'
import Login from '../controller/Login.js'
const router = Express.Router()

router.post('/createuser',Login.createUser)
router.post('/createadminuser',Login.createAdminUser)
router.post('/loginuser',Login.loginUser)


export default router


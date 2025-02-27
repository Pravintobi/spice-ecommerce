import bcrypt from 'bcrypt';
import { config } from 'dotenv';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_TOKEN;
const expiry = process.env.JWT_EXPIRY;

const authentication = async(str)=>{

    const salt= await bcrypt.genSalt(config.SALT);
    
    const hash = await bcrypt.hash(str, salt)

    return hash
}

const comparepass = async(hash, str)=>{

   return await bcrypt.compare(str, hash)

}

const createtoken = (payload) => {
    const token = jwt.sign(payload, jwtSecret, {
        expiresIn: expiry, // Corrected spelling
    });
    return token;
};

const adminAuthMiddleware = (req, res, next) => {
    try {
        
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Access token is missing' });
        }

        const decoded = jwt.verify(token, expiry);

        const { userName, email, role } = decoded;
        if (!userName || !email || role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

        req.user = { userName, email, role };

        next();
    } catch (error) {
        res.status(403).json({ message: 'Unauthorized access', error: error.message });
    }
};


export default {
    authentication,
    comparepass,
    createtoken,
    adminAuthMiddleware
}
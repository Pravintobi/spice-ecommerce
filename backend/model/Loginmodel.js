import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const credentialsSchema = new mongoose.Schema({
  userName: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  email: { 
    type: String, 
    validate: {
      validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      message: "Invalid email format",
    },
    required: false,
  },
  role: { 
    type: String, 
    enum: ['admin', 'user'], 
    default: 'user', 
    required: true 
  },
  address:{type:String},
  contact:{type:Number}
  
}, );


export default mongoose.model('Login', credentialsSchema);

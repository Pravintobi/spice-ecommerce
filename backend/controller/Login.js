import {MongoClient} from 'mongodb'
import 'dotenv/config'
import { v4 as uuid } from 'uuid';
import auth from '../utils/auth.js';
import Loginmodel from '../model/Loginmodel.js'


const db_url = process.env.DB_URL;
const db_name = process.env.DB_NAME;
const admin_key = process.env.ADMIN_KEY
const client = new MongoClient(db_url)


const createUser = async(req, res)=>
{
    try {
        await client.connect();
        const UserCollection = client.db(db_name).collection('User');
        
        const { userName, password,confirmPassword, email} = req.body;
        // const { userName, password, email} = req.body;
        
        const hashedPassword = await auth.authentication(password)
    
        if (password !== confirmPassword) {
          return res.status(400).send({ message: 'Password and confirm password do not match' });
        }
        const userId = uuid()
        const newUser = ({
            userId,
          userName,
          password: hashedPassword,
          email,
          role: 'user',
          createdAt: new Date()
         
        });
        console.log('Before Saving User:', newUser)
    
        await UserCollection.insertOne(newUser);
    
        res.status(201).send({ message: 'User created successfully', user: newUser });
      }  catch (error) {
        console.error('Error logging in:', error); // Log detailed error to the console
        res.status(500).send({ message: 'Error logging in', error: error.message });
    }  finally {
        await client.close();
      }
    
}

const loginUser = async (req, res) => {
    try {
      await client.connect();
      const UserCollection = client.db(db_name).collection('User');
  
      const { email, password } = req.body;
      console.log('Searching for email:', email);
      // Find the student by email
      const user = await UserCollection.findOne({ email });
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
  
      // Compare the hashed password
      const match = await auth.comparepass(user.password, password); // Make sure to await this
      if (!match) {
        return res.status(401).send({ message: 'Invalid password' });
      }
  
      // Successful login
      const token = auth.createtoken({
        email:user.email,
        userName:user.userName,
        role:user.role,
        // userId:user.userId
      })
      res.status(200).send({ message: 'Login successful',token });
  
    } catch (error) {
        console.error('Error logging in:', error); // Log detailed error to the console
        res.status(500).send({ message: 'Error logging in', error: error.message });
    } finally {
      await client.close();
    }
  };


const createAdminUser = async (req, res) => {
    const { adminKey, userName, password,confirmPassword, email  } = req.body;

    await client.connect();
    const UserCollection = client.db(db_name).collection('User');

    if (adminKey !== process.env.ADMIN_KEY) {
      return res.status(403).json({ message: 'Unauthorized to create admin user' });
    }
  
    if (password !== confirmPassword) {
        return res.status(400).send({ message: 'Password and confirm password do not match' });
      }
    const hashedPassword = await auth.authentication(password);
    const newAdmin = new Loginmodel({
      userName,
      password: hashedPassword,
      email,
      role: 'admin',
    });
  
    await UserCollection.insertOne(newAdmin);
    res.status(201).json({ message: 'Admin user created successfully', user: newAdmin });
  };
  

export default{createUser, loginUser, createAdminUser }
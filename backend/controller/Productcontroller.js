import {MongoClient} from 'mongodb'
import 'dotenv/config'
import {v4 as uuid} from "uuid"
import Product from '../model/Productmodel.js'


const db_url = process.env.DB_URL;
const db_name = process.env.DB_NAME;

const client = new MongoClient(db_url)

const createProduct = async(req, res)=>{
    try{

        const { Name, price, category, description,stock } = req.body;

        if (!Name || !price) {
            return res.status(400).json({ message: 'Name and price are required' });
        }

        await client.connect();

        const productCollection = client.db(db_name).collection('ProductDetails')
        const ProductID = uuid()

        const newProduct = {
            ProductID,
            Name,
            price,
            category,
            description,
            stock,
            createdAt: new Date()
        };

        await productCollection.insertOne(newProduct);

        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    }
     catch (error) {
        res.status(500).json({ message: 'Failed to create product', error: error.message });
    } finally {
        await client.close();
    }
    
}

const getProductsByCategory = async (req, res) => {
    const { category } = req.params; // Get category from route params

    try {
        const productCollection = client.db(db_name).collection('ProductDetails');
        const products = await productCollection.find({ category: category }).toArray();
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found for this category' });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getproductByID = async(req, res)=>{
    const { ID } = req.params;

    try {
        const productCollection = client.db(db_name).collection('ProductDetails');
        const products = await productCollection.find({ ProductID: ID }).toArray();
        if (!products) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllProduct = async(req, res)=>{
    try{
        const productCollection = client.db(db_name).collection('ProductDetails');
        const products = await productCollection.find().toArray();
        if (!products) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(products)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProduct = async(req, res) => {
    const { category, ProductID } = req.params;  
    const { Name, price, description, stock } = req.body;

    try {
        const productCollection = client.db(db_name).collection('ProductDetails');

       
        const product = await productCollection.findOne({ category: category, ProductID: ProductID });
       
        if (!product) {
            return res.status(404).json({ message: 'Product not found in this category' });
        }

       
        const updatedProduct = {
            Name,
            price,
            description,
            stock,
            updatedAt: new Date()
        };

        
        await productCollection.updateOne(
            { category: category, ProductID: ProductID },
            { $set: updatedProduct }
        );

        res.status(200).json({ message: 'Product updated successfully', updatedProduct });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const DeleteProduct = async(req, res)=>{
    const { category, ProductID } = req.params;  
    try{
        const productCollection = client.db(db_name).collection('ProductDetails');
        const product = await productCollection.findOne({ category: category, ProductID: ProductID });
        
        const result = await productCollection.deleteOne(
            { category: category, ProductID: ProductID },
           
        );

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    } 
    finally {
        await client.close();
    }

    }

const searchProducts = async (req, res)=>{
    const { Name, category } = req.query;
    let filter = {}
    if(Name)
         filter.Name = { $regex: Name, $options: 'i' }; // Case-insensitive search
    if(category)
        filter.category = category

        try {
            const productCollection = client.db(db_name).collection('ProductDetails');
            const products = await productCollection.find(filter).toArray();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
}


export default { createProduct, getProductsByCategory, getproductByID, getAllProduct, updateProduct, DeleteProduct, searchProducts};
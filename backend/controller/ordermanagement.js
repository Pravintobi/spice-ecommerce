import { MongoClient } from 'mongodb'
import 'dotenv/config'
import { v4 as uuid } from "uuid"

const db_url = process.env.DB_URL;
const db_name = process.env.DB_NAME;

const client = new MongoClient(db_url)


const ordercreate = async (req, res) => {
    try {
        await client.connect();
        const Order = client.db(db_name).collection('Order');

        const { userId, products, paymentStatus, shippingAddress, totalPrice } = req.body;
        const orderID = uuid()
        const newOrder = new Order({
            userId,
            orderID,
            products,
            trackingNumber: uuid(),
            paymentStatus,
            shippingAddress,
            totalPrice,
            status: 'shipped'
        });

        await Order.insertOne(newOrder);

        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create Order', error: error.message });
    } finally {
        await client.close();
    }

}

const updateorder = async (req, res) => {
    try {
        const Order = client.db(db_name).collection('Order');

        const { status, trackingNumber } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.params.orderId,
            { status, trackingNumber },
            { new: true }
        );

        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create Order', error: error.message });
    } finally {
        await client.close();
    }
}

// const createwishlist = async (req, res) => {
//     const Wishlist = client.db(db_name).collection('Wishlist');
//     // const Product = client.db(db_name).collection('ProductDetails');
//     const Product = client.db(db_name).collection('ProductDetails')
//     const { userId, ProductId } = req.body;

//     try {

//         console.log('Searching for productId:', ProductId);
//         const product = await Product.find({ ProductId:ProductId,Name:Product.Name,price:Product.price }).toArray();;
//         console.log('Product found:', product);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }


//         let wishlist = await Wishlist.findOne({ userId });
//         if (!wishlist) {

            
//             wishlist = {
//                 userId,
                
//                 products: [
//                     {
//                         ProductId,
//                         Name,
//                         price,
//                     },
//                 ],
                
//             };
//             await Wishlist.insertOne(wishlist);
//         } else {

//             const productExists = wishlist.products.some(p => p.productId === ProductId);
//             if (!productExists) {
//                 wishlist.products.push({
//                     ProductId,
//                     name: Product.Name,
//                     price: Product.price,
//                 });
//                 await Wishlist.updateOne(
//                     { userId },
//                     { $set: { products: wishlist.products } }
//                 );
//             }
//         }

//         res.status(201).json({ message: 'Wishlist updated successfully', wish:wishlist });
//     } catch (error) {
//         res.status(500).json({ message: 'Failed to create Wishlist', error: error.message });
//     } finally {
//         await client.close();
//     }
// };

const createwishlist = async (req, res) => {
    const Wishlist = client.db(db_name).collection('Wishlist');
    const Product = client.db(db_name).collection('ProductDetails');
    const { userId, ProductId } = req.body;

    try {
        console.log('Searching for productId:', ProductId);
        const product = await Product.find({ ProductID: ProductId }).toArray();

        console.log('Product found:', product);

        if (!product || product.length === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        
        // Destructure safely
        const { Name, price } = product;
        console.log('name',product[0].Name)
        let wishlist = await Wishlist.findOne({ userId });
        if (!wishlist) {
            
            wishlist = {
                
                userId,
                products: [
                    {
                        ProductId,
                        Name,
                        price
                        // Access correct product data
                        // price: product[0].price,
                    },
                ],
            };
            await Wishlist.insertOne(wishlist);
        } else {
            const productExists = wishlist.products.some(p => p.ProductId === ProductId);
            if (!productExists) {
                wishlist.products.push({
                    ProductId,
                    Name,
                    price,
                });
                await Wishlist.updateOne(
                    { userId },
                    { $set: { products: wishlist.products } }
                );
            }
        }

        res.status(201).json({ message: 'Wishlist updated successfully', wishlist });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create Wishlist', error: error.message });
    } finally {
        await client.close();
    }
};


const viewwishlist = async(req, res)=>
{
    const Wishlist = client.db(db_name).collection('Wishlist');
    const { userId } = req.params;

    try{
        const view = await Wishlist.findOne({userId})
        if (!view) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        res.status(200).json({ message: 'Wishlist fetched successfully', view });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create Wishlist', error: error.message });
    } finally {
        await client.close();
    }

}


const deletewishlist = async (req, res)=>{

    const Wishlist = client.db(db_name).collection('Wishlist');
    const { userId } = req.params;

    try{
        const view = await Wishlist.deleteOne({ userId });
        if (view.deletedCount === 0) {
            return res.status(404).json({ message: 'Wishlist not found' });
        }

        res.status(200).json({ message: 'Wishlist Deleted successfully', view });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete Wishlist', error: error.message });
    } 

}

const addtocart = async (req, res) => {
    const AddCart = client.db(db_name).collection('ADDCART');
    const Product = client.db(db_name).collection('ProductDetails');
    const { userId, ProductId } = req.params;

    try {
        console.log("Received userId:", userId);
        console.log("Received ProductId:", ProductId);

        // Fetch product
        const product = await Product.findOne({ ProductID: ProductId });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const { Name, price } = product;
        console.log('Fetched Name:', Name, 'Fetched Price:', price);

        // Fetch cart
        let cart = await AddCart.findOne({ userId });
        if (!cart) {
            // Create new cart
            cart = {
                userId,
                products: [
                    {
                        ProductId,
                        Name,
                        price,
                    },
                ],
            };
            await AddCart.insertOne(cart);
        } else {
            // Update existing cart
            const productExists = cart.products.some(p => p.ProductId === ProductId);
            if (!productExists) {
                cart.products.push({
                    ProductId,
                    Name,
                    price,
                });
                await AddCart.updateOne(
                    { userId },
                    { $set: { products: cart.products } }
                );
            }
        }

        res.status(201).json({ message: 'Addtocart created successfully', cart });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: 'Failed to create addtocart', error: error.message });
    }
};

const removecart = async(req, res)=>{
    const AddCart = client.db(db_name).collection('ADDCART');
    const { userId } = req.params;
    try{
        const remove = await AddCart.deleteOne({ userId });
        if (remove.deletedCount === 0) {
            return res.status(404).json({ message: 'cart not found' });
        }

        res.status(200).json({ message: 'Addtocart Deleted successfully', remove });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to delete addtocart', error: error.message });
    } 
}
export default {
    ordercreate,
    updateorder,
    createwishlist,
    viewwishlist,
    deletewishlist,
    addtocart,
    removecart

}
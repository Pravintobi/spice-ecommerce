import mongoose from 'mongoose';

// const orderSchema = new mongoose.Schema({

//     userId: { type: String, required: true },
//     products: [{ productId: String, quantity: Number }],
//     paymentStatus: { type: String, default: "pending" },
//     shippingAddress: { type: String, required: true },
//     totalPrice: { type: Number, required: true },
//     status: { type: String, enum:['shipped','delivery','cancelled'], default: "shipped" },
//     trackingNumber: { type: String, default: null },
//     createdAt: { type: Date, default: Date.now }
//   });
  

 
// export default mongoose.model('Order', orderSchema); 


const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'Processing' },
  trackingNumber: { type: String },
  paymentStatus: { type: String, default: 'Pending' },
  shippingAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  estimatedDelivery: { type: Date },
  orderDate: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const wishlistschema= new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

module.exports = mongoose.model('Order', orderSchema);

module.exports = mongoose.model('Wishlist', wishlistschema);

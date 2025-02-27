import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    stock: { type: Number, default: 0 },
    reviews: [
        {
            reviewerName: String,
            rating: Number,
            comment: String,
            date: Date,
        },
    ],
});

export default mongoose.model('Product', productSchema);

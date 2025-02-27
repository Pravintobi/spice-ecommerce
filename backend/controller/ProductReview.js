import { MongoClient } from 'mongodb';
import 'dotenv/config';

const db_url = process.env.DB_URL;
const db_name = process.env.DB_NAME;

const client = new MongoClient(db_url);

const addReview = async (req, res) => {
    const { ProductID } = req.params;
    const { reviewerName, rating, comment } = req.body;

    console.log(req.body); // For debugging POST/PUT requests
    console.log(req.params); // For debugging URL parameters

    // Validate input fields
    if (!reviewerName || !rating || !comment) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Validate rating
    const parsedRating = parseInt(rating);
    if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
        return res.status(400).json({ message: "Rating must be a number between 1 and 5" });
    }

    try {
        await client.connect();
        const productCollection = client.db(db_name).collection('ProductDetails');

        // Update the product with the new review
        const updateResult = await productCollection.updateOne(
            { ProductID },
            {
                $push: {
                    reviews: {
                        reviewerName,
                        rating: parsedRating,
                        comment,
                        date: new Date(),
                    },
                },
            }
        );

        if (updateResult.matchedCount === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Review added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        await client.close();
    }
};

const getReviews = async (req, res) => {
    const { ProductID } = req.params;

    try {
        await client.connect();
        const productCollection = client.db(db_name).collection('ProductDetails');

        const product = await productCollection.findOne({ ProductID: ProductID }, { projection: { reviews: 1 } });

        if (!product || !product.reviews) {
            return res.status(404).json({ message: 'No reviews found for this product' });
        }

        res.status(200).json(product.reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    } finally {
        await client.close();
    }
};


export default { addReview, getReviews };

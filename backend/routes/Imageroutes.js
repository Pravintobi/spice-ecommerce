import express from 'express';
import { upload, uploadImage } from '../controller/Productimgae.js';

const router = express.Router();

// Route to upload image
router.post('/upload', upload.single('image'), uploadImage);

export default router;

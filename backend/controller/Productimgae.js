import multer from 'multer';
import path from 'path';

// Set storage destination and filename for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'eweb/e-commerce/backend/public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename with extension
  },
});

const upload = multer({ storage: storage });

// Function to handle image upload
const uploadImage = (req, res) => {
  const { file } = req;
  if (!file) {
    return res.status(400).json({ message: 'No image file uploaded' });
  }

  const imagePath = `/images/${file.filename}`;
  // Save imagePath to your database if needed
  return res.status(200).json({ message: 'Image uploaded successfully', imagePath });
};

export  { upload, uploadImage };

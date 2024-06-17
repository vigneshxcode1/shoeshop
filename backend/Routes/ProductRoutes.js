import express from "express";
import multer from "multer";
import fs from "fs";
import cloudinary from "../utils/Cloudinary.js";
import {
  createproduct,
  deleteproduct,
  getproduct,
  getsingleproduct,
  updateproduct,
} from "../Controller/productcontrollers.js";
import {
  Createcloth,
  deleteshirt,
  getshirts,
  getsingleshirts,
  updateshirt,
} from "../Controller/Cloth.js";
import { authorizeRoles, isauthenicated } from "../utils/authenticate.js";

const routes = express.Router();

// Multer disk storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Destination folder for uploaded files (optional)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename
  },
});

const upload = multer({ storage: storage });

// Function to upload image to Cloudinary
const uploadToCloudinary = async (path) => {
  try {
    const result = await cloudinary.uploader.upload(path);
    fs.unlinkSync(path); // Delete local file after upload
    return result.secure_url; // Return secure URL from Cloudinary
  } catch (err) {
    console.error("Error uploading image to Cloudinary:", err);
    throw new Error("Image upload failed");
  }
};

// Middleware to handle image uploads to Cloudinary
const handleImageUpload = async (req, res, next) => {
  try {
    if (!req.file) {
      throw new Error('No image file provided');
    }
    
    const image = req.file.path;
    const imageUrl = await uploadToCloudinary(image);
    
    req.body.image = imageUrl;
    fs.unlinkSync(image); // Delete local file after upload to Cloudinary
    
    next();
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    res.status(500).json({ message: 'Error uploading image', error: error.message });
  }
};

// Clothing routes
routes.post(
  "/createcloth",
  isauthenicated,
  authorizeRoles("admin"),
  // upload.single("images"), 
  // handleImageUpload, 
  Createcloth
);


routes.get("/getshirts", getshirts);
routes.get("/getsingleshirts/:id", getsingleshirts);
routes.put("/updateshirt/:id", isauthenicated, authorizeRoles("admin"), updateshirt);
routes.delete("/deleteshirt/:id", isauthenicated, authorizeRoles("admin"), deleteshirt);

// Shoe routes
routes.post("/createshoes", isauthenicated, createproduct);
routes.get("/getallproducts", isauthenicated, getproduct);
routes.get("/getproducts/:id", isauthenicated, getsingleproduct);
routes.put("/updateproduct/update/:id", isauthenicated, updateproduct);
routes.delete("/deleteproduct/:id", isauthenicated, deleteproduct);

export default routes;

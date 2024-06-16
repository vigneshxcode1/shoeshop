import express from "express";
import {
  createproduct,
  deleteproduct,
  getproduct,
  getsingleproduct,
  updateproduct,
} from "../Controller/productcontrollers.js";
import multer from "multer";
import cloudinary from "../utils/Cloudary.js";
import fs from "fs";

import {
  Createcloth,
  deleteshirt,
  getshirts,
  getsingleshirts,
  updateshirt,
} from "../Controller/Cloth.js";
import { isauthenicated } from "../utils/authenticate.js";

const routes = express.Router();

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadToCloudinary = async (path) => {
  try {
    const result = await cloudinary.uploader.upload(path);
    fs.unlinkSync(path); 
    return result.secure_url;
  } catch (error) {
    console.error("Error in uploading images", error);
    throw new Error("Image upload failed");
  }
};

const handleImageUpload = async (req, res, next) => {
  try {
    const imageUploadPromises = req.files.map(file => uploadToCloudinary(file.path));
    const imageUrls = await Promise.all(imageUploadPromises);

    req.body.images = imageUrls; 
    next(); 
  } catch (error) {
    res.status(500).json({ message: 'Error uploading images', error });
  }
};


// Clothing routes
routes.post("/createcloth",isauthenicated,
//  upload.array("images", 5),
//  handleImageUpload,
 Createcloth);
routes.get("/getshirts",
// isauthenicated,
getshirts);
routes.get("/getsingleshirts/:id",
// isauthenicated,
 getsingleshirts);
routes.put("/updateshirt/:id",
// isauthenicated,
 updateshirt);
routes.delete("/deleteshirt/:id",
// isauthenicated,
 deleteshirt);

export default routes;


// Shoe routes
routes.post("/createshoes",
//  upload.array("images", 5),
  // handleImageUpload,
  isauthenicated,
   createproduct);
routes.get("/getallproducts",isauthenicated, getproduct);
routes.get("/getproducts/:id",isauthenicated, getsingleproduct);
routes.put("/updateproduct/update/:id",isauthenicated, updateproduct);
routes.delete("/deleteproduct/:id",isauthenicated, deleteproduct);

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
import path from "path";

const routes = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const uploadcloudimage = async (path) => {
  try {
    const result = await cloudinary.uploader.upload(path);
    fs.unlinkSync(path);
    return result.secure_url;
  } catch (error) {
    console.log("error in uploading images", err);
  }
};

routes.post(
  "/createproduct",
//   upload.array("images", 5),
//   async (req, res, next) => {
//     try {
//       const imageupload = req.files.map(file => uploadcloudimage(file.path));
//       const imageurl = await Promise.all(imageupload);
//       req.body.imageurl = imageurl;
//       next();
//     } catch (err) {
//         console.log("error in uploading images", err);
//     }
//   },
  createproduct
);

routes.get("/getallproducts", getproduct);
routes.get("/getproducts/:id", getsingleproduct);
routes.put("/updateproduct/update/:id", updateproduct);
routes.delete("/deleteproduct/:id", deleteproduct);

export default routes;

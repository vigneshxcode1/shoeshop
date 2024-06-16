import mongoose from "mongoose";

const ClothSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    productName: {
      type: String,
      required: [true, "Please enter the product name"],
    },
    price: {
      type: Number,
      required: [true, "Please enter the price"],
    },
    cutPrice: {
      type: Number,
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: ["printed", "animi", "oversized", "tshirt"],
      },
    },
    images: [
      {
        type: String,
        // required: true
      },
    ],
    sizes: {
      type: String,
      required:true,
     enum:{
        values:[
            "s",
            "m",
            "l",
            "xl"
        ]
     }
    },

    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Clothmodel = mongoose.model("Clothproduct", ClothSchema);

export default Clothmodel;

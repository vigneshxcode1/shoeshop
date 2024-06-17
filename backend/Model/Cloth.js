import mongoose from "mongoose";

const ClothSchema = new mongoose.Schema(
  {
    
    productName: {
      type: String,
      
    },
    description: {
      type: String,
     
    },
    price: {
      type: Number,
    
    },
    cutPrice: {
      type: Number,
     
    },
    category: {
      type: String,

      enum: {
        values: ["polo", "animi", "oversized", "tshirt"],
      },
    },
    images: [{
      type: String, 

    }],
    sizes: {
      type: String,
     
     enum:{
        values:[
            "s",
            "m",
            "l",
            "xl"
        ]
     }
    },

  
    stock: {
      type: Number,
     
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Clothmodel = mongoose.model("Clothproduct", ClothSchema);

export default Clothmodel;

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Please enter the product name']
    },
    price: {
        type: Number,
        required: [true, 'Please enter the price']
    },
    cutPrice: {
        type: Number,
        required: [true, 'Please enter the cut price']
    },
    images: [{
        type: String,
        required: true
    }],
    sizes: [{
        type: String,
        required: true,
        enum: ['6', '7', '8', '9', '10', '11', '12']
    }],
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
}
)

const productmodel = mongoose.model('shoesproduct',ProductSchema)

export default  productmodel
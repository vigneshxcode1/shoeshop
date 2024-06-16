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
       
    },
    category:{
        type:String,
        required:[true],
        enum:{
            values:[
                'nike',
                'adidas',
                'pumma',
                'roadters'
            ]
        }
    },
    images: [{
        type: String,
        required: true
    }],
    sizes: [{
        type: String,
       
        enum: ['6', '7', '8', '9', '10', '11', '12']
    }],
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
}, {
    timestamps: true
}
)

const productmodel = mongoose.model('shoesproduct',ProductSchema)

export default  productmodel
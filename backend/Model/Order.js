import mongoose from 'mongoose'

const orderShema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    
    },
    address:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    pin:{
        type:Number,
        min:7,
        required:true
    },
    deliverystatus:{
        type:String,
        enum:{
            values:[
                "order placed",
                "delivered"
            ]
        },
        default:"order placed"
    }


},{
    timestamps: true
}
)

const ordermodel = mongoose.model('Order',orderShema)

export default  ordermodel
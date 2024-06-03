import mongoose from 'mongoose'

const usershema = mongoose.Schema({
    username:{
        type:String,
        required:[true],
        unqiue:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const usermodel= mongoose.model('customer',usershema)

export default usermodel
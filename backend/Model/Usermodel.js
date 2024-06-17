import mongoose from 'mongoose'

import jwt from 'jsonwebtoken'

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
    },
    role:{
        type:String,
        default:"user"
    },
    createAtTime:{
        type:Date,
        default:Date.now()
    }
})


usershema.methods.getJwtToken=function(){
return jwt.sign(
    {id:this.id},process.env.JWT_SECRET,{expiresIn:'7d'}
)
}



const usermodel= mongoose.model('customer',usershema)

export default usermodel
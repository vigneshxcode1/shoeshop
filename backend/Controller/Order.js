import { json } from "express"
import ordermodel from "../Model/Order.js"

export const ordercreate=async(req,res)=>{
    try {
        const {name,phone,address,landmark,city,pin}=req.body

        const order = await ordermodel.create({name,phone,address,landmark,city,pin})
    
        res.status(200).json({
            success:true,
            message:"order created",
            order
        })
    } catch (err) {
        console.log(err)
        res.status(401).json({
            success:false,
            message:"order failed"
        })
    }
   

}

export const getorders=async(req,res)=>{
    try {
        await ordermodel.find()
        .then((order)=>{
            const count=order.length
            res.status(200).json({
                success:true,
                message:"order find",
             count,
                order
            })
        })
    } catch (err) {
        console.log(err)
        res.status(401).json({
            success:false,
            message:"order find faild" ,
            order
        })
    }
   
}

export const updatedelivery=async(req,res)=>{
    try {
         await ordermodel.findByIdAndUpdate(req.params.id,req.body)
        .then((order)=>{
            res.status(200).json({
                success:true,
                message:"order delivery updated",
                order
            })
        })
    } catch (err) {
        console.log(err)
        res.status(401).json({
            success:false,
            message:"order find faild" ,
            order
        })
    }
}

export const deleteorder=async(req,res)=>{
    try {
        await ordermodel.findByIdAndDelete(req.params.id)
       .then((order)=>{
           res.status(200).json({
               success:true,
               message:"order deleted",
               order
           })
       })
   } catch (err) {
       console.log(err)
       res.status(401).json({
           success:false,
           message:"order delete faild" ,
           order
       })
   }
}
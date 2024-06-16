import express from 'express'
import { deleteorder, getorders, ordercreate, updatedelivery } from '../Controller/order.js'

const OrderRouter=express.Router()

OrderRouter.post("/createorder",ordercreate)
OrderRouter.get('/getallorders',getorders)
OrderRouter.put('/deliveryupdate/:id',updatedelivery)
OrderRouter.delete("/deleteorder/:id",deleteorder)
export default OrderRouter
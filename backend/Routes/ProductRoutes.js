import express from 'express'
import { createproduct, deleteproduct, getproduct, getsingleproduct, updateproduct } from '../Controller/productcontrollers.js'

const routes=express.Router()

routes.post('/createproduct',createproduct)
routes.get('/getallproducts',getproduct)
routes.get('/getproducts/:id',getsingleproduct)
routes.put('/updateproduct/update/:id',updateproduct)
routes.delete('/deleteproduct/:id',deleteproduct)


export default routes
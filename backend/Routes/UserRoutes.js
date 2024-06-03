import express from 'express'
import { login, register } from '../Controller/User.js'

const UserRouter=express.Router()

UserRouter.post("/register",register)
UserRouter.post('/login',login)
export default UserRouter
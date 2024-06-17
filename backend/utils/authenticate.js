import jwt from 'jsonwebtoken'
import usermodel from '../Model/Usermodel.js'

export const isauthenicated=async(req,res,next)=>{
    try {
        const token = req.headers.authorization?.split(" ")[1];
        // const {token} = req.cookies;
       
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Login first to access resource",
            });
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user=await usermodel.findById(decode.id)
        next()
    } catch (error) {
        console.error(error);
        res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });
    }
}

export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            const role = req.user ? req.user.role : "guest";
            return res.status(401).json({
                success: false,
                message: `Role '${role}' is not allowed`
            });
        }
        next();
    };
};

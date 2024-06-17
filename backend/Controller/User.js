import Usermodel from "../Model/Usermodel.js";
import bcrypt from "bcryptjs";

let cookiesexpires = 30;

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const user = await Usermodel.create({ username, email, password: hash });

  const token = user.getJwtToken();

  const option = {
    expires: new Date(Date.now() + cookiesexpires * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  try {
    res.status(200).cookie("token", token, option).json({
      success: true,
      message: "user register sucessfully",
      user,
      token,
    });
  } catch (err) {
    console.log(err)
    res.status(400).json({
      success: false,
      message: "server error",
     
  })
  }
};



//login

export const login = async (req, res) => {
  try {
      const { username, password } = req.body;
      if (!username || !password) {
          return res.status(400).json({
              success: false,
              message: "Please enter email and password"
          });
      }

   
      const user = await Usermodel.findOne({ username}).select('+password');
      if (!user) {
          return res.status(400).json({
              success: false,
              message: "user not exist"
          });
      }

  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(400).json({
              success: false,
              message: "Invalid username or password"
          });
      }

      const token = user.getJwtToken();
      const option = {
        expires: new Date(Date.now() + cookiesexpires * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.status(200).cookie('token',token,option).json({
          success:"success",
          message: "User login successful",
          user,
          token
         
      });
  } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({
          success: false,
          message: "Server Error"
      });
  }
};
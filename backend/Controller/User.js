import usermodel from "../Model/Usermodel.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  await usermodel
    .create({ username, email, password })

    .then((result) => {
      res.status(200).json({
        success: true,
        message: "user register sucessfully",
        result,
      });
    });
};



export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "username and password not found",
    });
  }

  const user = await usermodel.findOne({ username }).select("+password");

  try {
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "username or password invalid",
      });
    }
    return res.status(200).json({
      success: true,
      message: "success login",
      user
    });
  } catch (err) {
    console.lof(err);
  }
};

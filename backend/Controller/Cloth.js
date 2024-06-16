import Clothmodel from "../Model/Cloth.js";
import apifeature from "../utils/apifeatures.js";

export const Createcloth = async (req, res) => {
  const { productName, price, category, cutPrice, description, stock, sizes } =
    req.body;
  const images = req.body.images;
  Clothmodel.create({
    productName,
    price,
    cutPrice,
    description,
    images,
    stock,
    category,
    sizes,
  }).then((result) => {
    res.status(200).json({
      success: true,
      message: "product created",
      result,
    });
  });
};

export const getshirts = async (req, res) => {
  const apifeatures = new apifeature(Clothmodel.find(), req.query)
    .search()
    .filter();
  const product = await apifeatures.query;
  const count=product.length
  res.status(200).json({
    success: true,
    count,
    message: "product find",
    product,
   
  });
};

export const getsingleshirts = async (req, res) => {
  const product = await Clothmodel.findById(req.params.id);

  res.status(200).json({
    success: true,
    message: "product findby id",
    product,
  });
};

export const updateshirt = async (req, res) => {
  const product = await Clothmodel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    message: "product updated",
    product,
  });
};


export const deleteshirt =async(req,res)=>{
  const product = await Clothmodel.findByIdAndDelete(req.params.id)
  res.status(200).json({
    success: true,
    message: "product delete",
    product,
  });
}
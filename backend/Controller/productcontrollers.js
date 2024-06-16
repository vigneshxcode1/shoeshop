import productmodel from "../Model/Productmodel.js";
import apifeature from "../utils/apifeatures.js";

export const createproduct = async (req, res) => {
  const { productName, price, category, cutPrice, description, stock, sizes } =req.body;
  const images = req.body.images;
  productmodel
    .create({
      productName,
      price,
      cutPrice,
      description,
      images,
      stock,
      sizes,
      category,
    })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "product created",
        result,
      });
    });
};

export const getproduct = async (req, res) => {
  const apifeatures = new apifeature(productmodel.find(),req.query).search().filter();
  const product = await apifeatures.query
  let count = product.length
  res.status(200).json({
    success: true,
    count,
    message: "product created",
    product,
    
  
  });
};

export const getsingleproduct = async (req, res) => {
  productmodel.findById(req.params.id).then((result) => {
    res.status(200).json({
      success: true,
      message: "product find success",
      result,
    });
  });
};

export const updateproduct = async (req, res) => {
  try {
    const product = await productmodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "product updated",
      product,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteproduct = async (req, res) => {
  try {
    const deleteproduct = await productmodel.findByIdAndDelete(req.params.id);
    if (!deleteproduct) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "product deleted",
      deleteproduct,
    });
  } catch (err) {
    console.log(err);
  }
};

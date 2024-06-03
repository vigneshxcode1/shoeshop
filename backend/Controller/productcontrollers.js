import productmodel from "../Model/Productmodel.js"

export const createproduct=async(req,res)=>{

    const {productName,price, category,cutPrice,description, images,stock, sizes}=req.body

    productmodel.create({productName,price,cutPrice,description,images,stock,sizes, category})
    .then((result)=>{
      res.status(200).json({
        success:true,
        message:'product created',
        result
      })
    })
}

export const getproduct=async(req,res)=>{

    productmodel.find()
    .then((result)=>{
      res.status(200).json({
        success:true,
        message:'product created',
        result
      })
    })
}


export const getsingleproduct=async(req,res)=>{
productmodel.findById(req.params.id)
  .then((result)=>{
    res.status(200).json({
      success:true,
      message:'product find success',
      result
    })
  })
}

export const updateproduct=async(req,res)=>{
 
  try {
    const product = await productmodel.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    })
    if(!product){
      return res.status(404).json({
        success:false,
        message:"product not found"
      })
    }
    res.status(200).json({
      success:true,
      message:"product updated",
      product
      
    })
  } catch (err) {
    console.log(err)
  }
 



}


  export const deleteproduct=async(req,res)=>{
    try {
      const deleteproduct =await productmodel.findByIdAndDelete(req.params.id)
      if(!deleteproduct){
        return res.status(404).json({
          success:false,
          message:"product not found"
        })
      }
    
      res.status(200).json({
        success:true,
        message:"product deleted",
        deleteproduct
      
      })
    } catch (err) {
      console.log(err)
    }
  }
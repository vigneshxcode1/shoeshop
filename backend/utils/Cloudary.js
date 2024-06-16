import  {v2 as cloudinary }from 'cloudinary'

cloudinary.config({
    cloud_name:process.env.CLOUDNAME,
    cloud_api_key:process.env.CLOUD_API_KEY,
    cloud_api_secret:process.env.CLOUD_SECRET

})

export default cloudinary
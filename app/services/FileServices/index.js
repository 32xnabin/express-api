const cloudinary = require('cloudinary')
require('dotenv').config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

exports.uploadImage = (req, res) => {
  cloudinary.uploader.upload(req.files.file.tempFilePath, (result) => {
    console.log(result)
    if (result.public_id) {
      res.send({ url: result.url })
    }
  })
}
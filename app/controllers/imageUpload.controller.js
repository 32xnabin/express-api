
const { uploadImage } = require('../services/FileServices')

exports.upload = (req, res) => {
   return uploadImage(req,res);
}

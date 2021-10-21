module.exports = (app) => {
  const controller = require('../controllers/imageUpload.controller.js')
  var fileupload = require('express-fileupload')

  var router = require('express').Router()

  router.post('/', controller.upload)
  router.get('/', controller.upload)

  app.use(
    fileupload({
      useTempFiles: true,
    }),
  )
  app.use('/api/upload', router)
}

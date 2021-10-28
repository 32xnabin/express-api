module.exports = (app) => {
  const AuthController = require('../controllers/user.controller')
  const { validateToken } = require('../middlewares/validateToken')
  const cleanBody = require('../middlewares/cleanbody')
  var router = require('express').Router()

  router.post('/signup', cleanBody, AuthController.Signup)

  router.patch('/activate', cleanBody, AuthController.Activate)

  router.post('/login', cleanBody, AuthController.Login)

  router.patch('/forgot', cleanBody, AuthController.ForgotPassword)

  router.post('/validate', cleanBody, AuthController.Validate)

  router.patch('/reset', cleanBody, AuthController.ResetPassword)

  router.get('/logout', validateToken, AuthController.Logout)

  app.use('/api/users', router)
}

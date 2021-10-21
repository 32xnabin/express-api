module.exports = (app) => {
  const { validateToken } = require('../middlewares/validateToken')
  const cases = require('../controllers/case.controller.js')

  var router = require('express').Router()

  // Create a new Case
  router.post('/', validateToken, cases.create)

  // Retrieve all Cases
  router.get('/', validateToken, cases.findAll)

  // Retrieve a single Case with id
  router.get('/:id', validateToken, cases.findOne)

  // Update a Case with id
  router.put('/:id', validateToken, cases.update)

  // Delete a Case with id
  router.delete('/:id', validateToken, cases.delete)

  app.use('/api/cases', router)
}

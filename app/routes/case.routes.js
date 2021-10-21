module.exports = (app) => {
  const cases = require('../controllers/case.controller.js')

  var router = require('express').Router()

  // Create a new Case
  router.post('/', cases.create)

  // Retrieve all Cases
  router.get('/', cases.findAll)

  // Retrieve all published Cases
  router.get('/published', cases.findAllPublished)

  // Retrieve a single Case with id
  router.get('/:id', cases.findOne)

  // Update a Case with id
  router.put('/:id', cases.update)

  // Delete a Case with id
  router.delete('/:id', cases.delete)

  // Create a new Case
  router.delete('/', cases.deleteAll)

  app.use('/api/cases', router)
}

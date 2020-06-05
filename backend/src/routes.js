const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SectionController = require('./controllers/SectionController')
const routes = express.Router()

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)


routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)


routes.get('/profile', ProfileController.index)


routes.post('/section', SectionController.create)






module.exports = routes
const route = require('express').Router()
const controller = require('./controller');

route.get('/api/weather/:latlon', controller.getWeather)

module.exports = route
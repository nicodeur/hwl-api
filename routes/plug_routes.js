let routes = require('express').Router();
const PlugController = require('../controllers/plug_controller');

// Plug routes
routes.get('/plug', PlugController.getAllPlugs);
routes.post('/act/smartplug/:smartPlugID/plug/:plugID', PlugController.switchPlug);
routes.get('/act/smartplug/:smartPlugID/plug/:plugID', PlugController.plugState);

module.exports = routes;
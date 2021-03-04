"use strict";

var _require = require('express'),
    Router = _require.Router;

var playerRouter = Router();

var PlayerController = require('../controllers/PlayerController');

playerRouter.get('/', PlayerController.getPlayers);
module.exports = playerRouter;
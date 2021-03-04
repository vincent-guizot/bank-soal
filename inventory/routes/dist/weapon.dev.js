"use strict";

var _require = require('express'),
    Router = _require.Router;

var weaponRouter = Router();
weaponRouter.get('/', function (req, res) {
  res.send("Index weapon Route");
});
module.exports = weaponRouter;
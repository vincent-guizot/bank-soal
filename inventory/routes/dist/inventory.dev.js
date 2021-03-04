"use strict";

var _require = require('express'),
    Router = _require.Router;

var inventoryRouter = Router();
inventoryRouter.get('/', function (req, res) {
  res.send("Index inventory Route");
});
module.exports = inventoryRouter;
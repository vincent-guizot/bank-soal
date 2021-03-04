"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var playerRoute = require('./player');

var weaponRoute = require('./weapon');

var inventoryRoute = require('./inventory');

router.get('/', function (req, res) {
  res.send("Dalam index routes");
});
router.use('/players', playerRoute);
router.use('/weapons', weaponRoute);
router.use('/inventories', inventoryRoute);
module.exports = router;
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../models'),
    Player = _require.Player;

var PlayerController =
/*#__PURE__*/
function () {
  function PlayerController() {
    _classCallCheck(this, PlayerController);
  }

  _createClass(PlayerController, null, [{
    key: "getPlayers",
    value: function getPlayers(req, res) {
      Player.findAll().then(function (players) {
        res.json(players);
      })["catch"](function (err) {
        res.json(err);
      });
    }
  }]);

  return PlayerController;
}();

module.exports = PlayerController;
const { Player } = require('../models')

class PlayerController {
    static getPlayers(req,res){
        Player.findAll()
        .then(players => {
            res.json(players)
        })
        .catch(err => {
            res.json(err)
        })
    }
}

module.exports = PlayerController;
const {Router} = require('express');
const weaponRouter = Router();

weaponRouter.get('/', (req,res) => {
    res.send("Index weapon Route")
})

module.exports = weaponRouter
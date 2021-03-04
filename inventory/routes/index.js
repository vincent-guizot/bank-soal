const {Router} = require('express');
const router = Router();

const playerRoute = require('./player')
const weaponRoute = require('./weapon')
const inventoryRoute = require('./inventory')

router.get('/', (req,res) => {
    res.send("Dalam index routes")
})
router.use('/players', playerRoute)
router.use('/weapons', weaponRoute)
router.use('/inventories', inventoryRoute)

module.exports = router
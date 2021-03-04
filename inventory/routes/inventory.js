const {Router} = require('express');
const inventoryRouter = Router();

inventoryRouter.get('/', (req,res) => {
    res.send("Index inventory Route")
})

module.exports = inventoryRouter
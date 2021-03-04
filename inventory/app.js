const express = require('express');
const app = express();
const port = 3000;

const route = require('./routes')
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use(route)

app.listen(port, ()=>{
    console.log('listening on port : ', port)
})
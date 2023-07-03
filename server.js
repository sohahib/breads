// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})
//Breads
const breadsController = require('./controllers/breads_controllers') 
app.use('/breads', breadsController)

//404 STATUS
app.get('*', (req, res)=>{
    res.status(404).send(`<h1>404 page</h1>`)
})
// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
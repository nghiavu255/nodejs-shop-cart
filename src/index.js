
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const handlebars  = require('express-handlebars')
const morgan = require('morgan')
const { title } = require('process')
const mongoose = require('mongoose')
const session = require('express-session')
const app = express()
const port = 3000
const db =require('./config/db')
const route = require('./routes')
const Product = require('./app/models/product')



//connect DB
db.connect();
//public
app.use(express.static(path.join(__dirname,'public')))
//http logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars({
    extname:".hbs",
    helpers:{
      sum:(a,b)=>a+b,
  }
}))
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resources/views'))
//route init

route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

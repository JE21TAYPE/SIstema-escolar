const path = require("path");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const usuario = require('./routes/usuario.js')
let cookieSession = require('cookie-parser')
let sesion = require('express-session')

//Instancia del servidor de paginas
const app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname), 'views')
app.set('views engine', 'ejs')
app.use('/', usuario)
app.listen(app.get('port'), ()=> {
    console.log(`aplicacion iniciada ${app.get("port")}`);
})
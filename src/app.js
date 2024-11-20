const express = require('express');
const path = require('path');
const morgan = require('morgan');
const myspql= require('mysql');
const myConnection = require('express-myconnection');
//
const app = express();
// configuracion de ruta del servidor interno
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
//
app.use(morgan('dev'))
app.use(myConnection(myspql,{
    host: 'localhost',
    user: 'root',
    password:'contrasena',
    port: 3306,
    database:'BasedeDatosJS',
},'single'));
app.listen(app.set('port'), () => {
    console.log('Server on port 3000')
});
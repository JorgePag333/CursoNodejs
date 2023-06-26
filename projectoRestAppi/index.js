const debug = require('debug')('app:main');
const express = require ('express');

const {Config} =require('./src/config/index');

const app = express();

app.use(express.json());

//Modulos

app.listen(Config.port, () => {
  debug(`Servidor escuchando en el puerto ${Config.port}`)
})
'use strict' 
 
const port = process.env.PORT || 3000; 
 
const express = require('express'); 
const logger = require('morgan');
const app = express();
//Declaracion de los middleware
app.use(logger('dev'));


//Declaracion del API
app.get('/hola/:name', (req, res) => { 
  res.status(200).send({ mensaje: `Hola ${req.params.unNombre} desde SD con JSON!` }); 
  }); 
   
  app.listen(port, () => { 
    console.log(`API REST ejecutándose en http://localhost:${port}/hola/:unNombre`); 
  });
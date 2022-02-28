'use strict' 
 
const port = process.env.PORT || 3000; 
 
const express = require('express'); 
const logger = require('morgan');
const app = express();
//Declaracion de los middleware
app.use(logger('dev')); 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Declaramos de nuestras rutas y definimos nuestros controladores y lógica de negocio
app.get('/api/products', getProductController);
function getProductController(req, res){
  res.status(200).send({
    msg:"Ahí están todos los productos",
    productos: []
  });
};

app.get('/api/products/:productID', (req,res)=>{
  const id= req.params.productID;

  res.status(200).send({
    msg:`Ahí va el producto ${id} solicitado`,
    "ID del producto": id
  });
});

app.post('/api/products', (req, res) => {
  const miProducto=req.body;
  console.log(miProducto);
  res.status(200).send({
    mmsg:"He creado un nuevo producto",
    producto:miProducto
  });
});

app.put('/api/products/:productID', (req, res) => {
  const ID = req.params.productID;
  const miProducto= req.body;
  res.status(200).send({
      _id:`${ID}`,
      product: miProducto
  });
});

app.delete('/api/products/:productID', (req, res) => {
  const ID = req.params.productID;
  res.status(200).send({
      result: 'OK',
      _id: `${ID}`
  });
});

  app.listen(port, () => { 
    console.log(`API REST CRUD ejecutándose en http://localhost:${port}/api/products`); 
  });


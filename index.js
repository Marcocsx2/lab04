var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hola Express</h1>');
});

app.get('/clientes', (req, res) => {
  res.send(
    '<h1>Clientes</h1> <ul><li>Marco Vizcarra</li><li>Antonio Sanchez</li><li>Tito nieves</li></ul>'
  );
});

app.get('/productos', (req, res) => {
  res.send(
    '<h1>Productos</h1> <ul><li>Iphone 11</li><li>Samsung J3</li><li>Radio LG</li></ul>'
  );
});

app.listen(5000, () => {
  console.log('El servidor esta corriendo en el puerto 5000');
});

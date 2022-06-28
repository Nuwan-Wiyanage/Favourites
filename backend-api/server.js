const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const products = [
  { 
    'id': 1,
    'name': 'P1',
    'description': 'This is Product 1'
  }, 
  {
    'id': 2,
    'name':'P2',
    'description': 'This is Product 2'
  }, 
  {
    'id': 3,
    'name':'P3',
    'description': 'This is Product 3'
  }, 
  {
    'id': 4,
    'name':'P4',
    'description': 'This is Product 4'
  }, 
  {
    'id': 5,
    'name':'P5',
    'description': 'This is Product 5'
  }
];
const favourites = [{ 'name': 'xxx'}, {'name':'yyyy'}];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend-app/out')));

app.get('/backend-api/products', (req, res) => {
  console.log('backend-api/products called!')
  res.json(products);
});

app.get('/backend-api/favourites', (req, res) => {
  console.log('backend-api/favourites called!')
  res.json(favourites);
});

app.post('/backend-api/favourite', (req, res) => {
  const favourite = req.body.favourite;
  console.log('Added to favourites', favourite);
  if(!favourites.some(function(el) { return el.name === favourite.name; })){
    favourites.push(favourite);
  }
  res.json("added to favourites");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../frontend-app/out/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
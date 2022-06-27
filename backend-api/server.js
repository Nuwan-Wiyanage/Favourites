const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const favourites = [{ 'name': 'xxx'}, {'name':'yyyy'}];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend-app/out')));

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
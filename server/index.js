const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const getDino = require('./getDino');
const thatDino = require('./thatDino');

const app = express();

const port = 3001;

app.get('/api/dino', getDino);
app.get('/api/dino/:name', thatDino);

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

const express = require('express');
const app = express();
const { ProductManager } = require("./src/productManager");
const productManager = new ProductManager();
const port = 8080;

let products = productManager.getProducts()
.then(resp => resp)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', ( req , res ) => {
    res.send('Hola mundo primer respuesta')
})

app.get('/products', async ( req , res ) => {
    const {limit} = req.query;

    if (!limit) {
        return res.send(await products)
    }
    const productsLimit = await products
    res.send(productsLimit.slice(0,limit))
})

app.get('/products/:productID', async ( req , res ) => {
    const { productID } = req.params
    const productFound = await products
    const productFoundByID = productFound.find(product => product.id.toString() === productID)

    if(!productFoundByID) return res.send("No se encontró el producto")

    res.send(productFoundByID)
})

app.listen(port, () => {
    console.log('Servidor escuchando');
})




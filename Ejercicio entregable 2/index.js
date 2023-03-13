const { ProductManager } = require("../src/productManager");

const product = new ProductManager()

product.getProducts()
.then(resp => console.log(resp));

product.addProduct({
    name: "Agua Mineral",
    description: "Una rica Agua Mineral",
    price: 250,
    href: "Sin imagen",
    code: "ag021",
    stock: 20
})

product.deleteProductsById(2);

product.getProductsById(4)

product.updateProduct(2, 5000);
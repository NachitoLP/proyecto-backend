const { ProductManager } = require("./productManager");

const product = new ProductManager()

product.getProducts()
.then(resp => console.log(resp));

product.addProduct({
    name: "Ananá",
    description: "Una rica ananá",
    price: 2000,
    href: "Sin imagen",
    code: "123456",
    stock: 10
})

product.deleteProductsById(2);

product.getProductsById(4)

product.updateProduct(2, 5000);
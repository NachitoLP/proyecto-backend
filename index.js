class ProductManager {
    constructor(){
        this.products = []
    }
    getProducts = () => {
        return this.products;
    }
    addProduct = (nombre, descripcion, precio, imagen, stock, id) => {
        const product = {
            nombre,
            descripcion,
            precio,
            imagen,
            id,
            stock
        }
        if (this.products.length === 0) {
            product.id = 1;
        }
        else {
            product.id = this.products[this.products.length-1].id + 1;
        }
        this.products.push(product);
    }
    getProductsById = (id) => {
        let productoEncontrado = this.products.find(producto => producto.id === id)
        if (productoEncontrado){
            console.log(productoEncontrado)
        }else{
            console.log("producto no encontrado");
        }
    }
}

const manejadorProductos = new ProductManager();
manejadorProductos.addProduct("Manzana", "Una rica manzana", 5000, "*", 20);
manejadorProductos.addProduct("Banana", "Una rica banana", 2000, "+", 10);
manejadorProductos.addProduct("Ananá", "Una rica ananá", 3000, "+", 2);
manejadorProductos.addProduct("Frutilla", "Una rica frutilla", 500, "+", 15);
console.log(manejadorProductos.getProducts());
manejadorProductos.getProductsById(3);
manejadorProductos.getProductsById(6);
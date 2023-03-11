const fs = require("fs");
const route = "./archivos/productos.json"

class ProductManager {
    constructor(){
        this.route = route
    }
    getProducts = async () => {
        try {
            if(fs.existsSync(this.route)) {
                const products = await fs.promises.readFile(this.route);
                return JSON.parse(products);
            }
            else{
                return []
            }
        } catch (error) {
            return []
        }
    }

    addProduct = async ( product ) => {
        const products = await this.getProducts()

        if (products.length === 0) {
            product.id = 1;
        }
        else {
            product.id = products[products.length-1].id + 1;
        }
        
        products.push(product);
        await fs.promises.writeFile(route,JSON.stringify(products));
        return products;
    }


    getProductsById = async ( id ) => {
        const products = await this.getProducts();

        let productFound = products.find(product => product.id === id)
        if (productFound){
            console.log(productFound)
        }else{
            console.log("producto no encontrado");
        }
    }

    updateProduct = async ( id , change ) => {
        const products = await this.getProducts();

        let productFound = products.find(product => product.id === id)
        let productDeleted = products.find(product => product.id === id)
        let position = products.indexOf(productDeleted)


        if (productFound){
            productFound.price = change;

            products.splice(position,1);
            products.splice(position,0,productFound);
            console.log("Producto actualizado");
            
            await fs.promises.writeFile(route,JSON.stringify(products));
            return products;
        }
        else {
            console.log("producto no encontrado");
        }

    }

    deleteProductsById = async ( id ) => {
        const products = await this.getProducts();

        let productFound = products.find(product => product.id === id)
        let position = products.indexOf(productFound)

        if (position != -1){
            products.splice(position,1)
            await fs.promises.writeFile(route,JSON.stringify(products));
            return products;
        }
        else {
            console.log("producto no encontrado en la lista");
        }
    }
}

module.exports = {
    ProductManager
}
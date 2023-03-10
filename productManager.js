class ProductManager{

    constructor (){
        this.products= []
        this.path = './productos.json'

    }   

    static id = 0
        
    addProducts =({title,description,price,thumbnails,code,stock} ) => {
           if(!title || !description || !thumbnails || !price || !code || !stock){
                return console.log("Rellenar campos requeridos");
            }

           let productExist = this.products.filter((product) => product.code === code)
           if (productExist.length > 0){
                 return console.log("Producto con codigo ya existente");
            }

            ProductManager.id++
            let product = {
                title,
                description,
                price,
                thumbnails,
                code,
                stock,
                id : ProductManager.id
            }
            this.products.push(product)

           
            
            
        
        }
 
        getProducts = ()=> console.log(this.products);
        getProductById = (id) =>{
            let oneProduct = this.products.filter(product => product.id === id)
            if(oneProduct.length > 0){
                 return  console.log(oneProduct)
            } else{
             console.log("Not Found");
            }
         
         }

        
}

const newProduct = new ProductManager ()
newProduct.addProducts ({title:"tomate" , description :"Fruta versatil" , price : "300 el kilo" , thumbnails:"Sin imagen" , code:"t1" , stock:3 })
newProduct.addProducts ({title:"cebolla" , description :"Verdura verde y versatil" , price : "250 el kilo" , thumbnails:"Sin imagen" , code:"C1" , stock:7 }) 
newProduct.getProducts()

const fs = require ('fs')

const manejoArchivos = async()=>{

    
    try {
        await fs.promises.writeFile('./productos.json' , JSON.stringify(newProduct, null,2) ,'utf-8')
        .then(console.log("se creo el archivo")).catch((err)=>console.log(err))
        
    } catch (error) {
        console.log(error);
    }
    try {
        if (fs.existsSync(this.path)) {
            const products = await fs.promises.readFile(this.path,'utf-8')
            let objetoParseado = JSON.parse(products)
            return objetoParseado
        } else {
            return console.log("no se registro");
        }
    } catch (error) {
        console.log(error);
    }

    try {
        await fs.promises.appendFile('./productos.json' , '  ' , 'utf-8')
    } catch (error) {
        console.log(error);
    }


    // try {
    //     await fs.promises.unlink('./productos.json')
    // } catch (error) {
    //     console.log(error);
    // } Lo comente para que se pueda leer el resto del codigo

}

manejoArchivos()
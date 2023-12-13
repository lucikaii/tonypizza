const pizza = require('./tonypizzaria')
const categorias = require('./categorias')

const getProdutos = function(){

    var fProdutos = pizza.pizzaria.produtos
    var arrayProdutos = []
    var jsonProdutos = {}

    if(arrayProdutos && Array.isArray){

        fProdutos.forEach((produtos) => {
            
        jsonProdutos = {
            id: produtos.id,
            nome: produtos.nome,
            descricao: produtos.descricao,
            categoria: produtos.categoria,
            preco: produtos.preco
        }

        arrayProdutos.push(jsonProdutos)
        })
    
        jsonProdutos.produtos = arrayProdutos

        return arrayProdutos
    } else{

    console.log('NÃO É UMA ARRAY')
    }
   
}

const getprodutosCategoria = function(category){

    let fProdutos = pizza.pizzaria.produtos
    var arrayprodutosCategoria = []
    var jsonprodutosCategoria = {}

    if(arrayprodutosCategoria && Array.isArray){
        for(let cont = 0; cont < pizza.pizzaria.produtos; cont++){
            if(fProdutos[cont].categoria == category){
    
                jsonprodutosCategoria ={
                    
                    id: fProdutos[cont].id,
                    nome: fProdutos[cont].nome,
                    descricao: fProdutos[cont].descricao,
                    categoria: fProdutos[cont].categoria,
                    preco: fProdutos[cont].preco
                }
    
                arrayprodutosCategoria.push(jsonprodutosCategoria)
            }
    
            
        }
        jsonprodutosCategoria.produtos = arrayprodutosCategoria
        return arrayprodutosCategoria
    } else{
        console.log('NÃO É UMA ARRAY')
    }
}


console.log(getprodutosCategoria('pizza'))
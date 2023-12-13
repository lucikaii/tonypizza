const categorias = require('./categorias')

var pizzaria = {

    contas:
    [
        {
            id: 1,
            nome: "Kainan",
            email: "kai.luciano@gmail.com",
            senha: "kaikai123",
            celular: "11955964264",
            endereco: [
                {
                    estado: "São Paulo",
                    cidade: "Jandira",
                    bairro: "Parque Santa Agustinha",
                    complemento: "Rua Tenessee, 199"
                }
            ]
            
        },
        {
            id: 2,
            nome: "Alice",
            email: "licezeurgo@gmail.com",
            senha: "licefuturatavares",
            celular: "11940028922",
            endereco: [
                {
                    estado: "São Paulo",
                    cidade: "Jandira",
                    bairro: "Parque Santa Tere",
                    complemento: "Rua Amadeu, 45"
                }
            ]
            
        },
        {
            id: 3,
            nome: "Thamires",
            email: "bangtan20142004@gmail.com",
            senha: "odeiooprofbruno",
            celular: "11988467270",
            endereco: [
                {
                    estado: "São Paulo",
                    cidade: "Carapicuiba",
                    bairro: "Fim do mundo",
                    complemento: "Rua dos Loucos, 69"
                }
            ]
            
        },
        {
            id: 4,
            nome: "Luana",
            email: "luanamaga18@gmail.com",
            senha: "eusobotoapirocanaminhabundaquandootiosan",
            celular: "11966666666",
            endereco: [
                {
                    estado: "São Paulo",
                    cidade: "Jandira",
                    bairro: "Jardim Mazé",
                    complemento: "Rua da Luana, 666"
                }
            ]
            
        },
        {
            id: 5,
            nome: "Maria Luiza",
            email: "malubalieiro@gmail.com",
            senha: "taylorlindona",
            celular: "11978423674",
            endereco: [
                {
                    estado: "São Paulo",
                    cidade: "Barueri",
                    bairro: "Jardim Belval",
                    complemento: "Rua do Saci Pererê, 44"
                }
            ]
            
        },
        {
            id: 6,
            nome: "Suzane",
            email: "ssusuarcanjo@gmail.com",
            senha: "pererecasuicida",
            celular: "11979782058",
            endereco: [
                {
                    estado: "São Paulo",
                    cidade: "Barueri",
                    bairro: "Jardim Belval",
                    complemento: "Rua do Inspiri, 10"
                }
            ]
            
        },
        {
            id: 7,
            nome: "Jhenifer",
            email: "jhenibatista@gmail.com",
            senha: "amooplhaco",
            celular: "11955747869",
            endereco: [
                {
                    estado: "São Paulo",
                    cidade: "Cotia",
                    bairro: "Parque",
                    complemento: "Rua Osasco, 79"
                }
            ]
            
        },
        {
            id: 8,
            nome: "Nathalia Kawakami",
            email: "kawaka@gmail.com",
            senha: "soobim",
            celular: "11969696969",
            endereco: [
                {
                    estado: "São Paulo",
                    cidade: "Jandira",
                    bairro: "Bairro dos Predinhos",
                    complemento: "Rua dos Predinhos, 79"
                }
            ]
            
        },
        {
            id: 9,
            nome: "Bernardo",
            email: "bernardinho@gmail.com",
            senha: "lanadelrey",
            celular: "11955478298",
            endereco: [
                {
                    estado: "Bahia",
                    cidade: "Cidade do Bernardo",
                    bairro: "Bairro da Pepsi",
                    complemento: "Rua do Summertime Sadness, 69"
                }
            ]
            
        },
        {
            id: 10,
            nome: "Julio",
            email: "julinho@gmail.com",
            senha: "dancingqueen1976",
            celular: "11962694709",
            endereco: [
                {
                    estado: "Bahia",
                    cidade: "Slvador",
                    bairro: "Xique Xique",
                    complemento: "Rua do Balão, 69"
                }
            ]
            
        },
       
    ],
    produtos:
    [
        {
            id: 1,
            nome: "Muçarela",
            preco: 28.00,
            descricao: "muçarela e tomate",
            imagem: 'muçarela.png',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 2,
            nome: "Calabresa",
            preco: 28.00,
            descricao: "calabresa e cebola",
            imagem: 'calabresa.png',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 3,
            nome: "Marguerita",
            preco: 32.00,
            descricao: "muçarela, tomate, majericão e parmesão",
            imagem: 'margherita.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 4,
            nome: "Napolitana",
            preco: 32.00,
            descricao: "muçarela, tomate e parmesão",
            imagem: 'napolitana.webp',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 5,
            nome: "Toscana",
            preco: 28.00,
            descricao: "muçarela e calabresa",
            imagem: 'toscana.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 6,
            nome: "Baiana",
            preco: 29.90,
            descricao: "calabresa, ovo, pimenta e cebola",
            imagem: 'baiana.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 7,
            nome: "Portuguesa",
            preco: 28.00,
            descricao: "muçarela, cebola, ovo e presunto",
            imagem: 'portuguesa.jfif',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 8,
            nome: "Frango com Catupiry",
            preco: 30.00,
            descricao: "frango e catupiry",
            imagem: 'frangocatupiry.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 9,
            nome: "Brócolis",
            preco: 32.00,
            descricao: "brócolis, alho frito, muçarela e bacon",
            imagem: 'brocolis.webp',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 10,
            nome: "Peruana",
            preco: 35.00,
            descricao: "atum, muçarela e cebola",
            imagem: 'peruana.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 11,
            nome: "Dois Queijos",
            preco: 28.00,
            descricao: "muçarela e catupiry",
            imagem: 'doisqueijos.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 12,
            nome: "Siciliana",
            preco: 28.00,
            descricao: "presunto, champignon, catupiry e bacon",
            imagem: 'siciliana.jpeg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 13,
            nome: "Três Queijos",
            preco: 28.00,
            descricao: "muçarela catupiry e provolone",
            imagem: 'tresqueijos.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 14,
            nome: "Nordestina",
            preco: 28.00,
            descricao: "muçarela, cebola e carne seca",
            imagem: 'nordestina.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 15,
            nome: "Quatro Queijos",
            preco: 38.00,
            descricao: "muçarela, catupiry, provolone e gorgonzola",
            imagem: 'quatroqueijos.webp',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 16,
            nome: "Cheddar",
            preco: 38.00,
            descricao: "frango, cheddar e bacon",
            imagem: 'cheddar.png',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 17,
            nome: "Bella Donna",
            preco: 28.00,
            descricao: "lombo canadense, catupiry, bacon e parmesão",
            imagem: 'belladonna.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 18,
            nome: "Palmito",
            preco: 28.00,
            descricao: "palmito, muçarela, catupiry e tomate",
            imagem: 'palmito.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 19,
            nome: "M&M's",
            preco: 25.00,
            descricao: "chocolate e m&m's",
            imagem: 'pizzamm.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 20,
            nome: "Prestígio",
            preco: 30.00,
            descricao: "chocolate, coco ralado e leite condensado",
            imagem: 'prestigio.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 21,
            nome: "Romeu e Julieta",
            preco: 27.00,
            descricao: "muçarela e goiabada",
            imagem: 'romeuejulieta.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 22,
            nome: "Morango",
            preco: 28.00,
            descricao: "chocolate, morango e leite condensado",
            imagem: 'morango.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 23,
            nome: "Nutella",
            preco: 26.00,
            descricao: "nutella e morango",
            imagem: 'nutella.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 24,
            nome: "Brigadeiro",
            preco: 29.50,
            descricao: "chocolate e granulado",
            imagem: 'brigadeiro.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 25,
            nome: "Chocolate duplo",
            preco: 25.00,
            descricao: "chocolate ao leite e chocolate branco",
            imagem: 'chocolateduplo.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 26,
            nome: "Banana",
            preco: 24.50,
            descricao: "banana, doce de leite e leite condensado",
            imagem: 'banana.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 27,
            nome: "Chocolate com Banana",
            preco: 25.50,
            descricao: "chocolate, banana, morango e coco ralado",
            imagem: 'bananachocolate.jpg',
            categoria: categorias.produtoCategoria.listaCategoria[0].nome

        },
        {
            id: 28,
            nome: "Coca-cola",
            preco: 8.00,
            descricao: "Garrafa 2L",
            imagem: '',
            categoria: categorias.produtoCategoria.listaCategoria[1].nome

        },


    ]
    
}


module.exports ={
    pizzaria
}

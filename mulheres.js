const express = require("express") // aqui estou iniciando o express
const router = express.Router() // aqui estou configurando a primeira parte da rota
const cors = require('cors') // Disponibilizando o pacote "cors" que permite consumir essa API no front-end
//const { v4: uuidv4 } = require('uuid') // aqui estou configurando a biblioteca uuid

const conectaBancoDeDados = require('./bancoDeDados') // ligando o BD ao arquivo do BD
conectaBancoDeDados() // aqui estou chamando a função que conecta o BD

const Mulher = require('./mulherModel')
const app = express() // aqui estou iniciando o app
app.use(express.json())
app.use(cors())

const porta = 3333 // aqui estou criando a porta

//aqui estou criando a lista inicial de mulheres
/*const mulheres = [
    {
        id: '1',
        nome: 'Valeria Simonetti',
        imagem: 'https://media.licdn.com/dms/image/v2/D5603AQFAK5VvvuQIog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705016938981?e=1735776000&v=beta&t=F81RcwlDFJPX-1lKVS08BE8qe8Ue5FZMtgLiqXb0-5c',
        minibio: 'Engenheira de Produção',
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
    },
     
    {
        id: '3',
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
    },
]*/

// Função GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)
    }

    catch (erro) {
        console.log(erro)
    }
}

//Função POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao,
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    }

    catch (erro) {
        console.log(erro)
    }
}

// Função PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)

        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio
        }
        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()

        response.json(mulherAtualizadaNoBancoDeDados)
    }

    catch (erro) {
        console.log(erro)
    }

    /*const params = [
        "nome",
        "imagem",
        "minibio",
    ]

    for (var count=0; count < params.length; count++ ) {
        var param = params[count]
        if (request.body[param]) {
            mulherEncontrada[param] = request.body[param]
        }
    }*/
}

// Função DELETE
async function deletaMulher (request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)

        response.json({mensagem: 'Mulher deletada com sucesso!'})
    }

    catch (erro) {
        console.log(erro)
    }

}


// Função PORTA
function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta)
}

//Configurações do app
app.use(router.get('/mulheres'), mostraMulheres) // configurei a rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // configurei a rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) // configurei a rota PATCH /mulheres/id_da_mulher
app.use(router.delete('/mulheres/:id', deletaMulher)) // configurei a rota DELETE /mulheres/id_da_mulher
app.listen(porta, mostraPorta) //servidor ouvindo a porta
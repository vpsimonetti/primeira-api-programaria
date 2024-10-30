const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Valeria Simonetti',
        imagem: 'https://media.licdn.com/dms/image/v2/D5603AQFAK5VvvuQIog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705016938981?e=1735776000&v=beta&t=F81RcwlDFJPX-1lKVS08BE8qe8Ue5FZMtgLiqXb0-5c',
        minibio: 'Engenheira de Produção',
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'CEO & Founder da PrograMaria',
    },
     
    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
    },
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres'), mostraMulheres)
app.listen(porta, mostraPorta)
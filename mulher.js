const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Valeria Simonetti',
        imagem: 'https://media.licdn.com/dms/image/v2/D5603AQFAK5VvvuQIog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705016938981?e=1735776000&v=beta&t=F81RcwlDFJPX-1lKVS08BE8qe8Ue5FZMtgLiqXb0-5c',
        minibio: 'Engenheira de Produção',
    })
   /*response.send(`
        <h1> ${request.query.nome}</h1>
        <img src = "https://media.licdn.com/dms/image/v2/D5603AQFAK5VvvuQIog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705016938981?e=1735776000&v=beta&t=F81RcwlDFJPX-1lKVS08BE8qe8Ue5FZMtgLiqXb0-5c" >
        <br>
        <img src = "https://media.licdn.com/dms/image/v2/D5603AQFAK5VvvuQIog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705016938981?e=1735776000&v=beta&t=F81RcwlDFJPX-1lKVS08BE8qe8Ue5FZMtgLiqXb0-5c" >
        <br>
        <img src = "https://media.licdn.com/dms/image/v2/D5603AQFAK5VvvuQIog/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705016938981?e=1735776000&v=beta&t=F81RcwlDFJPX-1lKVS08BE8qe8Ue5FZMtgLiqXb0-5c" >

    `)*/
}

function mostraPorta() {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
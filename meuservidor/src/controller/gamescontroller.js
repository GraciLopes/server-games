const games = require("../model/games.json") //acessando a pasta models

const novoGames = games.map(game => {
    const novoGames = {
        id: game.id,
        nome: game.name,
        genero: game.genre,
        plataforma: game.platforms,
        capa: game.cover
    }
    return novoGames
})



const getAll = (request, response) => {
    console.log(request.url) //url está chamando o caminho da pasta percorrida
    response.status(200).send(games) //quando solicitado o getAll enviamos a resposta 200
}

const getGames = (request, response) => {
    console.log(request.url)
    response.status(200).send(novoGames)
}

const getGamesbyId = (request, response) => {
    const id = request.params.id
    const game = novoGames.find(game => game.id == id)
    response.status(200).send(game)
}

module.exports = {
    getAll,
    getGames,
    getGamesbyId
}
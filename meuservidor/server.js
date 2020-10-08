const app = require("./src/app")

const PORT = 8000

app.listen(PORT, function() {
    console.log("App rodando na porta " + PORT)
})
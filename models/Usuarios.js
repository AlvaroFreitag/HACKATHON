const bcrypt = require("bcrypt.js")

const users = [
    {
        nome: "Admin",
        email: "admin@alvaro.com",
        senha: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },

    {
        nome: "Usuario",
        email: "usuario@gmail.com",
        senha: bcrypt.hashSync("123456", 10)
    }
]
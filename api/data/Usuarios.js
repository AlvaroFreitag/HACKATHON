const bcrypt = require("bcryptjs");
const usuarios = [
  {
    nome: "Admin",
    email: "admin@node.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    nome: "Usuario",
    email: "usuario@node.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = usuarios;

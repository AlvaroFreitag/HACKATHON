const router = require("express").Router();
const Usuario = require("./models/Usuario");
const usuarios = require("./data/Usuarios");
const Produto = require("./models/Produto");
const produtos = require("./data/Produtos");
const AsynHandler = require("express-async-handler");

router.post(
  "/usuarios",
  AsynHandler(async (req, res) => {
    await Usuario.deleteMany({});
    const UsuarioSeeder = await Usuario.insertMany(usuarios);
    res.send({ UsuarioSeeder });
  })
);

router.post(
  "/produtos",
  AsynHandler(async (req, res) => {
    await Produto.deleteMany({});
    const ProdutoSeeder = await Produto.insertMany(produtos);
    res.send({ ProdutoSeeder });
  })
);

module.exports = router;

const express = require("express");
const produtoRoute = express.Router();
const asyncHandler = require("express-async-handler");
const Produto = require("../models/Produto");

produtoRoute.get(
  "/random",
  asyncHandler(async (req, res) => {
    
    const todosProdutos = await Produto.find({});
    
    const sortidosProdutos = todosProdutos.sort(() => 0.5 - Math.random());
    
    const randomizadosProdutos = sortidosProdutos.slice(0, 6);
    res.json(randomizadosProdutos);
  })
);

produtoRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const produtos = await Produto.find({});
    res.json(produtos);
  })
);

produtoRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const produto = await Produto.findById(req.params.id);
    if (produto) {
      res.json(produto);
    } else {
      res.status(404);
      throw new Error("produto não encontrado");
    }
  })
);

module.exports = produtoRoute;

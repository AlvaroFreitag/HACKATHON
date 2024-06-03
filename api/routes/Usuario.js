const express = require("express");
const usuarioRoute = express.Router();
const AsyncHandler = require("express-async-handler");
const Usuario = require("../models/Usuario");
const generateToekn = require("../tokenGenerate");
const protect = require("../middleware/Auth");

usuarioRoute.post(
  "/login",
  AsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (usuario && (await usuario.matchPassword(password))) {
      res.json({
        _id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        isAdmin: usuario.isAdmin,
        token: generateToekn(usuario._id),
        createdAt: usuario.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("E-mail ou senha invalida");
    }
  })
);


usuarioRoute.post(
  "/",
  AsyncHandler(async (req, res) => {
    const { nome, email, password } = req.body;
    const existUsuario = await Usuario.findOne({ email });
    if (existUsuario) {
      res.status(400);
      throw new Error("Usuario já existe");
    } else {
      const usuario = await Usuario.create({
        nome,
        email,
        password,
      });

      if (usuario) {
        res.status(201).json({
          _id: usuario._id,
          nome: usuario.nome,
          email: usuario.email,
          isAdmin: usuario.isAdmin,
          createdAt: usuario.createdAt,
        });
      } else {
        res.status(400);
        throw new Error("Usuario invalido");
      }
    }
  })
);


usuarioRoute.get(
  "/profile",
  protect,
  AsyncHandler(async (req, res) => {
    const usuario = await Usuario.findById(req.usuario._id);
    if (usuario) {
      res.json({
        _id: usuario._id,
        nome: usuario.nome,
        email: usuario.email,
        isAdmin: usuario.isAdmin,
        createdAt: usuario.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("Usuario não encontrado");
    }
  })
);

usuarioRoute.put(
  "/profile",
  protect,
  AsyncHandler(async (req, res) => {
    const usuario = await Usuario.findById(req.usuario._id);
    if (usuario) {
      usuario.nome = req.body.nome || usuario.nome;
      usuario.email = req.body.email || usuario.email;
      if(req.body.password)
      {
        usuario.password = req.body.password
      }
      const updatedUsuario = await usuario.save();
      res.json({
        _id: updatedUsuario._id,
        nome: updatedUsuario.nome,
        email: updatedUsuario.email,
        isAdmin: updatedUsuario.isAdmin,
        createdAt: updatedUsuario.createdAt,
        token:generateToekn(updatedUsuario._id)
      });

    } else {
      res.status(404);
      throw new Error("Usuario não encontrado");
    }
  })
);

usuarioRoute.post(
  "/favoritos/:id",
  protect,
  AsyncHandler(async (req, res) => {
    const usuario = await Usuario.findById(req.usuario._id);
    console.log(usuario);
    const produtoId = req.params.id;

    if (usuario) {
      if (usuario.favoritos.includes(produtoId)) {
        res.status(400);
        throw new Error("Produto já está nos favoritos");
      }

      usuario.favoritos.push(produtoId);
      await usuario.save();
      res.status(201).json({ message: "Produto adicionado aos favoritos" });
    } else {
      res.status(404);
      throw new Error("Usuário não encontrado");
    }
  })
);


usuarioRoute.delete(
  "/favoritos/:id",
  protect,
  AsyncHandler(async (req, res) => {
    const usuario = await Usuario.findById(req.usuario._id);
    const produtoId = req.params.id;

    if (usuario) {
      usuario.favoritos = usuario.favoritos.filter(
        (fav) => fav.toString() !== produtoId
      );
      await usuario.save();
      res.json({ message: "Produto removido dos favoritos" });
    } else {
      res.status(404);
      throw new Error("Usuário não encontrado");
    }
  })
);

usuarioRoute.get(
  "/favoritos",
  protect,
  AsyncHandler(async (req, res) => {
    const usuario = await Usuario.findById(req.usuario._id).populate('favoritos');

    if (usuario) {
      res.json(usuario.favoritos);
    } else {
      res.status(404);
      throw new Error("Usuário não encontrado");
    }
  })
);

module.exports = usuarioRoute;

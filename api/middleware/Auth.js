const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Usuario = require("../models/Usuario");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodificadoToken = jwt.verify(token, process.env.JWT_SECRECT);
      req.usuario = await Usuario.findById(decodificadoToken.id).select("-password");
      next();
    } catch (err) {
      console.log(err);
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Não autorizado");
  }
});

module.exports = protect;

const mongoose = require("mongoose");


const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  imagem: { type: String, required: true },
  description: { type: String, required: true },
  preço: { type: Number, required: true, default: 0 },


 
});

module.exports = mongoose.model("Produto", produtoSchema)
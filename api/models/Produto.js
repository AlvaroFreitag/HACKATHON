const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//   nome: { Type: String, required: true },
//   rating: { type: Number, required: true },
//   comment: { type: String, required: true },
//   usuario: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Usuario" },
// });

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  imagem: { type: String, required: true },
  description: { type: String, required: true },
  preço: { type: Number, required: true, default: 0 },


  // reviews: [reviewSchema],
});

module.exports = mongoose.model("Produto", produtoSchema)
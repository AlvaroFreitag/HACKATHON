const mongoose = require("mongoose")

const produtoSchema = mongoose.Schema(
    {
        nome: {type: String, required: true},
        descricao: {type: String, required: true},
        preco: {type: Number, required: true},
        categoria: {type: String, required: true},
        imagens: {type: String, required: true},
        emEstoque: {type: Number, required: true},
        quantidadeEmEstoque: {type: Number, required: true},
        
    }
);

module.exports = mongoose.model("Produto", produtoSchema);

// module.module

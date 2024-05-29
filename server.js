const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const produtos = require("./data/Produtos");
const PORT = process.env.PORT;

app.listen(3000 , () => {
    console.log(`server listening on port 3000`)
});


// TESTE DE ROTA DE PRODUTOS

// app.get("/api/produtos" , (req, res) => {
    
//     res.json(produtos);
// });


// app.get("/api/produtos/:id" , (req, res) => {
//     const produto = produtos.find((produto) => produto.id == req.params.id)
    
//     res.json(produto);
// });


// CONECTAR AO BANCO DE DADOS
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGOOSEBANCODEDADOS_RUL).then(()=> console.log("Banco de dados conectado")).then((err)=>{
    err;
})

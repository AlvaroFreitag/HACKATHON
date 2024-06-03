const express = require("express");
const app = express();
const dotenv = require("dotenv");
// const produtos = require("./data/Produtos");
dotenv.config();
const PORT = process.env.PORT;

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGOOSEDB_RUL)
  .then(() => console.log("Banco de dados Conectado"))
  .then((err) => {
    err;
  });

const databaseSeeder = require("./databaseSeeder");
const usuarioRoute = require("./routes/Usuario");
const produtoRoute = require("./routes/Produto");

app.use(express.json())




app.use("/api/seed", databaseSeeder);


app.use("/api/usuarios", usuarioRoute);


app.use("/api/produtos", produtoRoute);


app.listen(PORT || 9000, () => {
  console.log(`Servidor esta escutando na porta: ${PORT}`);
});
















//api produto test route
// app.get("/api/produtos", (req, res) => {
//   res.json(produtos);
// });
// app.get("/api/produtos/:id", (req, res) => {
//     const produto = produtos.find((produto)=>produto.id === req.params.id)
//     res.json(produto);
//   });

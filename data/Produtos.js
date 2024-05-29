const produtos = [
    {
        id: 1,
        nome: "Tênis Nike Air Max",
        descricao: "Tênis de alta performance com amortecimento Air",
        preco: 499.99,
        categoria: "Tênis",
        imagens: ["nike_air_max1.jpg", "nike_air_max2.jpg"],
        emEstoque: true,
        quantidadeEmEstoque: 20,
        avaliacoes: [
            {usuario: "João", nota: 5, comentario: "Excelente produto!"},
            {usuario: "Maria", nota: 4, comentario: "Muito bom, mas poderia ser mais barato."}
        ]
    },
    {
        id: 2,
        nome: "Camiseta Adidas Climacool",
        descricao: "Camiseta com tecnologia Climacool para melhor ventilação",
        preco: 79.99,
        categoria: "Roupas",
        imagens: ["adidas_climacool1.jpg", "adidas_climacool2.jpg"],
        emEstoque: true,
        quantidadeEmEstoque: 50,
        avaliacoes: [
            {usuario: "Carlos", nota: 4, comentario: "Muito confortável."}
        ]
    },
    {
        id: 3,
        nome: "Bola de Futebol Adidas",
        descricao: "Bola oficial da Copa do Mundo",
        preco: 149.99,
        categoria: "Bolas",
        imagens: ["bola_futebol_adidas1.jpg", "bola_futebol_adidas2.jpg"],
        emEstoque: false,
        quantidadeEmEstoque: 0,
        avaliacoes: []
    },
    {
        id: 4,
        nome: "Chuteira Puma Future",
        descricao: "Chuteira de alta performance com design inovador",
        preco: 299.99,
        categoria: "Chuteiras",
        imagens: ["chuteira_puma_future1.jpg", "chuteira_puma_future2.jpg"],
        emEstoque: true,
        quantidadeEmEstoque: 15,
        avaliacoes: [
            {usuario: "Ana", nota: 5, comentario: "Perfeita para o meu jogo."}
        ]
    },
    {
        id: 5,
        nome: "Calça Nike Sportswear",
        descricao: "Calça confortável para treinos e uso diário",
        preco: 129.99,
        categoria: "Roupas",
        imagens: ["calca_nike_sportswear1.jpg", "calca_nike_sportswear2.jpg"],
        emEstoque: true,
        quantidadeEmEstoque: 30,
        avaliacoes: [
            {usuario: "Pedro", nota: 3, comentario: "Boa, mas um pouco cara."}
        ]
    }
]

module.exports = produtos;
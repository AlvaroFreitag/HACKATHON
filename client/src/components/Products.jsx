import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/produtos/random');
        console.log('Dados recebidos:', response.data); 
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="container mx-auto px-5 py-24">
      <h1 className="text-3xl font-medium text-gray-900 mb-8">Produtos Randomizados</h1>
      <div className="flex flex-wrap justify-center -m-4">
        {produtos.map((produto) => (
          <div key={produto._id} className="p-4 w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img 
                src={produto.imagem} 
                alt={produto.nome} 
                className="h-64 w-full object-cover object-center mb-4 rounded" 
              />
              <h2 className="text-gray-900 text-xl title-font font-medium mb-1">{produto.nome}</h2>
              <p className="text-gray-900 text-lg mb-2 font-bold">Preço: R$ {produto.preço.toFixed(2)}</p>
              <a 
                href="http://localhost:5173/detail/"
                className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded"
              >
                Detalhes            
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

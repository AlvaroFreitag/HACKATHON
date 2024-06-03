const mockproducts = [
  {
    _id: "665cd77dd15c1325a266764d",
    nome: "TENIS ADIDAS SAMBA",
    imagem:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52c951e30dcb4ff1bfdfd053405a6f75_9366/Samba_Shoes_Green_IG1243_01_standard.jpg",
    description:
      "Os tênis Adidas Samba na colorway são uma versão moderna de um clássico atemporal. Com uma combinação de cores suaves e elegantes, esses tênis apresentam um visual sofisticado e contemporâneo. A parte superior em tom Halo Blush oferece um toque de delicadeza, enquanto os detalhes em Clay Strata adicionam profundidade e estilo. A sola de borracha gum proporciona durabilidade e aderência, completando o visual com um toque de nostalgia. Estes tênis são ideais para quem procura um calçado versátil que combine conforto e estilo.",
    preço: 399.95,
    __v: 0,
  },
  {
    _id: "665cd77dd15c1325a2667654",
    nome: "MOCHILA ADIDAS DESIGNED 4 TRAINING HIIT",
    imagem:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/26c21c4b8bcb43d096caaf330079978b_9366/Designed_for_Training_HIIT_Backpack_Grey_HT2441_01_standard.jpg",
    description:
      "A conveniência é fundamental quando você vai do ponto A ao ponto HIIT. Separe o seu equipamento de treino do seu equipamento de trabalho com esta mochila adidas, graças aos vários bolsos. A sarja é macia e leve, para que você possa contar com conforto durável. A malha nas costas mantém o fluxo de ar.",
    preço: 786,
    __v: 0,
  },
  {
    _id: "665cd77dd15c1325a2667652",
    nome: "TÊNIS ADIDAS FORUM BOLD FEMININO",
    imagem:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aebc2dba24cd456a9baaafad0019bac3_9366/Forum_84_Low_ADV_Shoes_Black_IG7581_01_standard.jpg",
    description:
      "Tênis adidas Forum Bold Stripes Feminino Este tênis possui todos os detalhes que continuam a fazer do adidas Forum Bold Stripes um ícone, possuindo design clássico e atemporal é um modelo que nunca sai de moda e fará uma composição perfeita no seu visual. O tênis possui um acabamento em couro. Fecho de cadarços, e o solado de borracha para maior durabilidade.",
    preço: 399.99,
    __v: 0,
  },
  {
    _id: "665cd77dd15c1325a266764e",
    nome: "TÊNIS ADIDAS FORUM LOW MASCULINO",
    imagem:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee357a7a8aef48d9b295af9e00205eec_9366/Forum_Low_Shoes_White_IE7165_01_standard.jpg",
    description:
      "Mais que apenas um tênis, ele é uma declaração. O adidas Forum entrou em cena em 84 e arrebatou todo o amor das quadras e do show biz. Este tênis clássico traz de volta a atitude dos anos 80, a energia explosiva do basquete e o icônico design de tira em X no tornozelo, destilados em uma versão de cano baixo para as ruas.",
    preço: 549.99,
    __v: 0,
  },
  {
    _id: "665cd77dd15c1325a266764f",
    nome: "TÊNIS STAN SMITH LUX",
    imagem:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a655b830a086442aa041af9c009fcdfc_9366/Stan_Smith_Shoes_White_FZ6429_01_standard.jpg",
    description:
      "O atemporal Stan Smith Lux traz uma nova silhueta. Com um visual clean e sem gênero que remete ao original, esta versão é facilmente elevada com detalhes premium. Inspirado nas quadras, ele é feito inteiramente de couro macio, do forro interno ao patch extra de couro no calcanhar, proporcionando mais conforto e durabilidade. A inscrição laminada dourada na língua é um acabamento simples, porém elegante.",
    preço: 799.99,
    __v: 0,
  },
  {
    _id: "665cd77dd15c1325a2667656",
    nome: "BOLSA ADIDAS YOGA TOTE PINK",
    imagem:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1fbc9be735c54edbbb490628e3804bda_9366/Yoga_Tote_Bag_Pink_HZ5945_01_standard.jpg",
    description:
      "A companheira perfeita para ioga em movimento, esta bolsa da adidas tem uma boa aparência e funciona muito. Com seu compartimento principal espaçoso, vários bolsos com zíper e malha interna, manterá seu equipamento organizado e pronto. Tudo o que você precisa fazer é prender o tapete de ioga, puxar as alças por cima do ombro e pronto.",
    preço: 499,
    __v: 0,
  },
];
const Products = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="bg-white">
              <div className=" max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            Basic Tee
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$35</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="bg-white">
              <div className=" max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            Basic Tee
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$35</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="bg-white">
              <div className=" max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            Basic Tee
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$35</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="bg-white">
              <div className=" max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            Basic Tee
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Black</p>
                      </div>
                      <p className="text-sm font-medium text-gray-900">$35</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

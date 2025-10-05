// Estrutura inicial
console.log('TenisBlog - App carregado');
// Estrutura JSON dos dados
const dados = [
  {
    id: 1,
    titulo: "Nike Air Force 1 '07",
    descricao: 'O clássico atemporal que nunca sai de moda',
    conteudo:
      "O Nike Air Force 1 '07 é um ícone da cultura sneaker. Com seu design limpo e solado de borracha durável, este tênis oferece conforto e estilo para qualquer ocasião. A tecnologia Air na entressola proporciona amortecimento suave o dia todo.",
    categoria: 'Casual',
    marca: 'Nike',
    valor: 'R$ 759,99',
    data: '2025-03-30',
    imagem: 'imgs/tenisNike.png',
    imagemDetalhe: 'imgs/tenisNike.png',
  },
  {
    id: 2,
    titulo: 'Adidas Superstar',
    descricao: 'O lendário tênis com bico de casca de camarão',
    conteudo:
      'O Adidas Superstar revolucionou o basquete nos anos 70 e se tornou um ícone da cultura urbana. Com seu distintivo bico de casca de camarão e三条 listras, este tênis combina heritage esportivo com estilo contemporâneo.',
    categoria: 'Casual',
    marca: 'Adidas',
    valor: 'R$ 499,99',
    data: '2025-03-28',
    imagem: 'imgs/tenisAdidas.png',
    imagemDetalhe: 'imgs/tenisAdidas.png',
  },
  {
    id: 3,
    titulo: 'New Balance 550',
    descricao: 'Retrô com estilo vintage e conforto premium',
    conteudo:
      'O New Balance 550 combina heritage do basquete dos anos 80 com design contemporâneo. Construído em couro premium com detalhes em suede, oferece conforto excepcional e estilo versátil para o dia a dia.',
    categoria: 'Casual',
    marca: 'New Balance',
    valor: 'R$ 999,99',
    data: '2025-03-27',
    imagem: 'imgs/tenisNW.png',
    imagemDetalhe: 'imgs/tenisNW.png',
  },
  {
    id: 4,
    titulo: 'Puma Suede XL',
    descricao: 'Clássico reinventado com atitude streetwear',
    conteudo:
      'O Puma Suede XL é uma evolução do icônico modelo Suede. Com solado mais robusto e design ampliado, mantém a essência do original enquanto adiciona uma vibe contemporânea. Perfeito para quem busca estilo e conforto.',
    categoria: 'Casual',
    marca: 'Puma',
    valor: 'R$ 599,99',
    data: '2025-03-26',
    imagem: 'imgs/tenisPuma.png',
    imagemDetalhe: 'imgs/tenisPuma.png',
  },
];

console.log('Dados JSON carregados:', dados);

// Função para carregar os modelos na página inicial
function carregarModelos() {
  const container = document.querySelector('.dividir_modelos');

  if (!container) {
    console.log('Container de modelos não encontrado');
    return;
  }

  console.log('Carregando modelos...');
  container.innerHTML = '';

  dados.forEach((item) => {
    const card = `
      <a href="detalhes.html?id=${item.id}" class="card-link">
        <div class="modelo">
          <img src="${item.imagem}" alt="${item.titulo}" />
          <h3>${item.titulo}</h3>
          <p>Valor: ${item.valor}</p>
        </div>
      </a>
    `;
    container.innerHTML += card;
  });

  console.log('Modelos carregados com sucesso');
}

// Inicialização básica
document.addEventListener('DOMContentLoaded', function () {
  console.log('Página carregada');
  if (document.querySelector('.dividir_modelos')) {
    carregarModelos();
  }
});

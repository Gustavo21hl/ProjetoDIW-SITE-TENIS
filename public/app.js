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
    linkCompra:
      'https://www.nike.com.br/tenis-nike-air-force-1-07-masculino-011137.html',
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
    linkCompra: 'https://www.adidas.com.br/tenis-superstar/EG4958.html',
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
    linkCompra:
      'https://www.newbalance.com.br/tenis-new-balance-550-masculino-1174678/p',
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
    linkCompra: 'https://br.puma.com/tenis-suede-xl-395205-02.html',
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

// Função para carregar os detalhes do produto
function carregarDetalhes() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  console.log('ID do produto:', id);

  if (!id) {
    document.getElementById('detalhes-container').innerHTML =
      '<p>Produto não encontrado.</p>';
    return;
  }

  const produto = dados.find((item) => item.id == id);

  if (!produto) {
    document.getElementById('detalhes-container').innerHTML =
      '<p>Produto não encontrado.</p>';
    return;
  }

  console.log('Produto encontrado:', produto);

  const detalhesHTML = `
    <div class="detalhes-produto">
      <div class="detalhes-imagem">
        <img src="${produto.imagemDetalhe}" alt="${produto.titulo}" />
      </div>
      <div class="detalhes-info">
        <h1>${produto.titulo}</h1>
        <p class="marca">Marca: ${produto.marca}</p>
        <p class="valor">${produto.valor}</p>
        <p class="descricao">${produto.descricao}</p>
        <div class="conteudo">
          <h3>Detalhes do Produto</h3>
          <p>${produto.conteudo}</p>
        </div>
        <div class="categoria">
          <strong>Categoria:</strong> ${produto.categoria}
        </div>
        <div class="acoes">
          <a href="${produto.linkCompra}" target="_blank" class="btn-comprar">
            🛒 Comprar Agora
          </a>
          <a href="index.html" class="btn-voltar">← Voltar para a Loja</a>
        </div>
      </div>
    </div>
  `;

  document.getElementById('detalhes-container').innerHTML = detalhesHTML;
}

// Inicialização completa
document.addEventListener('DOMContentLoaded', function () {
  console.log('Página carregada - URL:', window.location.pathname);

  if (window.location.pathname.includes('detalhes.html')) {
    console.log('Carregando página de detalhes');
    carregarDetalhes();
  } else if (document.querySelector('.dividir_modelos')) {
    console.log('Carregando página inicial');
    carregarModelos();
  }
});

// Gera todas as páginas do site manavivaro.com.br.
// Uso (na pasta manavivaro): node gerador/gerar.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { materias } = require('./conteudo');

const RAIZ = path.join(__dirname, '..');
const SITE = 'https://manavivaro.com.br';
const NOME = 'Mana Vivaro';
const EMAIL = 'contato@manavivaro.com.br';
const HOJE = new Date().toISOString().slice(0, 10);

const hash = f => crypto.createHash('md5').update(fs.readFileSync(path.join(RAIZ, f))).digest('hex').slice(0, 8);
const V_CSS = hash('assets/css/style.css');
const V_JS = hash('assets/js/main.js');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const dataBR = d => new Date(d + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
// Mais recentes primeiro; na mesma data, vale a ordem do conteudo.js
const ordenadas = materias.map((m, i) => ({ ...m, i })).sort((a, b) => b.data.localeCompare(a.data) || a.i - b.i);

const svg = d => `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const icones = {
  arvore: svg('<path d="M12 22v-7"/><path d="M9 22h6"/><circle cx="12" cy="8" r="5"/><path d="M12 15c-3 0-6-1-7-4M12 15c3 0 6-1 7-4"/>'),
  predio: svg('<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>'),
  escudo: svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'),
  grafico: svg('<path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-6"/><path d="M16 8h4v4"/>'),
  maleta: svg('<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20"/>'),
  pessoas: svg('<circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2M16 3.1a4 4 0 0 1 0 7.8M22 21v-2a4 4 0 0 0-3-3.9"/>'),
  email: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>'),
  mapa: svg('<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>'),
  relogio: svg('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>')
};

const MENU = [
  ['/', 'Início'],
  ['/servicos/', 'Serviços'],
  ['/sobre/', 'Sobre'],
  ['/blog/', 'Blog'],
];

function pagina({ caminho, titulo, descricao, conteudo, imagem = 'og.jpg', tipo = 'website', jsonld = [], semIndex = false, preload = '' }) {
  const url = SITE + caminho;
  const tituloCompleto = caminho === '/' ? titulo : `${titulo} | ${NOME}`;
  const menu = MENU.map(([href, txt]) => {
    const atual = href === '/' ? caminho === '/' : caminho.startsWith(href);
    return `<li><a href="${href}"${atual ? ' aria-current="page"' : ''}>${txt}</a></li>`;
  }).join('\n          ');
  const ld = jsonld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n  ');
  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(tituloCompleto)}</title>
  <meta name="description" content="${esc(descricao)}">
  <link rel="canonical" href="${url}">
  ${semIndex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
  <meta name="theme-color" content="#0e0f12">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="${NOME}">
  <meta property="og:type" content="${tipo}">
  <meta property="og:title" content="${esc(titulo)}">
  <meta property="og:description" content="${esc(descricao)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE}/assets/img/${imagem}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(titulo)}">
  <meta name="twitter:description" content="${esc(descricao)}">
  <meta name="twitter:image" content="${SITE}/assets/img/${imagem}">
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/img/icon-192.png?v=2">
  <link rel="icon" href="/favicon.ico?v=2" sizes="48x48">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32.png?v=2">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16.png?v=2">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png?v=2">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600&family=Inter:wght@400;500;600;700&display=swap">
  ${preload}<link rel="stylesheet" href="/assets/css/style.css?v=${V_CSS}">
  ${ld}
</head>
<body>
  <a class="pular" href="#conteudo">Pular para o conteúdo</a>
  <header class="topo">
    <div class="container">
      <a class="marca" href="/" aria-label="${NOME}, página inicial">
        <img src="/assets/img/logo.png" alt="" width="54" height="54">
        <span>Mana Vivaro</span>
      </a>
      <button class="botao-menu" aria-expanded="false" aria-controls="menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg> Menu
      </button>
      <nav class="menu" id="menu" aria-label="Principal">
        <ul>
          ${menu}
          <li><a class="cta-menu" href="/contato/"${caminho.startsWith('/contato/') ? ' aria-current="page"' : ''}>Fale conosco</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="conteudo">
${conteudo}
  </main>

  <footer class="rodape">
    <div class="container">
      <div class="colunas">
        <div>
          <img class="logo-rodape" src="/assets/img/logo.png" alt="Logotipo Mana Vivaro" width="72" height="72" loading="lazy">
          <p>Administração de holding familiar e assessoria para famílias empresárias: patrimônio organizado, sucessão planejada e decisões transparentes.</p>
        </div>
        <div>
          <h2>Navegação</h2>
          <ul>
            <li><a href="/servicos/">Serviços</a></li>
            <li><a href="/sobre/">Sobre a Mana Vivaro</a></li>
            <li><a href="/blog/">Blog</a></li>
            <li><a href="/contato/">Contato</a></li>
          </ul>
        </div>
        <div>
          <h2>Contato</h2>
          <ul>
            <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
            <li>São Paulo – SP</li>
            <li><a href="/privacidade/">Política de privacidade</a></li>
          </ul>
        </div>
      </div>
      <div class="base">
        <span>© <span id="ano">${new Date().getFullYear()}</span> Mana Vivaro. Todos os direitos reservados.</span>
        <span>Administração de holding familiar</span>
      </div>
    </div>
  </footer>
  <script src="/assets/js/main.js?v=${V_JS}" defer></script>
</body>
</html>
`;
}

function trilha(itens) {
  const lis = itens.map(([href, txt], i) => i === itens.length - 1
    ? `<li aria-current="page">${esc(txt)}</li>`
    : `<li><a href="${href}">${esc(txt)}</a></li>`).join('');
  const ld = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: itens.map(([href, txt], i) => ({ '@type': 'ListItem', position: i + 1, name: txt, item: SITE + href }))
  };
  return { html: `<nav class="trilha" aria-label="Você está em"><ol>${lis}</ol></nav>`, ld };
}

function placa(m, classe = '') {
  return `<div class="placa${classe}" aria-hidden="true"><div><small>${esc(m.tema)}</small><strong>${esc(m.titulo.split(':')[0])}</strong></div></div>`;
}

function cartaoMateria(m) {
  const midia = m.imagem
    ? `<img src="/assets/img/${m.imagem}" alt="${esc(m.imagemAlt)}" width="1200" height="800" loading="lazy">`
    : placa(m);
  return `<article class="cartao" data-tema="${esc(m.tema)}">
        <div class="midia">${midia}</div>
        <div class="corpo">
          <span class="tag">${esc(m.tema)}</span>
          <h3><a href="/blog/${m.slug}/">${esc(m.titulo)}</a></h3>
          <p>${esc(m.descricao)}</p>
          <span class="meta"><time datetime="${m.data}">${dataBR(m.data)}</time></span>
        </div>
      </article>`;
}

const ORG = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': SITE + '/#organizacao',
  name: NOME,
  url: SITE + '/',
  logo: SITE + '/assets/img/logo.png',
  image: SITE + '/assets/img/og.jpg',
  email: EMAIL,
  description: 'Administração de holding familiar e assessoria empresarial para famílias: gestão de patrimônio, planejamento sucessório e governança.',
  areaServed: { '@type': 'Country', name: 'Brasil' },
  address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
  knowsAbout: ['Holding familiar', 'Holding patrimonial', 'Planejamento sucessório', 'Governança familiar', 'Administração de imóveis', 'Assessoria empresarial']
};

const SERVICOS = [
  ['arvore', 'Administração de holding familiar', 'Cuidamos do dia a dia da holding: rotinas societárias, controle de receitas e despesas, distribuição de lucros e relatórios para os sócios.',
    ['Rotinas e atas de sócios', 'Controle financeiro e prestação de contas', 'Relacionamento com contador e bancos']],
  ['pessoas', 'Planejamento sucessório', 'Ajudamos a família a desenhar a sucessão em vida, com regras claras e menos risco de conflito entre herdeiros.',
    ['Mapeamento do patrimônio e dos objetivos', 'Estudo de doação de quotas com usufruto', 'Coordenação com advogados e contadores']],
  ['predio', 'Administração de imóveis', 'Gestão do patrimônio imobiliário da família, para que cada imóvel renda bem e esteja em ordem.',
    ['Contratos, reajustes e cobranças', 'Vistorias e manutenção', 'IPTU, condomínios e documentação']],
  ['maleta', 'Assessoria empresarial', 'Apoio para empresas familiares crescerem com organização e indicadores claros.',
    ['Organização financeira e orçamento', 'Separação entre contas da família e da empresa', 'Rotina de indicadores e reuniões']],
  ['grafico', 'Planejamento estratégico', 'Estratégias personalizadas para alavancar resultados e orientar investimentos do patrimônio.',
    ['Diagnóstico e metas', 'Plano de ação com responsáveis', 'Acompanhamento periódico']],
  ['escudo', 'Governança familiar', 'Regras e fóruns para que a família decida junto e prepare a próxima geração.',
    ['Acordo de sócios e protocolo familiar', 'Conselho de família', 'Preparação de sucessores']],
];

const servicoHTML = ([ic, titulo, texto, itens], comLista) => `<div class="servico">
            <div class="icone">${icones[ic]}</div>
            <h3>${titulo}</h3>
            <p>${texto}</p>${comLista ? `\n            <ul>${itens.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
          </div>`;

const FAQ = [
  ['O que é uma holding familiar?', 'É uma empresa criada para ser dona dos bens e das participações da família, como imóveis, aplicações e quotas de outras empresas. Ela organiza a gestão do patrimônio e permite planejar a sucessão em vida.'],
  ['Holding familiar serve para qualquer família?', 'Não. Ela costuma compensar para famílias com vários imóveis, renda de aluguéis ou participações em empresas. Para patrimônios menores, testamento e inventário em cartório podem ser mais simples e baratos.'],
  ['A Mana Vivaro substitui advogado e contador?', 'Não. Cuidamos da administração e da organização do patrimônio e trabalhamos junto com o advogado e o contador da família, que respondem pelos atos jurídicos e contábeis.'],
  ['Como começar?', 'Envie uma mensagem pela página de contato contando, em linhas gerais, o patrimônio e os objetivos da família. Retornamos para marcar uma conversa inicial.'],
];

// ---------- Páginas ----------
const paginas = {};

// Início
paginas['index.html'] = pagina({
  caminho: '/',
  titulo: 'Mana Vivaro | Administração de holding familiar e assessoria empresarial',
  descricao: 'Administração de holding familiar, planejamento sucessório, gestão de imóveis e assessoria empresarial para famílias em São Paulo.',
  preload: '<link rel="preload" as="image" href="/assets/img/hero.jpg">\n  ',
  jsonld: [ORG, {
    '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE + '/#site', url: SITE + '/', name: NOME, inLanguage: 'pt-BR', publisher: { '@id': SITE + '/#organizacao' }
  }, {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
  }],
  conteudo: `
    <section class="hero">
      <img src="/assets/img/hero.jpg" alt="" width="1536" height="1024" fetchpriority="high">
      <div class="container">
        <span class="sobretitulo">Holding familiar</span>
        <h1>O patrimônio da sua família, <span class="destaque-ouro">organizado para gerações</span></h1>
        <p>A Mana Vivaro é uma empresa familiar de administração de holdings, imóveis e empresas. Cuidamos da gestão para que a sua família decida com clareza e transmita o que construiu.</p>
        <div class="acoes">
          <a class="botao botao-ouro" href="/contato/">Agendar uma conversa</a>
          <a class="botao botao-claro" href="/servicos/">Conhecer os serviços</a>
        </div>
        <ul class="pontos"><li>Gestão de patrimônio</li><li>Sucessão planejada</li><li>Governança familiar</li></ul>
      </div>
    </section>

    <section class="secao" aria-labelledby="servicos-titulo">
      <div class="container">
        <div class="secao-cabeca">
          <span class="sobretitulo">O que fazemos</span>
          <h2 id="servicos-titulo">Soluções para você e para o seu negócio</h2>
          <p>Da administração do dia a dia ao planejamento de longo prazo, apoiamos a família em cada etapa da gestão do patrimônio.</p>
        </div>
        <div class="grade grade-3">
          ${SERVICOS.slice(0, 3).map(s => servicoHTML(s, true)).join('\n          ')}
        </div>
        <p style="margin-top:28px"><a class="botao botao-contorno" href="/servicos/">Ver todos os serviços</a></p>
      </div>
    </section>

    <section class="secao secao-alt" aria-labelledby="holding-titulo">
      <div class="container dupla">
        <img src="/assets/img/protecao.jpg" alt="Mão segurando guarda-chuva sobre recortes de papel de família, casa e carro (imagem ilustrativa)" width="1200" height="800" loading="lazy">
        <div>
          <span class="sobretitulo">Por que uma holding</span>
          <h2 id="holding-titulo">Proteção, continuidade e decisões em família</h2>
          <p>Concentrar imóveis, aplicações e participações em uma holding permite organizar a gestão e resolver a sucessão ainda em vida, com as regras que a família escolher.</p>
          <ul class="lista-check">
            <li>Sucessão planejada, com menos risco de inventário longo e conflitos</li>
            <li>Gestão unificada do patrimônio, com prestação de contas</li>
            <li>Regras claras para entrada e saída de sócios</li>
            <li>Possível eficiência tributária, analisada caso a caso</li>
          </ul>
          <a class="botao botao-primario" href="/blog/o-que-e-holding-familiar/">Entenda a holding familiar</a>
        </div>
      </div>
    </section>

    <section class="secao faixa" aria-labelledby="como-titulo">
      <div class="container">
        <div class="secao-cabeca">
          <span class="sobretitulo">Como trabalhamos</span>
          <h2 id="como-titulo">Do primeiro diagnóstico à gestão contínua</h2>
          <p>Um processo simples e transparente, construído junto com a família.</p>
        </div>
        <div class="grade grade-4">
          <div class="etapa"><span class="num destaque-ouro">01</span><h3>Escuta</h3><p>Entendemos a família, o patrimônio e o que cada um espera do futuro.</p></div>
          <div class="etapa"><span class="num destaque-ouro">02</span><h3>Diagnóstico</h3><p>Mapeamos bens, rendimentos, riscos e custos, com números na mesa.</p></div>
          <div class="etapa"><span class="num destaque-ouro">03</span><h3>Estrutura</h3><p>Com advogado e contador, desenhamos a holding e as regras de governança.</p></div>
          <div class="etapa"><span class="num destaque-ouro">04</span><h3>Gestão</h3><p>Administramos o dia a dia e prestamos contas aos sócios com regularidade.</p></div>
        </div>
      </div>
    </section>

    <section class="secao" aria-labelledby="valores-titulo">
      <div class="container">
        <div class="secao-cabeca">
          <span class="sobretitulo">Nossos valores</span>
          <h2 id="valores-titulo">Compromisso e excelência</h2>
        </div>
        <div class="grade grade-3">
          <div class="valor"><h3>Transparência</h3><p>Trabalhamos com honestidade e integridade sempre, com informação clara para todos os sócios.</p></div>
          <div class="valor"><h3>Dedicação</h3><p>Nosso compromisso é com a continuidade do patrimônio e o sucesso do seu negócio.</p></div>
          <div class="valor"><h3>Inovação</h3><p>Buscamos soluções criativas e eficazes, com ferramentas digitais para acompanhar tudo de perto.</p></div>
        </div>
      </div>
    </section>

    <section class="secao secao-alt" aria-labelledby="blog-titulo">
      <div class="container">
        <div class="secao-cabeca">
          <span class="sobretitulo">Blog</span>
          <h2 id="blog-titulo">Conteúdo para famílias empresárias</h2>
          <p>Guias práticos sobre holding familiar, sucessão, governança e organização do patrimônio.</p>
        </div>
        <div class="grade grade-3">
      ${ordenadas.slice(0, 3).map(cartaoMateria).join('\n      ')}
        </div>
        <p style="margin-top:28px"><a class="botao botao-contorno" href="/blog/">Ver todas as matérias</a></p>
      </div>
    </section>

    <section class="secao faq" aria-labelledby="faq-titulo">
      <div class="container" style="max-width:820px">
        <div class="secao-cabeca">
          <span class="sobretitulo">Dúvidas frequentes</span>
          <h2 id="faq-titulo">Perguntas frequentes</h2>
        </div>
        ${FAQ.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n        ')}
      </div>
    </section>

    <section class="secao" style="padding-top:0">
      <div class="container">
        <div class="chamada">
          <div>
            <h2>Vamos conversar sobre o futuro do patrimônio da sua família?</h2>
            <p>Conte, em linhas gerais, a sua situação. Retornamos para marcar uma conversa inicial.</p>
          </div>
          <a class="botao botao-ouro" href="/contato/">Fale conosco</a>
        </div>
      </div>
    </section>`
});

// Serviços
{
  const t = trilha([['/', 'Início'], ['/servicos/', 'Serviços']]);
  paginas['servicos/index.html'] = pagina({
    caminho: '/servicos/',
    titulo: 'Serviços: holding familiar, sucessão, imóveis e assessoria',
    descricao: 'Administração de holding familiar, planejamento sucessório, administração de imóveis, assessoria empresarial, planejamento estratégico e governança familiar.',
    jsonld: [t.ld, {
      '@context': 'https://schema.org', '@type': 'ItemList', name: 'Serviços da Mana Vivaro',
      itemListElement: SERVICOS.map(([, nome, texto], i) => ({
        '@type': 'ListItem', position: i + 1,
        item: { '@type': 'Service', name: nome, description: texto, provider: { '@id': SITE + '/#organizacao' } }
      }))
    }],
    conteudo: `
    <section class="cabecalho-pagina">
      <div class="container">
        ${t.html}
        <h1>Serviços</h1>
        <p>Administração, planejamento e governança para que o patrimônio da família seja bem cuidado hoje e chegue organizado à próxima geração.</p>
      </div>
    </section>
    <section class="secao">
      <div class="container">
        <div class="grade grade-3">
          ${SERVICOS.map(s => servicoHTML(s, true)).join('\n          ')}
        </div>
        <p class="legenda" style="margin-top:20px">Atos jurídicos e contábeis são realizados pelo advogado e pelo contador da família, com quem trabalhamos em conjunto.</p>
      </div>
    </section>
    <section class="secao secao-alt">
      <div class="container">
        <div class="chamada">
          <div>
            <h2>Não sabe por onde começar?</h2>
            <p>Uma conversa inicial ajuda a entender qual caminho faz sentido para a sua família.</p>
          </div>
          <a class="botao botao-ouro" href="/contato/?assunto=Holding familiar">Agendar uma conversa</a>
        </div>
      </div>
    </section>`
  });
}

// Sobre
{
  const t = trilha([['/', 'Início'], ['/sobre/', 'Sobre']]);
  paginas['sobre/index.html'] = pagina({
    caminho: '/sobre/',
    titulo: 'Sobre a Mana Vivaro',
    descricao: 'Conheça a Mana Vivaro, empresa familiar de administração de holdings, imóveis e empresas, com foco em transparência e continuidade do patrimônio.',
    jsonld: [t.ld, ORG],
    conteudo: `
    <section class="cabecalho-pagina">
      <div class="container">
        ${t.html}
        <h1>Sobre a Mana Vivaro</h1>
        <p>Uma empresa familiar que entende, por experiência própria, o que é cuidar de um patrimônio construído em família.</p>
      </div>
    </section>
    <section class="secao">
      <div class="container dupla">
        <div>
          <span class="sobretitulo">Quem somos</span>
          <h2>Assessoria e administração com olhar de família</h2>
          <p>A Mana Vivaro é uma empresa familiar dedicada a oferecer soluções em <strong>administração de holding</strong>, assessoria empresarial e administração de imóveis.</p>
          <p>Nossa equipe se compromete a ajudar cada cliente a alcançar seus objetivos com eficiência e transparência: organizar o patrimônio, preparar a sucessão e criar regras que mantenham a família unida em torno das decisões.</p>
          <a class="botao botao-primario" href="/contato/">Fale conosco</a>
        </div>
        <img src="/assets/img/familia-card.jpg" alt="Família de três gerações reunida em escritório corporativo (imagem ilustrativa)" width="1200" height="800" loading="lazy">
      </div>
    </section>
    <section class="secao secao-alt">
      <div class="container">
        <div class="secao-cabeca"><span class="sobretitulo">No que acreditamos</span><h2>Nossos valores</h2></div>
        <div class="grade grade-3">
          <div class="servico"><div class="icone">${icones.escudo}</div><h3>Transparência</h3><p>Trabalhamos com honestidade e integridade sempre. Todos os sócios recebem a mesma informação.</p></div>
          <div class="servico"><div class="icone">${icones.relogio}</div><h3>Dedicação</h3><p>Nosso compromisso é com o sucesso do seu negócio e a continuidade do patrimônio ao longo das gerações.</p></div>
          <div class="servico"><div class="icone">${icones.grafico}</div><h3>Inovação</h3><p>Buscamos sempre soluções criativas e eficazes, com processos simples e ferramentas digitais.</p></div>
        </div>
      </div>
    </section>`
  });
}

// Contato
{
  const t = trilha([['/', 'Início'], ['/contato/', 'Contato']]);
  paginas['contato/index.html'] = pagina({
    caminho: '/contato/',
    titulo: 'Contato',
    descricao: 'Fale com a Mana Vivaro sobre holding familiar, planejamento sucessório, administração de imóveis ou assessoria empresarial. E-mail: contato@manavivaro.com.br.',
    jsonld: [t.ld, { '@context': 'https://schema.org', '@type': 'ContactPage', url: SITE + '/contato/', about: { '@id': SITE + '/#organizacao' } }],
    conteudo: `
    <section class="cabecalho-pagina">
      <div class="container">
        ${t.html}
        <h1>Contato</h1>
        <p>Conte, em linhas gerais, o patrimônio e os objetivos da sua família. Retornamos para marcar uma conversa.</p>
      </div>
    </section>
    <section class="secao">
      <div class="container grade grade-2">
        <form class="formulario" id="form-contato" aria-label="Formulário de contato">
          <label>Nome<input name="nome" required autocomplete="name"></label>
          <label>E-mail<input name="email" type="email" required autocomplete="email"></label>
          <label>Telefone <small>(opcional)</small><input name="telefone" type="tel" autocomplete="tel"></label>
          <label>Assunto
            <select name="assunto">
              <option>Holding familiar</option>
              <option>Planejamento sucessório</option>
              <option>Administração de imóveis</option>
              <option>Assessoria empresarial</option>
              <option>Outro assunto</option>
            </select>
          </label>
          <label>Mensagem<textarea name="mensagem" required></textarea></label>
          <button class="botao botao-primario" type="submit">Enviar mensagem</button>
          <small>Ao enviar, o seu programa de e-mail abre com a mensagem pronta. Seus dados são usados apenas para responder ao contato (veja a <a href="/privacidade/">política de privacidade</a>).</small>
        </form>
        <div class="contato-info">
          <div class="item"><div class="icone">${icones.email}</div><div><h3>E-mail</h3><p><a href="mailto:${EMAIL}">${EMAIL}</a></p></div></div>
          <div class="item"><div class="icone">${icones.mapa}</div><div><h3>Onde estamos</h3><p>São Paulo – SP<br>Atendimento presencial com hora marcada e reuniões on-line.</p></div></div>
          <div class="item"><div class="icone">${icones.relogio}</div><div><h3>Retorno</h3><p>Respondemos as mensagens em dias úteis.</p></div></div>
        </div>
      </div>
    </section>`
  });
}

// Blog (listagem)
{
  const t = trilha([['/', 'Início'], ['/blog/', 'Blog']]);
  const temas = [...new Set(ordenadas.map(m => m.tema))];
  paginas['blog/index.html'] = pagina({
    caminho: '/blog/',
    titulo: 'Blog: holding familiar, sucessão e governança',
    descricao: 'Guias práticos para famílias empresárias: holding familiar, planejamento sucessório, cláusulas de proteção, tributação de aluguéis e governança.',
    jsonld: [t.ld, {
      '@context': 'https://schema.org', '@type': 'Blog', name: 'Blog Mana Vivaro', url: SITE + '/blog/', inLanguage: 'pt-BR',
      publisher: { '@id': SITE + '/#organizacao' },
      blogPost: ordenadas.map(m => ({ '@type': 'BlogPosting', headline: m.titulo, url: `${SITE}/blog/${m.slug}/`, datePublished: m.data }))
    }],
    conteudo: `
    <section class="cabecalho-pagina">
      <div class="container">
        ${t.html}
        <h1>Blog</h1>
        <p>Conteúdo prático sobre holding familiar, sucessão, governança e organização do patrimônio.</p>
      </div>
    </section>
    <section class="secao">
      <div class="container">
        <div class="filtros" role="group" aria-label="Filtrar por tema">
          <button data-filtro="todos" aria-pressed="true">Todos</button>
          ${temas.map(tm => `<button data-filtro="${esc(tm)}" aria-pressed="false">${esc(tm)}</button>`).join('\n          ')}
        </div>
        <div class="grade grade-3">
      ${ordenadas.map(cartaoMateria).join('\n      ')}
        </div>
      </div>
    </section>`
  });
}

// Matérias
for (const m of ordenadas) {
  const t = trilha([['/', 'Início'], ['/blog/', 'Blog'], [`/blog/${m.slug}/`, m.titulo]]);
  const relacionadas = [...ordenadas.filter(x => x !== m && x.tema === m.tema), ...ordenadas.filter(x => x !== m && x.tema !== m.tema)].slice(0, 3);
  paginas[`blog/${m.slug}/index.html`] = pagina({
    caminho: `/blog/${m.slug}/`,
    titulo: m.titulo,
    descricao: m.descricao,
    tipo: 'article',
    imagem: m.imagem || 'og.jpg',
    jsonld: [t.ld, {
      '@context': 'https://schema.org', '@type': 'BlogPosting',
      headline: m.titulo, description: m.descricao, inLanguage: 'pt-BR',
      image: `${SITE}/assets/img/${m.imagem || 'og.jpg'}`,
      datePublished: m.data, dateModified: m.data,
      mainEntityOfPage: `${SITE}/blog/${m.slug}/`,
      author: { '@type': 'Organization', name: NOME, url: SITE + '/' },
      publisher: { '@id': SITE + '/#organizacao' },
      articleSection: m.tema
    }],
    conteudo: `
    <article class="artigo">
      ${t.html}
      <span class="tag">${esc(m.tema)}</span>
      <h1 style="margin-top:12px">${esc(m.titulo)}</h1>
      <p class="meta">Publicado em <time datetime="${m.data}">${dataBR(m.data)}</time> · por ${NOME}</p>
      ${m.imagem ? `<img class="capa" src="/assets/img/${m.imagem}" alt="${esc(m.imagemAlt)}" width="1200" height="800">` : placa(m, ' capa')}
      ${m.corpo.trim()}
      <div class="chamada" style="margin-top:40px;padding:32px">
        <div><h2 style="font-size:1.4rem">Quer organizar o patrimônio da sua família?</h2><p>Converse com a Mana Vivaro sobre holding, sucessão e governança.</p></div>
        <a class="botao botao-ouro" href="/contato/">Fale conosco</a>
      </div>
      <section class="leia-tambem" aria-labelledby="leia-tambem">
        <h2 id="leia-tambem" style="margin-top:0">Leia também</h2>
        <div class="grade grade-3" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
      ${relacionadas.map(cartaoMateria).join('\n      ')}
        </div>
      </section>
    </article>`
  });
}

// Privacidade
{
  const t = trilha([['/', 'Início'], ['/privacidade/', 'Política de privacidade']]);
  paginas['privacidade/index.html'] = pagina({
    caminho: '/privacidade/',
    titulo: 'Política de privacidade',
    descricao: 'Como a Mana Vivaro trata os dados pessoais enviados pelo site, em conformidade com a Lei Geral de Proteção de Dados (LGPD).',
    jsonld: [t.ld],
    conteudo: `
    <article class="artigo">
      ${t.html}
      <h1>Política de privacidade</h1>
      <p class="meta">Atualizada em ${dataBR(HOJE)}</p>
      <p>Esta política explica como a Mana Vivaro trata os dados pessoais de quem visita o site manavivaro.com.br, de acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018).</p>
      <h2>Quais dados coletamos</h2>
      <p>O site não usa cookies de rastreamento nem ferramentas de publicidade. O formulário de contato não grava dados em servidor: ele apenas abre o seu programa de e-mail com a mensagem pronta. Recebemos somente o que você decidir enviar por e-mail (nome, e-mail, telefone e mensagem).</p>
      <h2>Para que usamos</h2>
      <p>Usamos os dados apenas para responder ao seu contato e, se houver contratação, para prestar os serviços combinados.</p>
      <h2>Compartilhamento</h2>
      <p>Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing. Eles podem ser compartilhados apenas quando necessário para o serviço (por exemplo, com o advogado ou o contador indicados pela família) ou por obrigação legal.</p>
      <h2>Seus direitos</h2>
      <p>Você pode pedir a qualquer momento acesso, correção ou exclusão dos seus dados, escrevendo para <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
      <h2>Fontes externas</h2>
      <p>As fontes tipográficas do site são carregadas do Google Fonts, que pode registrar o endereço IP do visitante conforme a política do Google.</p>
    </article>`
  });
}

// 404
paginas['404.html'] = pagina({
  caminho: '/404.html',
  titulo: 'Página não encontrada',
  descricao: 'A página que você procurou não existe ou mudou de endereço.',
  semIndex: true,
  conteudo: `
    <section class="secao">
      <div class="container" style="max-width:640px;text-align:center">
        <h1>Página não encontrada</h1>
        <p>O endereço pode ter mudado. Que tal começar por aqui?</p>
        <p style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:24px">
          <a class="botao botao-primario" href="/">Página inicial</a>
          <a class="botao botao-contorno" href="/servicos/">Serviços</a>
          <a class="botao botao-contorno" href="/blog/">Blog</a>
        </p>
      </div>
    </section>`
});

// Redirecionamentos dos endereços do site antigo da UOL
function redirecionar(destino) {
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Redirecionando…</title><link rel="canonical" href="${SITE}${destino}"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${destino}"></head><body><p><a href="${destino}">Clique aqui se não for redirecionado.</a></p></body></html>\n`;
}
paginas['privacy/index.html'] = redirecionar('/privacidade/');
paginas['legal-notice/index.html'] = redirecionar('/privacidade/');
paginas['blog-single-page-layout/index.html'] = redirecionar('/blog/');

// ---------- Gravação ----------
for (const [arq, html] of Object.entries(paginas)) {
  const destino = path.join(RAIZ, arq);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, html);
}

const urls = [
  ['/', '1.0'], ['/servicos/', '0.9'], ['/blog/', '0.8'], ['/sobre/', '0.6'], ['/contato/', '0.6'], ['/privacidade/', '0.2'],
  ...ordenadas.map(m => [`/blog/${m.slug}/`, '0.7', m.data])
];
fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(([u, p, d]) => `  <url><loc>${SITE}${u}</loc><lastmod>${d || HOJE}</lastmod><priority>${p}</priority></url>`).join('\n') +
  `\n</urlset>\n`);
fs.writeFileSync(path.join(RAIZ, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /gerador/\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`${Object.keys(paginas).length} páginas geradas (css v=${V_CSS}, js v=${V_JS}).`);

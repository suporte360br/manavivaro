// Conteúdo do site Mana Vivaro: matérias do blog.
// Depois de editar, rode: node gerador/gerar.js
// Matérias sem "imagem" usam a placa gráfica da marca no cartão.
// "atualizado": data da última revisão do texto (vira dateModified e "Atualizado em").
// "tituloSEO": título mais curto para a aba e o Google, quando o título passa de ~60 caracteres.
// "fontes": lista [texto, link] exibida no fim da matéria. Links conferidos em 31/10 e 11/11/2026.

const LEI = {
  cc: ['Código Civil (Lei 10.406/2002)', 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'],
  cf: ['Constituição Federal, art. 156, § 2º, I (ITBI)', 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'],
  ec132: ['Emenda Constitucional 132/2023 (reforma tributária)', 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm'],
  lc214: ['Lei Complementar 214/2025 (IBS e CBS)', 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm'],
  l15270: ['Lei 15.270/2025 (IR sobre lucros e dividendos)', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15270.htm'],
  l9249: ['Lei 9.249/1995, art. 23 (integralização de capital)', 'https://www.planalto.gov.br/ccivil_03/leis/l9249.htm'],
  stf796: ['STF, Tema 796 de repercussão geral (ITBI)', 'https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=796'],
  ctn: ['Código Tributário Nacional, arts. 36 e 37 (ITBI na integralização)', 'https://www.planalto.gov.br/ccivil_03/leis/l5172compilado.htm'],
  lc123: ['Lei Complementar 123/2006, art. 3º, § 4º (Simples Nacional)', 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm'],
  lc224: ['Lei Complementar 224/2025 (presunção do lucro presumido)', 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp224.htm'],
  rf2026: ['Receita Federal: tabela do IR de 2026', 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026'],
  cpc: ['Código de Processo Civil (Lei 13.105/2015), arts. 610 e 611', 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm'],
  itcmdsp: ['Lei paulista 10.705/2000 (ITCMD em São Paulo)', 'https://www.al.sp.gov.br/repositorio/legislacao/lei/2000/lei-10705-28.12.2000.html'],
  itbisp: ['Prefeitura de São Paulo: cálculo do ITBI', 'https://prefeitura.sp.gov.br/web/fazenda/w/servicos/itbi/2513'],
  cnj571: ['Resolução CNJ 571/2024 (inventário em cartório)', 'https://atos.cnj.jus.br/files/original2309432024083066d251371bc21.pdf'],
};
const link = (chave, texto) => `<a href="${LEI[chave][1]}" rel="noopener">${texto}</a>`;

const AVISO =`<p class="aviso">Este conteúdo é informativo e não substitui a análise de um advogado e de um contador para o caso concreto da sua família. Regras tributárias mudam com frequência: confira a legislação em vigor antes de decidir.</p>`;

exports.materias = [
  {
    slug: 'quanto-custa-holding-familiar',
    imagem: 'custos-holding.jpg',
    imagemAlt: 'Ilustração de calculadora, pilhas de moedas e uma casa, representando os custos de uma holding familiar',
    titulo: 'Quanto custa abrir e manter uma holding familiar',
    tema: 'Holding familiar',
    data: '2026-11-11',
    fontes: [LEI.itbisp, LEI.cf, LEI.ctn, LEI.stf796, LEI.itcmdsp, LEI.ec132, LEI.l9249],
    descricao: 'Os custos de uma holding familiar: abertura, ITBI na transferência dos imóveis, ITCMD na doação das quotas, cartórios, contabilidade e impostos do dia a dia, com exemplo em São Paulo.',
    corpo: `
<p>Antes de decidir por uma <a href="/blog/o-que-e-holding-familiar/">holding familiar</a>, a família precisa saber quanto ela custa. Os custos se dividem em três grupos: os de <strong>entrada</strong> (montar a empresa e transferir os bens), os da <strong>sucessão</strong> (doar as quotas) e os de <strong>manutenção</strong> (manter a empresa funcionando todos os anos).</p>

<nav class="sumario" aria-label="Nesta matéria"><strong>Nesta matéria</strong><ol>
<li><a href="#entrada">Custos de entrada</a></li>
<li><a href="#doacao">Custos da doação das quotas</a></li>
<li><a href="#manutencao">Custos de manutenção</a></li>
<li><a href="#exemplo">Exemplo em São Paulo</a></li>
<li><a href="#compensa">Quando os custos compensam</a></li>
</ol></nav>

<h2 id="entrada">Custos de entrada</h2>
<ul>
<li><strong>Honorários profissionais:</strong> advogado para o desenho jurídico, o contrato social e o acordo de sócios, e contador para a abertura e o regime tributário. Os valores variam muito conforme o tamanho do patrimônio e a complexidade da família; peça orçamento detalhado.</li>
<li><strong>Registro da empresa:</strong> taxas da Junta Comercial e inscrições nos órgãos públicos. São custos baixos perto dos demais.</li>
<li><strong>ITBI na transferência dos imóveis:</strong> a Constituição prevê imunidade quando o imóvel integraliza o capital (${link('cf', 'art. 156, § 2º, I')}), mas ela não vale se a atividade preponderante da holding for comprar, vender ou alugar imóveis (${link('ctn', 'CTN, art. 37')}), e não alcança o valor que exceder o capital integralizado (${link('stf796', 'STF, Tema 796')}). Holdings que vivem de aluguel costumam pagar o imposto. Em São Paulo, a alíquota é de 3% sobre o maior valor entre o da transação e o valor venal de referência (${link('itbisp', 'Prefeitura de São Paulo')}).</li>
<li><strong>Escritura e registro de imóveis:</strong> emolumentos de cartório para registrar cada imóvel em nome da holding, calculados por tabelas estaduais conforme o valor do bem.</li>
<li><strong>Imposto de Renda:</strong> transferindo os imóveis pelo valor da declaração, não há ganho de capital nesse momento (${link('l9249', 'Lei 9.249/1995, art. 23')}).</li>
</ul>

<h2 id="doacao">Custos da doação das quotas</h2>
<p>Quando os pais doam as quotas aos filhos, incide o <strong>ITCMD</strong>, imposto estadual sobre doações e heranças. Em São Paulo, a alíquota é de 4% (${link('itcmdsp', 'Lei 10.705/2000, art. 16')}). A ${link('ec132', 'Emenda Constitucional 132/2023')} obriga os estados a adotar alíquotas progressivas, e São Paulo ainda discute a sua nova lei; por isso, a alíquota pode mudar.</p>
<p>A base de cálculo da doação de quotas costuma gerar discussão com o fisco estadual: o valor das quotas pode ser apurado pelo patrimônio da holding, e alguns estados reavaliam os imóveis a valor de mercado. Esse ponto precisa entrar na simulação feita pelo contador. Há também os custos da escritura de doação, com as <a href="/blog/clausulas-de-protecao-na-doacao-de-quotas/">cláusulas de proteção</a>.</p>
<p>Lembre que o ITCMD também seria pago no inventário. A holding não elimina o imposto; ela permite escolher o momento e evita os custos e a demora de um <a href="/blog/inventario-em-cartorio/">inventário</a>.</p>

<h2 id="manutencao">Custos de manutenção</h2>
<ul>
<li><strong>Contabilidade:</strong> mensalidade do contador, escrituração, declarações e obrigações acessórias. É o principal custo fixo.</li>
<li><strong>Impostos sobre a receita:</strong> se a holding recebe aluguéis, paga IRPJ, CSLL, PIS e Cofins. No lucro presumido, a carga federal sobre aluguel fica em torno de 11,3% da receita para holdings de pequeno e médio porte (veja a <a href="/blog/aluguel-pessoa-fisica-ou-holding/">simulação de impostos sobre aluguel</a>). A partir de 2027 entram o IBS e a CBS.</li>
<li><strong>Taxas e certificados:</strong> certificado digital, taxas municipais e eventuais alterações do contrato social na Junta Comercial.</li>
<li><strong>Administração:</strong> se a família contratar quem cuide da rotina da holding, como a <a href="/servicos/administracao-de-holding-familiar/">administração de holding familiar</a> da Mana Vivaro.</li>
</ul>

<h2 id="exemplo">Exemplo em São Paulo</h2>
<p>Uma família com dois imóveis alugados na cidade de São Paulo, com valor de referência somado de <strong>R$ 2 milhões</strong>, quer transferi-los para uma holding e doar as quotas aos filhos. Supondo que a holding não tenha direito à imunidade do ITBI e que a base do ITCMD seja o mesmo valor dos imóveis:</p>
<div class="rolagem"><table class="tabela">
<thead><tr><th>Item</th><th>Cálculo</th><th>Valor estimado</th></tr></thead>
<tbody>
<tr><td>ITBI na transferência</td><td>3% × R$ 2.000.000</td><td>R$ 60.000</td></tr>
<tr><td>ITCMD na doação das quotas</td><td>4% × R$ 2.000.000</td><td>R$ 80.000</td></tr>
<tr><td>Honorários, Junta Comercial e cartórios</td><td>Conforme orçamentos</td><td>A orçar</td></tr>
<tr><td>Contabilidade anual</td><td>Conforme orçamento</td><td>A orçar</td></tr>
</tbody></table></div>
<p>Sem a holding, o ITCMD de 4% seria pago do mesmo jeito no inventário, além das custas, dos honorários e da demora. O ITBI, por outro lado, é um custo que só existe por causa da holding. A conta que importa é: o que a família economiza em tempo, conflitos, inventário e impostos sobre o aluguel ao longo dos anos é maior que o ITBI e a manutenção?</p>
<p class="legenda">Exemplo simplificado, com alíquotas vigentes em São Paulo em novembro de 2026. O ITBI e o ITCMD efetivos dependem da base de cálculo adotada pela prefeitura e pelo estado em cada caso.</p>

<h2 id="compensa">Quando os custos compensam</h2>
<ul>
<li>Patrimônio com vários imóveis ou participações em empresas, em que um inventário seria longo e caro.</li>
<li>Renda de aluguéis alta o suficiente para a diferença de imposto pagar a contabilidade.</li>
<li>Famílias que querem regras de <a href="/blog/governanca-na-empresa-familiar/">governança</a> e proteção que um testamento não oferece.</li>
</ul>
<p>Para patrimônios menores, especialmente quando o principal bem é o imóvel em que a família mora, testamento e inventário em cartório costumam sair mais baratos. O <a href="/servicos/planejamento-sucessorio/">planejamento sucessório</a> serve justamente para comparar os caminhos com números.</p>
${AVISO}`
  },
  {
    slug: 'inventario-em-cartorio',
    imagem: 'inventario-cartorio.jpg',
    imagemAlt: 'Ilustração de escritura com selo, caneta, chave e casa, representando o inventário em cartório',
    titulo: 'Inventário em cartório: quando é possível e como funciona',
    tituloSEO: 'Inventário em cartório: requisitos e passo a passo',
    tema: 'Sucessão',
    data: '2026-11-11',
    fontes: [LEI.cpc, LEI.cnj571, LEI.itcmdsp],
    descricao: 'Inventário extrajudicial em cartório: requisitos, casos com menores ou testamento após a Resolução CNJ 571/2024, prazos, multa do ITCMD em São Paulo e passo a passo.',
    corpo: `
<p>Quando alguém morre, os bens só passam aos herdeiros depois do inventário. Ele pode ser feito na Justiça ou, em muitos casos, <strong>em cartório</strong>, por escritura pública, o que costuma ser bem mais rápido. Desde 2024, uma resolução do Conselho Nacional de Justiça ampliou os casos em que o cartório pode ser usado.</p>

<nav class="sumario" aria-label="Nesta matéria"><strong>Nesta matéria</strong><ol>
<li><a href="#requisitos">Quando o inventário pode ser feito em cartório</a></li>
<li><a href="#menores">Herdeiros menores e testamento</a></li>
<li><a href="#prazos">Prazos e multa</a></li>
<li><a href="#passos">Passo a passo</a></li>
<li><a href="#venda">Vender um bem para pagar as despesas</a></li>
</ol></nav>

<h2 id="requisitos">Quando o inventário pode ser feito em cartório</h2>
<p>Pelo ${link('cpc', 'Código de Processo Civil (art. 610)')}, o inventário pode ser feito por escritura pública quando:</p>
<ul>
<li>todos os herdeiros são <strong>capazes e estão de acordo</strong> com a partilha;</li>
<li>todos estão <strong>assistidos por advogado</strong> ou defensor público, que assina a escritura.</li>
</ul>
<p>A escolha do cartório de notas é livre: não precisa ser na cidade em que a pessoa morava nem onde estão os bens (${link('cnj571', 'Resolução CNJ 35/2007, art. 1º, com a redação da Resolução 571/2024')}). A escritura não depende de homologação do juiz e serve para transferir imóveis, veículos, quotas de empresas e levantar valores em bancos.</p>

<h2 id="menores">Herdeiros menores e testamento</h2>
<p>O Código de Processo Civil manda para a Justiça os inventários com testamento ou com herdeiro incapaz. A ${link('cnj571', 'Resolução CNJ 571/2024')} passou a permitir o cartório também nesses casos, com condições:</p>
<ul>
<li><strong>Herdeiro menor ou incapaz (art. 12-A):</strong> a parte dele precisa ser paga em fração ideal de cada um dos bens, nenhum ato pode dispor dos bens dele e o Ministério Público precisa se manifestar a favor. Se o Ministério Público ou outro interessado impugnar, o caso vai para o juiz.</li>
<li><strong>Testamento (art. 12-B):</strong> o testamento precisa passar antes pela Justiça, numa ação de abertura e cumprimento, com autorização expressa do juiz para o inventário em cartório. Todos os interessados precisam ser capazes e estar de acordo (ou cumprir as regras do art. 12-A) e representados por advogado. Se o testamento reconhecer um filho ou tiver outra declaração irrevogável, o inventário precisa ser judicial.</li>
</ul>
<p>Se houver um único herdeiro, não há partilha: a escritura é de inventário e adjudicação dos bens.</p>

<h2 id="prazos">Prazos e multa</h2>
<p>O inventário deve ser aberto em até <strong>2 meses</strong> da morte (${link('cpc', 'CPC, art. 611')}). Os estados costumam punir o atraso no ITCMD. Em São Paulo, se o inventário não for requerido em 60 dias, o imposto tem multa de 10%; passados 180 dias, de 20% (${link('itcmdsp', 'Lei 10.705/2000, art. 21')}). A alíquota do ITCMD paulista é de 4%.</p>

<h2 id="passos">Passo a passo</h2>
<ol>
<li><strong>Contratar um advogado</strong>, que pode representar todos os herdeiros se houver acordo.</li>
<li><strong>Reunir os documentos:</strong> certidão de óbito, documentos dos herdeiros e do cônjuge ou companheiro, certidões dos bens (matrículas dos imóveis, documentos de veículos, extratos, contrato social das empresas) e certidões negativas de débitos.</li>
<li><strong>Escolher o inventariante</strong>, que representa o espólio e pode buscar informações bancárias e fiscais necessárias.</li>
<li><strong>Calcular e pagar o ITCMD</strong>, pela declaração no site da Fazenda do estado.</li>
<li><strong>Assinar a escritura</strong> de inventário e partilha no cartório de notas escolhido.</li>
<li><strong>Registrar a transferência</strong> de cada bem: cartório de registro de imóveis, Detran, Junta Comercial, bancos.</li>
</ol>

<h2 id="venda">Vender um bem para pagar as despesas</h2>
<p>Uma novidade da Resolução 571/2024 (art. 11-A) é permitir que a escritura autorize o inventariante a <strong>vender um bem do espólio sem autorização judicial</strong> para pagar o ITCMD, os honorários e os emolumentos. É preciso discriminar as despesas, vincular o dinheiro da venda a elas, não haver bloqueio de bens dos herdeiros e o inventariante dar garantia de que vai usar o valor para isso. As despesas devem ser pagas em até um ano da venda.</p>

<h2>Como evitar o inventário</h2>
<p>O inventário em cartório é mais rápido, mas continua tendo custos e prazos, e exige acordo entre todos. Famílias com vários imóveis ou empresas podem resolver a sucessão em vida com uma <a href="/blog/o-que-e-holding-familiar/">holding familiar</a> e doação das quotas. Compare os caminhos em <a href="/blog/holding-x-inventario-x-testamento/">holding, inventário ou testamento</a>.</p>
${AVISO}`
  },
  {
    slug: 'contrato-social-da-holding-familiar',
    imagem: 'holding.jpg',
    imagemAlt: 'Esquema de holding reunindo casas, apartamento, lotes, fazenda, carro e quotas de empresa (imagem ilustrativa)',
    titulo: 'Contrato social da holding familiar: o que ele deve contemplar',
    tituloSEO: 'Contrato da holding familiar: cláusulas essenciais',
    tema: 'Holding familiar',
    data: '2026-11-10',
    atualizado: '2026-11-11',
    fontes: [LEI.cc, LEI.cf, LEI.ctn, LEI.stf796, LEI.l9249, LEI.lc123, LEI.itbisp],
    descricao: 'Checklist do contrato social da holding familiar: objeto, capital, administração, quóruns, cessão de quotas, sucessão, doação com cláusulas, ITBI e o passo a passo da implantação.',
    corpo: `
<p>A <a href="/blog/o-que-e-holding-familiar/">holding familiar</a> só cumpre o que promete se o <strong>contrato social</strong> for bem escrito. É ele que define quem manda, como se decide, o que acontece quando alguém morre, se divorcia ou quer sair. Um contrato genérico, copiado de modelo, costuma ser a origem dos conflitos que a holding deveria evitar.</p>

<nav class="sumario" aria-label="Nesta matéria"><strong>Nesta matéria</strong><ol>
<li><a href="#antes">Antes do contrato: o protocolo da família</a></li>
<li><a href="#clausulas">As cláusulas que não podem faltar</a></li>
<li><a href="#doacao">A doação das quotas e suas cláusulas</a></li>
<li><a href="#itbi">ITBI: o que esperar na integralização dos imóveis</a></li>
<li><a href="#cuidados">Cuidados que costumam ser esquecidos</a></li>
</ol></nav>

<h2 id="antes">Antes do contrato: o protocolo da família</h2>
<p>O contrato é o último passo, não o primeiro. Um bom protocolo interno segue quatro etapas:</p>
<ol>
<li><strong>Diagnóstico:</strong> levantar todos os bens (imóveis, empresas, aplicações), dívidas, rendimentos, regime de bens dos casamentos e a situação de cada herdeiro.</li>
<li><strong>Exposição do planejamento:</strong> apresentar à família o desenho proposto, com números: custos de abertura, impostos na transferência e na doação, e a tributação dos rendimentos depois.</li>
<li><strong>Reunião de sócios:</strong> discutir e decidir as regras de convivência: quem administra, como os lucros são usados, como um herdeiro entra ou sai.</li>
<li><strong>Implantação ("como vai ser"):</strong> só então redigir o contrato social e o <a href="/blog/governanca-na-empresa-familiar/">acordo de sócios</a>, registrar a empresa, transferir os bens e fazer as doações.</li>
</ol>
<p>Nessa fase também se definem os objetivos. Em muitas famílias, a próxima geração não vai "herdar para vender", e sim <strong>administrar e profissionalizar</strong> o patrimônio. O contrato precisa refletir isso.</p>

<h2 id="clausulas">As cláusulas que não podem faltar</h2>
<div class="rolagem"><table class="tabela">
<thead><tr><th>Cláusula</th><th>O que definir</th></tr></thead>
<tbody>
<tr><td><strong>Objeto social</strong></td><td>As atividades da empresa: participação em outras sociedades, administração de bens próprios, locação. Precisa corresponder ao que a holding vai fazer de fato (veja o ponto sobre ITBI abaixo).</td></tr>
<tr><td><strong>Capital social e integralização</strong></td><td>Quais bens entram, por qual valor e a divisão das quotas. Pelo valor declarado no Imposto de Renda não há ganho de capital na transferência; pelo valor de mercado, a diferença é tributada como ganho de capital da pessoa física já nesse momento (${link('l9249', 'Lei 9.249/1995, art. 23')}).</td></tr>
<tr><td><strong>Administração</strong></td><td>Quem administra, por quanto tempo, com quais poderes e limites. Atos relevantes (vender imóvel, dar garantia, contrair dívida) devem exigir aprovação dos sócios. O contrato pode permitir administrador não sócio, o que abre espaço para a profissionalização.</td></tr>
<tr><td><strong>Deliberações e quóruns</strong></td><td>Que decisões exigem maioria simples, maioria qualificada ou unanimidade. Os mínimos estão no Código Civil, mas a família pode exigir quóruns maiores para os temas sensíveis.</td></tr>
<tr><td><strong>Lucros</strong></td><td>Política de distribuição e de reinvestimento, reserva para manutenção dos imóveis e quem recebe os lucros quando as quotas estão com usufruto.</td></tr>
<tr><td><strong>Cessão de quotas</strong></td><td>Restrições à venda para terceiros e <strong>direito de preferência</strong> dos demais sócios. Sem regra no contrato, o ${link('cc', 'art. 1.057 do Código Civil')} permite a cessão a estranhos se não houver oposição de mais de um quarto do capital.</td></tr>
<tr><td><strong>Falecimento de sócio</strong></td><td>Se os herdeiros entram automaticamente na sociedade ou se as quotas são liquidadas, e como.</td></tr>
<tr><td><strong>Cônjuges e companheiros</strong></td><td>Que eles não se tornam sócios por causa do casamento e como fica a participação em caso de separação.</td></tr>
<tr><td><strong>Retirada e exclusão</strong></td><td>Hipóteses de saída, exclusão por justa causa (que precisa estar prevista, ${link('cc', 'art. 1.085 do Código Civil')}) e o <strong>critério de apuração de haveres</strong>: como se calcula o valor das quotas e em quantas parcelas é pago, para não descapitalizar a holding.</td></tr>
<tr><td><strong>Usufruto de quotas</strong></td><td>Se o voto fica com o usufrutuário (os pais) ou com o nu-proprietário (os filhos), em todos os temas ou só em alguns.</td></tr>
<tr><td><strong>Solução de conflitos</strong></td><td>Mediação familiar antes de qualquer processo e, se for o caso, arbitragem.</td></tr>
</tbody></table></div>
<p>Temas mais detalhados, como regras de convivência, conselho de família e critérios para um herdeiro trabalhar na empresa, costumam ir para o acordo de sócios, que complementa o contrato.</p>

<h2 id="doacao">A doação das quotas e suas cláusulas</h2>
<p>Depois de constituída a holding, os pais costumam doar as quotas aos filhos. Na escritura de doação entram as cláusulas de proteção, explicadas em detalhe em <a href="/blog/clausulas-de-protecao-na-doacao-de-quotas/">cláusulas que protegem o patrimônio na doação de quotas</a>:</p>
<ul>
<li><strong>Usufruto vitalício:</strong> os pais seguem recebendo os lucros e, se previsto, decidindo.</li>
<li><strong>Incomunicabilidade:</strong> as quotas não entram na partilha em caso de divórcio do herdeiro.</li>
<li><strong>Reversão:</strong> se o herdeiro falecer antes do doador, as quotas voltam para quem doou (${link('cc', 'art. 547 do Código Civil')}).</li>
<li><strong>Inalienabilidade e impenhorabilidade:</strong> o herdeiro não vende as quotas sem autorização, e elas não respondem por dívidas dele.</li>
</ul>
<p>Quando a família quer destinar um bem ao <strong>uso exclusivo de um herdeiro</strong>, por exemplo o imóvel em que ele mora, isso também deve ficar escrito: no contrato, no acordo de sócios ou num contrato de comodato com a holding, para não gerar cobranças dos demais sócios no futuro.</p>
<p>O ITCMD incide sobre a doação. Um <strong>seguro de vida</strong> com os herdeiros como beneficiários é um bom complemento: o capital segurado não entra em inventário nem é considerado herança (${link('cc', 'art. 794 do Código Civil')}), e pode dar liquidez para pagar impostos e custos da sucessão.</p>

<h2 id="itbi">ITBI: o que esperar na integralização dos imóveis</h2>
<p>A Constituição prevê que o ITBI não incide quando o imóvel é usado para integralizar o capital de uma empresa (${link('cf', 'art. 156, § 2º, I')}). É uma <strong>imunidade</strong>, mas com uma exceção importante: ela não vale se a atividade preponderante da empresa for a compra, venda ou locação de imóveis.</p>
<p>O ${link('ctn', 'Código Tributário Nacional (art. 37)')} considera preponderante a atividade que gera <strong>mais de 50% da receita operacional</strong> nos dois anos anteriores e nos dois posteriores à aquisição. Para uma empresa nova, contam os três primeiros anos. Além disso, o STF decidiu que a imunidade só alcança o valor efetivamente usado para integralizar o capital (${link('stf796', 'Tema 796')}).</p>
<p>Na prática, uma holding patrimonial cuja renda vem de aluguéis dificilmente escapa do ITBI, e prefeituras como a de São Paulo costumam negar a imunidade nesses casos. O correto é <strong>incluir o ITBI no custo do planejamento</strong>. Escrever um objeto social que não corresponde à atividade real não resolve: a análise é feita pela receita efetiva, e a diferença pode gerar autuação.</p>
<p>A alíquota e a base de cálculo variam por município: em São Paulo, a alíquota é de 3% sobre o maior valor entre o da transação e o valor venal de referência (${link('itbisp', 'Prefeitura de São Paulo')}). Veja todos os custos em <a href="/blog/quanto-custa-holding-familiar/">quanto custa abrir e manter uma holding familiar</a>. Por isso, quem tem imóveis em várias cidades precisa consultar a regra de cada uma.</p>

<h2 id="cuidados">Cuidados que costumam ser esquecidos</h2>
<ul>
<li><strong>Familiar com empresa no Simples Nacional:</strong> se um sócio da holding também tiver empresa no Simples e participar com mais de 10% do capital da holding, a empresa dele pode ser excluída do Simples quando a receita somada das duas passar do limite. O mesmo vale se ele for administrador da holding (${link('lc123', 'LC 123/2006, art. 3º, § 4º, IV e V')}). Vale simular antes de definir as participações e quem administra.</li>
<li><strong>Regime de bens dos casamentos:</strong> pode alterar quem é dono de quê antes mesmo da holding existir.</li>
<li><strong>Dívidas anteriores:</strong> transferir bens para fugir de credores pode ser anulado como fraude.</li>
<li><strong>Revisão periódica:</strong> casamentos, nascimentos, novos imóveis e mudanças na lei (como a <a href="/blog/holding-x-inventario-x-testamento/">reforma tributária</a>) pedem revisão do contrato e do acordo de sócios.</li>
</ul>
<p>Se a sua família está nessa etapa, veja como funciona o nosso <a href="/servicos/planejamento-sucessorio/">planejamento sucessório</a> e a <a href="/servicos/administracao-de-holding-familiar/">administração de holding familiar</a>.</p>
${AVISO}`
  },
  {
    slug: 'o-que-e-holding-familiar',
    titulo: 'O que é uma holding familiar e quando ela faz sentido',
    tema: 'Holding familiar',
    data: '2026-10-21',
    atualizado: '2026-11-11',
    fontes: [LEI.cc],
    descricao: 'Entenda o que é uma holding familiar, como ela funciona, quais as vantagens reais e em que situações ela não compensa.',
    imagem: 'familia-card.jpg',
    imagemAlt: 'Família de três gerações reunida em escritório corporativo (imagem ilustrativa)',
    corpo: `
<p>A holding familiar é uma empresa criada para <strong>ser dona dos bens e das participações da família</strong>. Em vez de imóveis, aplicações e quotas de outras empresas ficarem no nome de cada pessoa, eles passam a pertencer a uma sociedade cujos sócios são os próprios membros da família.</p>
<p>Parece só uma troca de titular, mas a mudança organiza a gestão do patrimônio, facilita a sucessão e permite definir regras claras de convivência entre os herdeiros.</p>

<nav class="sumario" aria-label="Nesta matéria"><strong>Nesta matéria</strong><ol>
<li><a href="#como-funciona">Como funciona na prática</a></li>
<li><a href="#vantagens">Vantagens reais</a></li>
<li><a href="#quando-nao">Quando não compensa</a></li>
<li><a href="#primeiros-passos">Primeiros passos</a></li>
</ol></nav>

<h2 id="como-funciona">Como funciona na prática</h2>
<p>Os patriarcas (ou o casal) constituem uma sociedade, normalmente uma <strong>limitada</strong>, e integralizam o capital social com os bens da família. Em seguida, podem doar as quotas aos filhos, ainda em vida, reservando para si o usufruto e o poder de administração.</p>
<p>Na prática, os pais continuam decidindo e recebendo os rendimentos, enquanto a transferência da propriedade para a próxima geração já fica resolvida.</p>
<p>Existem dois formatos comuns:</p>
<ul>
<li><strong>Holding patrimonial:</strong> concentra imóveis, aplicações e outros bens. Costuma receber aluguéis e administrar o patrimônio.</li>
<li><strong>Holding de participações:</strong> detém quotas ou ações de empresas operacionais da família, centralizando o controle societário.</li>
</ul>
<p>Muitas famílias combinam os dois papéis na mesma sociedade.</p>

<h2 id="vantagens">Vantagens reais</h2>
<ul>
<li><strong>Sucessão planejada:</strong> a divisão é feita em vida, com as regras que a família escolher, reduzindo o risco de um inventário longo e de conflitos entre herdeiros (compare em <a href="/blog/holding-x-inventario-x-testamento/">holding, inventário ou testamento</a>).</li>
<li><strong>Gestão unificada:</strong> um único CNPJ, uma contabilidade e uma conta bancária para receitas e despesas do patrimônio.</li>
<li><strong>Regras de governança:</strong> o contrato social e o <a href="/blog/governanca-na-empresa-familiar/">acordo de sócios</a> podem prever quem administra, como se decide, como entram cônjuges e como um sócio sai.</li>
<li><strong>Proteção por cláusulas:</strong> as doações de quotas podem levar cláusulas de inalienabilidade, impenhorabilidade, incomunicabilidade e reversão (veja <a href="/blog/clausulas-de-protecao-na-doacao-de-quotas/">nossa matéria sobre o tema</a>).</li>
<li><strong>Eficiência tributária, em alguns casos:</strong> para quem tem renda relevante de aluguéis, a tributação na pessoa jurídica pode ser menor que no carnê-leão. Depende do volume de receita e do regime tributário (veja a <a href="/blog/aluguel-pessoa-fisica-ou-holding/">comparação de impostos sobre aluguel</a>).</li>
</ul>

<h2 id="quando-nao">Quando não compensa</h2>
<p>A holding tem custo de abertura e de manutenção (contador, taxas, obrigações acessórias). Em geral, ela <strong>não compensa</strong> quando:</p>
<ul>
<li>o patrimônio é pequeno ou composto basicamente pelo imóvel em que a família mora;</li>
<li>não há renda de aluguéis nem participações em empresas;</li>
<li>o objetivo é apenas “fugir” de dívidas já existentes, o que pode ser anulado na Justiça como fraude contra credores.</li>
</ul>
<p>Também é importante lembrar que a holding <strong>não é blindagem absoluta</strong>. Os tribunais podem desconsiderar a personalidade jurídica quando há confusão patrimonial ou desvio de finalidade (${link('cc', 'art. 50 do Código Civil')}).</p>

<h2 id="primeiros-passos">Primeiros passos</h2>
<ol>
<li>Faça um inventário do patrimônio: imóveis, aplicações, participações, dívidas e rendimentos (estes <a href="/blog/organizacao-financeira-da-familia-empresaria/">hábitos de organização financeira</a> ajudam).</li>
<li>Converse em família sobre objetivos: quem vai administrar, como os rendimentos serão usados, o que acontece se um herdeiro quiser sair.</li>
<li>Peça uma simulação de custos: ITBI, ITCMD na doação das quotas, honorários e tributação dos rendimentos (veja <a href="/blog/quanto-custa-holding-familiar/">quanto custa abrir e manter uma holding familiar</a>).</li>
<li>Só então defina o tipo societário, o contrato social e o acordo de sócios.</li>
</ol>
<p>Depois que a estrutura está pronta, a Mana Vivaro cuida do dia a dia: conheça a <a href="/servicos/administracao-de-holding-familiar/">administração de holding familiar</a>.</p>
${AVISO}`
  },
  {
    slug: 'holding-x-inventario-x-testamento',
    titulo: 'Holding, inventário ou testamento: como planejar a sucessão',
    tema: 'Sucessão',
    data: '2026-10-21',
    atualizado: '2026-11-11',
    fontes: [LEI.cnj571, LEI.ec132, LEI.itcmdsp, LEI.cc],
    descricao: 'Compare holding familiar, inventário e testamento como caminhos de sucessão: custos, prazos, impostos e o que muda com a reforma tributária.',
    corpo: `
<p>Toda família que tem patrimônio vai passar, cedo ou tarde, pela sucessão. A pergunta não é <em>se</em>, mas <em>como</em>: deixar para resolver no inventário, organizar um testamento ou estruturar uma <a href="/blog/o-que-e-holding-familiar/">holding familiar</a> ainda em vida.</p>

<h2>Inventário: o caminho padrão</h2>
<p>Sem planejamento, os bens passam aos herdeiros por meio do inventário, que pode ser:</p>
<ul>
<li><strong>Extrajudicial</strong>, em cartório, quando há acordo entre os herdeiros e todos estão assistidos por advogado. Desde 2024, uma resolução do Conselho Nacional de Justiça (${link('cnj571', 'Resolução CNJ 571/2024')}) passou a admitir o inventário em cartório também em alguns casos com herdeiros menores ou com testamento, cumpridas certas condições.</li>
<li><strong>Judicial</strong>, quando há conflito ou outra situação que exija o juiz. Pode levar anos.</li>
</ul>
<p>Os requisitos e o passo a passo do inventário em cartório estão em <a href="/blog/inventario-em-cartorio/">inventário em cartório: quando é possível e como funciona</a>.</p>
<p>Em ambos os casos incidem o ITCMD (imposto estadual sobre heranças e doações), emolumentos ou custas e honorários advocatícios. Enquanto o inventário não termina, vender ou alugar os bens costuma depender de autorização, o que trava a gestão.</p>

<h2>Testamento: define a vontade, não evita o inventário</h2>
<p>O testamento permite distribuir a parte disponível do patrimônio (até 50% quando há herdeiros necessários, como filhos e cônjuge) e registrar vontades. Ele <strong>não dispensa o inventário</strong>, mas reduz a margem para disputa.</p>

<h2>Holding familiar: sucessão resolvida em vida</h2>
<p>Na holding, os bens já pertencem à sociedade e as quotas são doadas aos herdeiros em vida, normalmente com <a href="/blog/clausulas-de-protecao-na-doacao-de-quotas/">reserva de usufruto e cláusulas de proteção</a> para os pais. No falecimento, o usufruto se extingue e os herdeiros já são os sócios: se todas as quotas tiverem sido doadas, não há o que inventariar em relação a elas, apenas o cancelamento do usufruto. Bens que ficaram fora da holding continuam indo para inventário.</p>
<p>Isso não significa “sem imposto”: o ITCMD incide na doação das quotas, só que pago no momento escolhido pela família e sobre a base de cálculo vigente na época.</p>

<div class="rolagem"><table class="tabela">
<thead><tr><th></th><th>Inventário</th><th>Testamento</th><th>Holding familiar</th></tr></thead>
<tbody>
<tr><td>Quando acontece</td><td>Depois do falecimento</td><td>Escrito em vida, executado depois</td><td>Em vida</td></tr>
<tr><td>Prazo</td><td>Meses (cartório) a anos (judicial)</td><td>Igual ao inventário</td><td>Definido pela família</td></tr>
<tr><td>ITCMD</td><td>Na abertura da sucessão</td><td>Na abertura da sucessão</td><td>Na doação das quotas</td></tr>
<tr><td>Gestão no período</td><td>Bens ficam travados</td><td>Bens ficam travados</td><td>Gestão contínua</td></tr>
<tr><td>Custo de manutenção</td><td>Nenhum antes do evento</td><td>Baixo</td><td>Contador e obrigações anuais</td></tr>
</tbody></table></div>

<h2>O que muda com a reforma tributária</h2>
<p>A ${link('ec132', 'Emenda Constitucional 132/2023')} determinou que o ITCMD seja <strong>progressivo</strong>, ou seja, com alíquotas maiores para heranças e doações de valor mais alto, e cada estado está ajustando a sua lei. Em São Paulo, a alíquota segue fixa em 4% enquanto a nova lei estadual não é aprovada (${link('itcmdsp', 'Lei 10.705/2000, art. 16')}). A tendência é de aumento de custo para grandes patrimônios, o que tem levado muitas famílias a antecipar o planejamento.</p>
<p>Também mudou a regra de qual estado cobra o imposto sobre bens móveis, títulos e créditos: passa a ser o do domicílio de quem faleceu ou de quem doou. Imóveis continuam tributados no estado onde estão.</p>

<h2>Qual escolher?</h2>
<p>Não existe resposta única. Patrimônios menores costumam ficar bem com testamento e inventário em cartório. Famílias com vários imóveis, renda de aluguel ou empresas tendem a se beneficiar da holding. Muitas vezes, a melhor solução combina os instrumentos: holding para os bens principais e testamento para o restante. Para comparar os caminhos com a sua família, veja como funciona o nosso <a href="/servicos/planejamento-sucessorio/">planejamento sucessório</a>.</p>
${AVISO}`
  },
  {
    slug: 'clausulas-de-protecao-na-doacao-de-quotas',
    titulo: 'Cláusulas que protegem o patrimônio na doação de quotas',
    tema: 'Sucessão',
    data: '2026-10-21',
    atualizado: '2026-10-31',
    fontes: [LEI.cc],
    descricao: 'Usufruto, inalienabilidade, impenhorabilidade, incomunicabilidade e reversão: para que serve cada cláusula na doação de quotas da holding.',
    imagem: 'protecao.jpg',
    imagemAlt: 'Mão segurando guarda-chuva sobre recortes de papel de família, casa e carro (imagem ilustrativa)',
    corpo: `
<p>Doar as quotas da holding aos filhos em vida é o coração do <a href="/blog/holding-x-inventario-x-testamento/">planejamento sucessório</a>. Mas uma doação “seca” pode trazer riscos: o herdeiro vender as quotas, perdê-las numa dívida ou dividi-las num divórcio. Por isso a doação costuma vir acompanhada de cláusulas restritivas.</p>

<h2>Reserva de usufruto</h2>
<p>Os pais doam a propriedade das quotas, mas mantêm o <strong>usufruto</strong>: continuam recebendo os lucros e, se o contrato prever, os direitos de voto. Com o falecimento, o usufruto se extingue e os filhos passam a ter a propriedade plena, sem novo inventário dessas quotas.</p>

<h2>Inalienabilidade</h2>
<p>Impede que o herdeiro venda ou doe as quotas sem autorização. Serve para manter o patrimônio na família e evitar decisões precipitadas.</p>

<h2>Impenhorabilidade</h2>
<p>Impede que as quotas sejam penhoradas por dívidas do herdeiro. A inalienabilidade imposta em doação já implica impenhorabilidade e incomunicabilidade (${link('cc', 'art. 1.911 do Código Civil')}), mas é comum escrever as três de forma expressa.</p>

<h2>Incomunicabilidade</h2>
<p>Faz com que as quotas recebidas não entrem na partilha em caso de divórcio do herdeiro, qualquer que seja o regime de bens do casamento.</p>

<h2>Reversão</h2>
<p>Prevista no ${link('cc', 'art. 547 do Código Civil')}, faz com que as quotas <strong>voltem para o doador</strong> se ele sobreviver ao herdeiro que as recebeu. Evita que o patrimônio siga para a família do cônjuge do filho falecido.</p>

<h2>Atenção à legítima</h2>
<p>Metade do patrimônio é reservada por lei aos herdeiros necessários (a chamada legítima). No testamento, a lei só admite cláusulas restritivas sobre essa parte se houver <strong>justa causa declarada</strong> (<a href="https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm" rel="noopener">art. 1.848 do Código Civil</a>), e a mesma exigência costuma ser aplicada às doações que adiantam a legítima. Na doação, a lei também exige atenção ao adiantamento de legítima e à colação, para que nenhum filho seja favorecido sem querer.</p>

<h2>Combine com o contrato social</h2>
<p>As cláusulas da doação funcionam melhor quando o contrato social e o <a href="/blog/governanca-na-empresa-familiar/">acordo de sócios</a> caminham juntos: regras para entrada de terceiros, direito de preferência entre os sócios, forma de cálculo do valor das quotas em caso de saída e quem administra a sociedade.</p>
${AVISO}`
  },
  {
    slug: 'aluguel-pessoa-fisica-ou-holding',
    imagem: 'casa-card.jpg',
    imagemAlt: 'Casa moderna com fachada de vidro e jardim iluminado ao entardecer (imagem ilustrativa)',
    titulo: 'Aluguel na pessoa física ou na holding: o que muda nos impostos',
    tema: 'Tributação',
    data: '2026-10-21',
    tituloSEO: 'Aluguel na pessoa física ou na holding: impostos',
    atualizado: '2026-11-11',
    fontes: [LEI.rf2026, LEI.l15270, LEI.lc224, LEI.l9249, LEI.cf, LEI.stf796, LEI.lc214],
    descricao: 'Aluguel na pessoa física ou na holding: simulação com R$ 20 mil por mês, IR de 2026, lucro presumido, dividendos, ITBI e IBS/CBS a partir de 2027.',
    corpo: `
<p>Para muitas famílias, a renda de aluguel é o principal motivo para pensar em uma <a href="/blog/o-que-e-holding-familiar/">holding familiar</a>. A comparação, porém, precisa ser feita com os números da própria família, e não com promessas genéricas de economia. Abaixo explicamos as regras e fazemos uma simulação completa.</p>

<nav class="sumario" aria-label="Nesta matéria"><strong>Nesta matéria</strong><ol>
<li><a href="#pessoa-fisica">Aluguel na pessoa física</a></li>
<li><a href="#holding">Aluguel na holding (lucro presumido)</a></li>
<li><a href="#simulacao">Simulação: R$ 20 mil por mês</a></li>
<li><a href="#entrada">Custos para levar os imóveis à holding</a></li>
<li><a href="#reforma">O que muda com a reforma tributária</a></li>
<li><a href="#perguntas">Perguntas frequentes</a></li>
</ol></nav>

<h2 id="pessoa-fisica">Aluguel na pessoa física</h2>
<p>O aluguel recebido de pessoa física é tributado mensalmente pelo carnê-leão, e o recebido de pessoa jurídica sofre retenção na fonte. Em ambos os casos vale a tabela progressiva do Imposto de Renda: em 2026, acima de R$ 4.664,68 por mês a alíquota é de <strong>27,5%</strong>, com parcela a deduzir de R$ 908,73 (${link('rf2026', 'tabela da Receita Federal')}). A redução criada para quem ganha até R$ 7.350 por mês não alcança rendas maiores.</p>
<p>Podem ser deduzidos do aluguel o IPTU, o condomínio e a taxa de administração pagos pelo locador. Quando o imóvel é bem comum do casal, o aluguel pode ser dividido entre os cônjuges na declaração, o que reduz a faixa de cada um.</p>

<h2 id="holding">Aluguel na holding (lucro presumido)</h2>
<p>A holding que aluga imóveis normalmente fica no lucro presumido. A receita de aluguel tem presunção de 32% para IRPJ e CSLL, e o PIS e a Cofins são cumulativos:</p>
<ul>
<li><strong>IRPJ:</strong> 15% sobre 32% da receita, mais adicional de 10% sobre a parte do lucro presumido que passar de R$ 20 mil por mês;</li>
<li><strong>CSLL:</strong> 9% sobre 32% da receita;</li>
<li><strong>PIS e Cofins:</strong> 0,65% e 3% sobre a receita.</li>
</ul>
<p>Sem o adicional, a carga federal fica em <strong>11,33% da receita</strong>; com o adicional, pode chegar a cerca de 14,5%. Holdings com receita acima de R$ 5 milhões por ano têm ainda um acréscimo de 10% na presunção sobre o que exceder esse valor (${link('lc224', 'LC 224/2025')}), regra que está sendo questionada na Justiça.</p>
<p>Depois disso, o lucro é distribuído aos sócios. Desde janeiro de 2026, a ${link('l15270', 'Lei 15.270/2025')} prevê que, quando uma mesma empresa paga a uma mesma pessoa física mais de R$ 50 mil em lucros e dividendos no mês, há retenção de 10% de IR sobre o valor total pago. A partir do ano-calendário de 2026, quem recebe mais de R$ 600 mil por ano somando todos os rendimentos também fica sujeito a uma tributação mínima anual.</p>

<h2 id="simulacao">Simulação: R$ 20 mil de aluguel por mês</h2>
<p>Imagine uma família com receita de aluguel de <strong>R$ 20.000 por mês</strong> (R$ 240.000 por ano), já descontadas as despesas dedutíveis, e sem outras rendas que mudem a faixa do IR. Valores de 2026, arredondados:</p>
<div class="rolagem"><table class="tabela">
<thead><tr><th>Cenário</th><th>Imposto por ano</th><th>Carga sobre a receita</th></tr></thead>
<tbody>
<tr><td>Pessoa física, um único titular<br><small>(R$ 20.000 × 27,5% − R$ 908,73) × 12</small></td><td>R$ 55.095</td><td>23,0%</td></tr>
<tr><td>Pessoa física, aluguel dividido entre o casal<br><small>2 × (R$ 10.000 × 27,5% − R$ 908,73) × 12</small></td><td>R$ 44.190</td><td>18,4%</td></tr>
<tr><td>Holding no lucro presumido<br><small>IRPJ R$ 11.520 + CSLL R$ 6.912 + PIS R$ 1.560 + Cofins R$ 7.200</small></td><td>R$ 27.192</td><td>11,3%</td></tr>
</tbody></table></div>
<p>Na holding, os R$ 212.808 que sobram podem ser distribuídos aos sócios. Nesse porte, cada sócio recebe bem menos que R$ 50 mil por mês, então não há a retenção de 10% sobre dividendos, e a renda total fica abaixo de R$ 600 mil por ano.</p>
<p>A diferença, de R$ 17 mil a R$ 28 mil por ano, ainda precisa pagar <strong>a contabilidade da holding</strong> e diluir os <strong>custos de entrada</strong> (ITBI e cartório). Por isso, para receitas menores a vantagem tributária costuma desaparecer, e a holding passa a valer mais pela sucessão e pela gestão do que pelo imposto.</p>
<p class="legenda">Simulação simplificada, com valores de 2026. Não considera deduções do IR além das despesas do imóvel, outras rendas da família nem o IBS e a CBS, que começam a valer em 2027.</p>

<h2 id="entrada">Custos para levar os imóveis à holding</h2>
<ul>
<li><strong>Imposto de Renda:</strong> a pessoa física pode transferir os imóveis pelo valor que consta na sua declaração (${link('l9249', 'art. 23 da Lei 9.249/1995')}), sem apurar ganho de capital nesse momento.</li>
<li><strong>ITBI:</strong> a ${link('cf', 'Constituição')} prevê imunidade na integralização de capital, mas ela não se aplica quando a atividade preponderante da empresa é imobiliária (compra, venda ou locação). Além disso, o STF decidiu (${link('stf796', 'Tema 796')}) que a imunidade não alcança o valor dos imóveis que exceder o capital integralizado. Muitas holdings de aluguel acabam pagando ITBI; a regra exata depende do município.</li>
<li><strong>Cartório e registro</strong> da transferência de cada imóvel também entram na conta.</li>
</ul>

<h2 id="reforma">O que muda com a reforma tributária</h2>
<p>Com a ${link('lc214', 'Lei Complementar 214/2025')}, a locação de imóveis passa a ter IBS e CBS, os novos tributos sobre consumo, com <strong>redução de 70% da alíquota</strong> (art. 261) e transição gradual a partir de 2027. Na locação residencial, a lei permite ainda descontar da base de cálculo um <strong>redutor social de R$ 600 por mês por imóvel</strong> (art. 260).</p>
<p>A holding que aluga imóveis paga IBS e CBS sobre os aluguéis. A pessoa física só passa a pagar quando, no ano anterior, a receita de aluguéis passar de R$ 240 mil e envolver mais de 3 imóveis (art. 251). Esse ponto pode mudar a comparação: famílias com poucos imóveis podem continuar fora do IBS e da CBS na pessoa física. Vale refazer a simulação quando as alíquotas definitivas forem publicadas.</p>

<h2 id="perguntas">Perguntas frequentes</h2>
<h3>Holding sempre paga menos imposto sobre aluguel?</h3>
<p>Não. A carga da holding no lucro presumido costuma ser menor que a da pessoa física na faixa de 27,5%, mas os custos de contabilidade, de entrada e, a partir de 2027, o IBS e a CBS podem reduzir ou eliminar essa vantagem.</p>
<h3>Vale a pena para quem recebe pouco aluguel?</h3>
<p>Geralmente não pelo imposto. Com aluguéis baixos, a pessoa física fica em faixas menores da tabela e a economia não cobre os custos da holding. Nesses casos, a holding pode fazer sentido pela <a href="/blog/holding-x-inventario-x-testamento/">sucessão</a>, não pela tributação.</p>
<h3>Os dividendos da holding pagam IR?</h3>
<p>Em regra, não. Desde 2026 há retenção de 10% apenas quando uma mesma empresa paga mais de R$ 50 mil por mês a um mesmo sócio, e há uma tributação mínima anual para quem tem rendimentos totais acima de R$ 600 mil por ano.</p>

<h2>Como decidir</h2>
<ol>
<li>Levante a receita anual de aluguéis e as despesas dedutíveis.</li>
<li>Simule o IR na pessoa física (sozinho e dividido com o cônjuge, se for o caso) e a carga na holding, incluindo a distribuição de lucros.</li>
<li>Some os custos de entrada (ITBI, cartório) e de manutenção (contabilidade).</li>
<li>Considere os objetivos que não são tributários: <a href="/servicos/planejamento-sucessorio/">sucessão</a>, governança e gestão.</li>
</ol>
<p>Se quiser ajuda para fazer essa conta com os números da sua família, conheça a <a href="/servicos/administracao-de-holding-familiar/">administração de holding familiar</a> da Mana Vivaro.</p>
${AVISO}`
  },
  {
    slug: 'governanca-na-empresa-familiar',
    titulo: 'Governança na empresa familiar: acordo de sócios e conselho de família',
    tema: 'Governança',
    data: '2026-10-21',
    tituloSEO: 'Governança familiar: acordo de sócios e conselho',
    atualizado: '2026-10-31',
    descricao: 'Como acordo de sócios, protocolo familiar e conselho de família evitam conflitos e preparam a próxima geração para a gestão do patrimônio.',
    corpo: `
<p>A maior ameaça a um patrimônio familiar raramente é o mercado. Na maioria das vezes, são os <strong>conflitos entre parentes</strong>: irmãos que discordam sobre vender um imóvel, cônjuges que entram na sociedade, herdeiros que querem sair e não sabem quanto vale a sua parte.</p>
<p>Governança é o conjunto de regras e fóruns que permite tomar essas decisões antes que elas virem briga.</p>

<h2>Acordo de sócios</h2>
<p>É um contrato entre os sócios, complementar ao contrato social, que costuma tratar de:</p>
<ul>
<li>quem administra e quais decisões exigem aprovação de todos ou da maioria;</li>
<li>direito de preferência: se um sócio quiser vender, os outros têm prioridade;</li>
<li>regras de saída e como calcular o valor das quotas;</li>
<li>política de <a href="/blog/organizacao-financeira-da-familia-empresaria/">distribuição de lucros</a> e de reinvestimento;</li>
<li>o que acontece em caso de divórcio, falecimento ou incapacidade de um sócio.</li>
</ul>
<p>Quando as quotas chegam aos herdeiros por doação, o acordo deve conversar com as <a href="/blog/clausulas-de-protecao-na-doacao-de-quotas/">cláusulas de proteção da doação</a>.</p>

<h2>Protocolo familiar</h2>
<p>Documento menos jurídico e mais de valores: o que a família espera do patrimônio, como membros da família podem trabalhar nas empresas, como serão preparados os sucessores e como resolver divergências. Ele orienta o acordo de sócios e ajuda a transmitir a cultura da família.</p>

<h2>Conselho de família</h2>
<p>Um fórum periódico, por exemplo uma reunião por semestre, em que a família acompanha os resultados, discute investimentos e prepara a próxima geração. Registrar as decisões em ata dá transparência e evita o “eu não sabia”.</p>

<h2>Preparar a próxima geração</h2>
<ul>
<li>Envolva os herdeiros cedo, com informação adequada à idade.</li>
<li>Separe papéis: ser sócio não é o mesmo que ser gestor.</li>
<li>Defina critérios objetivos para quem quiser trabalhar na gestão.</li>
<li>Estimule formação em finanças, direito e negócios.</li>
</ul>

<h2>Por onde começar</h2>
<p>Uma conversa franca sobre expectativas, conduzida por alguém de fora da família, costuma destravar o processo. A partir dela, as regras viram documentos, e os documentos viram rotina. Veja como apoiamos esse processo em <a href="/servicos/governanca-familiar/">governança familiar</a>.</p>
${AVISO}`
  },
  {
    slug: 'organizacao-financeira-da-familia-empresaria',
    titulo: 'Organização financeira da família empresária: 7 hábitos essenciais',
    tema: 'Gestão',
    data: '2026-10-21',
    tituloSEO: 'Organização financeira da família empresária',
    atualizado: '2026-10-31',
    fontes: [LEI.cc],
    descricao: 'Separar contas, definir pró-labore, manter reserva e registrar decisões: hábitos simples que protegem o patrimônio da família empresária.',
    corpo: `
<p>Antes de qualquer estrutura societária, o patrimônio familiar precisa de <strong>organização</strong>. Sem ela, nem a melhor <a href="/blog/o-que-e-holding-familiar/">holding familiar</a> funciona: a confusão entre contas pessoais e da empresa é, inclusive, um dos motivos que levam a Justiça a desconsiderar a separação entre os bens dos sócios e os da sociedade (${link('cc', 'art. 50 do Código Civil')}).</p>

<h2>1. Separe as contas da família e da empresa</h2>
<p>Cada CNPJ com sua conta bancária. Despesas pessoais não passam pela empresa, e receitas da empresa não caem na conta pessoal.</p>

<h2>2. Defina como cada um é remunerado</h2>
<p>Quem trabalha na gestão recebe <strong>pró-labore</strong> (com INSS e IR). O retorno sobre o capital vem como <strong>distribuição de lucros</strong>, conforme a participação de cada sócio. Misturar as duas coisas gera conflito e risco fiscal. Desde 2026 a distribuição de lucros tem novas regras de IR, explicadas na <a href="/blog/aluguel-pessoa-fisica-ou-holding/">comparação entre pessoa física e holding</a>.</p>

<h2>3. Tenha um orçamento anual</h2>
<p>Preveja receitas (aluguéis, dividendos), despesas fixas (IPTU, condomínios, manutenção, contador) e investimentos planejados. Compare o realizado com o previsto a cada trimestre.</p>

<h2>4. Mantenha uma reserva para o patrimônio</h2>
<p>Imóveis vagos, reformas e inadimplência acontecem. Uma reserva equivalente a alguns meses de despesas evita vender bens às pressas.</p>

<h2>5. Centralize os documentos</h2>
<p>Matrículas atualizadas, contratos de locação, apólices, contratos sociais e declarações de IR em um repositório organizado e com cópia de segurança. Na sucessão, documento faltando vira atraso e custo.</p>

<h2>6. Registre as decisões</h2>
<p>Reuniões de sócios com ata, mesmo que simples. Isso protege quem decidiu e informa quem não estava presente. Veja também como montar um <a href="/blog/governanca-na-empresa-familiar/">conselho de família</a>.</p>

<h2>7. Revise o planejamento periodicamente</h2>
<p>Casamentos, nascimentos, mudança de regras tributárias e compra ou venda de bens alteram o cenário. Uma revisão anual com contador e advogado mantém o planejamento atualizado.</p>
${AVISO}`
  }
];

// Páginas próprias dos serviços principais (/servicos/<slug>/).
// "materias": slugs das matérias do blog ligadas ao serviço.
exports.servicos = [
  {
    slug: 'administracao-de-holding-familiar',
    nome: 'Administração de holding familiar',
    titulo: 'Administração de holding familiar',
    descricao: 'Administração do dia a dia da holding familiar: rotinas societárias, controle financeiro, distribuição de lucros e prestação de contas aos sócios.',
    intro: 'Depois que a holding está constituída, começa o trabalho que garante que ela funcione: manter as rotinas em dia, separar o dinheiro da família e o da sociedade, e dar a todos os sócios a mesma informação.',
    paraQuem: [
      "Famílias que já constituíram uma holding e não têm quem cuide da rotina dela",
      "Holdings com vários imóveis alugados, em que contratos, reajustes, IPTU e condomínios se acumulam",
      "Famílias em que só um dos sócios conhece os números e os demais querem acompanhar com clareza",
      "Patriarcas que querem passar a gestão do dia a dia sem perder o controle das decisões"
    ],
    situacoes: [
      [
        "Holding criada, mas parada",
        "A sociedade existe no papel, mas as contas continuam misturadas com as da família e ninguém sabe quanto o patrimônio rende. Organizamos o fluxo de receitas e despesas e passamos a prestar contas aos sócios."
      ],
      [
        "Muitos imóveis, pouca organização",
        "Contratos vencendo, reajustes esquecidos e documentos espalhados. Montamos o calendário de vencimentos e o controle por imóvel, para que nada dependa da memória de uma pessoa."
      ],
      [
        "Sócios que querem transparência",
        "Irmãos ou herdeiros que recebem lucros sem entender a origem dos números. Relatórios periódicos e reuniões com ata dão a todos a mesma informação."
      ]
    ],
    inclui: [
      'Organização das rotinas societárias: reuniões de sócios, atas e calendário de obrigações',
      'Controle de receitas e despesas da holding, como aluguéis, IPTU, condomínios e manutenção',
      'Apoio à distribuição de lucros conforme a participação de cada sócio',
      'Relatórios periódicos para os sócios, com números claros',
      'Relacionamento com o contador, os bancos e os prestadores de serviço da família',
    ],
    etapas: [
      ['Diagnóstico', 'Entendemos como a holding está estruturada, quais bens possui e quais rotinas já existem.'],
      ['Organização', 'Montamos o calendário de obrigações, o controle financeiro e o modelo de relatório para os sócios.'],
      ['Gestão contínua', 'Acompanhamos o dia a dia e prestamos contas com regularidade.'],
    ],
    faq: [
      ['A Mana Vivaro faz a contabilidade da holding?', 'Não. A contabilidade e as obrigações fiscais ficam com o contador da família. Nós organizamos as informações, acompanhamos os prazos e fazemos a ponte com ele.'],
      ['Preciso já ter uma holding para contratar?', 'Não. Se a holding ainda não existe, começamos pelo diagnóstico do patrimônio e pelo planejamento, junto com o advogado e o contador da família.'],
      ["Com que frequência os sócios recebem relatórios?","A periodicidade é combinada com a família. O mais comum é um resumo mensal das receitas e despesas e uma reunião de sócios por semestre, com ata."],
      ["A administração inclui os imóveis da holding?","Sim. Acompanhamos contratos, reajustes, cobranças, IPTU, condomínios e manutenção dos imóveis da holding, sempre com prestação de contas aos sócios."],
    ],
    materias: ['o-que-e-holding-familiar', 'aluguel-pessoa-fisica-ou-holding', 'organizacao-financeira-da-familia-empresaria', 'contrato-social-da-holding-familiar'],
  },
  {
    slug: 'planejamento-sucessorio',
    nome: 'Planejamento sucessório',
    titulo: 'Planejamento sucessório para famílias',
    descricao: 'Planejamento sucessório em vida: mapeamento do patrimônio, comparação entre holding, inventário e testamento e coordenação com advogado e contador.',
    intro: 'Planejar a sucessão em vida permite que a família decida com calma como o patrimônio vai passar para a próxima geração, em vez de deixar tudo para um inventário depois do falecimento.',
    paraQuem: [
      "Casais com imóveis, aplicações ou participações em empresas que querem decidir em vida como será a sucessão",
      "Famílias com filhos de casamentos diferentes, em que regras claras evitam conflitos",
      "Herdeiros que já viveram um inventário longo e querem poupar a próxima geração",
      "Empresários que precisam garantir a continuidade da empresa familiar"
    ],
    situacoes: [
      [
        "Patrimônio concentrado em imóveis",
        "Um inventário pode travar a venda e o aluguel dos imóveis por meses ou anos. Comparamos a holding com o testamento e a doação em vida para escolher o caminho que mantém a gestão funcionando."
      ],
      [
        "Herdeiros com perfis diferentes",
        "Um filho quer vender, outro quer manter. Cláusulas na doação e regras no acordo de sócios definem antes como essas decisões serão tomadas."
      ],
      [
        "Preocupação com o custo do ITCMD",
        "Com a reforma tributária, os estados estão adotando alíquotas progressivas. Levantamos o custo de cada alternativa para a família decidir o momento da transmissão com números na mesa."
      ]
    ],
    inclui: [
      'Mapeamento do patrimônio, dos rendimentos e dos objetivos de cada membro da família',
      'Comparação entre os caminhos possíveis: holding familiar, testamento, doação em vida e inventário',
      'Estudo da doação de quotas com reserva de usufruto e cláusulas de proteção',
      'Levantamento dos custos envolvidos, como ITCMD, ITBI, cartório e honorários',
      'Coordenação com o advogado e o contador, que formalizam os atos jurídicos e contábeis',
    ],
    etapas: [
      ['Conversa em família', 'Ouvimos as expectativas de cada um sobre o patrimônio e a sucessão.'],
      ['Mapa do patrimônio', 'Organizamos bens, dívidas, rendimentos e documentos em um só lugar.'],
      ['Comparação de caminhos', 'Mostramos as alternativas com custos e prazos, para a família decidir.'],
      ['Implantação', 'Acompanhamos a execução com os profissionais da família até a estrutura funcionar.'],
    ],
    faq: [
      ['Planejamento sucessório é só para famílias muito ricas?', 'Não. Toda família com patrimônio passa pela sucessão. Para patrimônios menores, testamento e inventário em cartório podem bastar; o planejamento ajuda a escolher o caminho certo.'],
      ['O planejamento evita o pagamento de ITCMD?', 'Não. O imposto continua devido, mas o planejamento permite escolher o momento da transmissão e organizar os custos, em vez de pagá-los às pressas em um inventário.'],
      ["Quanto tempo leva um planejamento sucessório?","Depende do tamanho do patrimônio e de quantas pessoas precisam concordar. A conversa em família e o mapa do patrimônio costumam vir primeiro; a implantação acompanha o ritmo do advogado, do contador e dos cartórios."],
      ["Preciso fazer holding para planejar a sucessão?","Não. A holding é uma das alternativas. Para alguns patrimônios, testamento e doações com cláusulas resolvem melhor; o planejamento serve justamente para comparar."],
    ],
    materias: ['holding-x-inventario-x-testamento', 'clausulas-de-protecao-na-doacao-de-quotas', 'o-que-e-holding-familiar', 'contrato-social-da-holding-familiar'],
  },
  {
    slug: 'governanca-familiar',
    nome: 'Governança familiar',
    titulo: 'Governança familiar e acordo de sócios',
    descricao: 'Governança para famílias empresárias: acordo de sócios, protocolo familiar, conselho de família e preparação da próxima geração.',
    intro: 'Boa parte dos conflitos em torno de um patrimônio familiar vem da falta de regras combinadas antes. Governança é organizar essas regras e criar momentos para a família decidir junto.',
    paraQuem: [
      "Famílias com mais de um herdeiro na sociedade ou na empresa familiar",
      "Empresas familiares em transição da primeira para a segunda geração",
      "Holdings em que cônjuges, genros e noras começam a participar das decisões",
      "Famílias que já tiveram desentendimentos sobre o patrimônio e querem regras antes do próximo"
    ],
    situacoes: [
      [
        "Decisões que dependem de uma só pessoa",
        "Quando só o patriarca ou a matriarca decide, a família fica sem rumo se essa pessoa se afastar. O conselho de família distribui a informação e prepara quem vem depois."
      ],
      [
        "Herdeiro que quer sair da sociedade",
        "Sem regra de saída, discutir quanto vale a parte de cada um vira briga. O acordo de sócios define antes o direito de preferência e a forma de calcular o valor das quotas."
      ],
      [
        "Parentes trabalhando na empresa",
        "Quem trabalha recebe salário ou pró-labore; quem é sócio recebe lucros. O protocolo familiar deixa claro esse limite e os critérios para um membro da família assumir a gestão."
      ]
    ],
    inclui: [
      'Apoio na definição das regras do acordo de sócios: administração, preferência, saída e distribuição de lucros',
      'Construção do protocolo familiar com os valores e as expectativas da família',
      'Organização e condução do conselho de família, com pauta e ata',
      'Preparação dos sucessores, separando o papel de sócio do papel de gestor',
    ],
    etapas: [
      ['Escuta', 'Conversamos com os membros da família para entender expectativas e pontos de atrito.'],
      ['Regras', 'Transformamos os acordos em propostas de protocolo e de acordo de sócios, revisadas pelo advogado da família.'],
      ['Rotina', 'Implantamos o conselho de família e acompanhamos as primeiras reuniões.'],
    ],
    faq: [
      ['Qual a diferença entre acordo de sócios e protocolo familiar?', 'O acordo de sócios é um contrato com regras jurídicas sobre a sociedade. O protocolo familiar registra valores e expectativas da família e orienta o acordo.'],
      ['A governança só faz sentido depois de criar a holding?', 'Não. As regras de convivência podem e devem ser discutidas antes, para que a estrutura já nasça com elas.'],
      ["Quem participa do conselho de família?","A família define. Em geral participam os sócios e os herdeiros adultos; cônjuges podem participar como ouvintes, conforme as regras do protocolo familiar."],
      ["O protocolo familiar tem valor jurídico?","Ele é sobretudo um documento de valores e combinados. As regras que precisam valer juridicamente vão para o acordo de sócios e o contrato social, revisados pelo advogado da família."],
    ],
    materias: ['governanca-na-empresa-familiar', 'clausulas-de-protecao-na-doacao-de-quotas', 'organizacao-financeira-da-familia-empresaria', 'contrato-social-da-holding-familiar'],
  },
];

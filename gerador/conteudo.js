// Conteúdo do site Mana Vivaro: matérias do blog.
// Depois de editar, rode: node gerador/gerar.js
// Matérias sem "imagem" usam a placa gráfica da marca no cartão.
// "atualizado": data da última revisão do texto (vira dateModified e "Atualizado em").
// "tituloSEO": título mais curto para a aba e o Google, quando o título passa de ~60 caracteres.
// "fontes": lista [texto, link] exibida no fim da matéria. Links conferidos em 31/10/2026.

const LEI = {
  cc: ['Código Civil (Lei 10.406/2002)', 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'],
  cf: ['Constituição Federal, art. 156, § 2º, I (ITBI)', 'https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm'],
  ec132: ['Emenda Constitucional 132/2023 (reforma tributária)', 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm'],
  lc214: ['Lei Complementar 214/2025 (IBS e CBS)', 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm'],
  l15270: ['Lei 15.270/2025 (IR sobre lucros e dividendos)', 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15270.htm'],
  l9249: ['Lei 9.249/1995, art. 23 (integralização de capital)', 'https://www.planalto.gov.br/ccivil_03/leis/l9249.htm'],
  stf796: ['STF, Tema 796 de repercussão geral (ITBI)', 'https://portal.stf.jus.br/jurisprudenciaRepercussao/tema.asp?num=796'],
  cnj571: ['Resolução CNJ 571/2024 (inventário em cartório)', 'https://atos.cnj.jus.br/files/original2309432024083066d251371bc21.pdf'],
};
const link = (chave, texto) => `<a href="${LEI[chave][1]}" rel="noopener">${texto}</a>`;

const AVISO =`<p class="aviso">Este conteúdo é informativo e não substitui a análise de um advogado e de um contador para o caso concreto da sua família. Regras tributárias mudam com frequência: confira a legislação em vigor antes de decidir.</p>`;

exports.materias = [
  {
    slug: 'o-que-e-holding-familiar',
    titulo: 'O que é uma holding familiar e quando ela faz sentido',
    tema: 'Holding familiar',
    data: '2026-10-21',
    atualizado: '2026-10-31',
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
<li>Peça uma simulação de custos: ITBI, ITCMD na doação das quotas, honorários e tributação dos rendimentos.</li>
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
    atualizado: '2026-10-31',
    fontes: [LEI.cnj571, LEI.ec132, LEI.cc],
    descricao: 'Compare holding familiar, inventário e testamento como caminhos de sucessão: custos, prazos, impostos e o que muda com a reforma tributária.',
    corpo: `
<p>Toda família que tem patrimônio vai passar, cedo ou tarde, pela sucessão. A pergunta não é <em>se</em>, mas <em>como</em>: deixar para resolver no inventário, organizar um testamento ou estruturar uma <a href="/blog/o-que-e-holding-familiar/">holding familiar</a> ainda em vida.</p>

<h2>Inventário: o caminho padrão</h2>
<p>Sem planejamento, os bens passam aos herdeiros por meio do inventário, que pode ser:</p>
<ul>
<li><strong>Extrajudicial</strong>, em cartório, quando há acordo entre os herdeiros e todos estão assistidos por advogado. Desde 2024, uma resolução do Conselho Nacional de Justiça (${link('cnj571', 'Resolução CNJ 571/2024')}) passou a admitir o inventário em cartório também em alguns casos com herdeiros menores ou com testamento, cumpridas certas condições.</li>
<li><strong>Judicial</strong>, quando há conflito ou outra situação que exija o juiz. Pode levar anos.</li>
</ul>
<p>Em ambos os casos incidem o ITCMD (imposto estadual sobre heranças e doações), emolumentos ou custas e honorários advocatícios. Enquanto o inventário não termina, vender ou alugar os bens costuma depender de autorização, o que trava a gestão.</p>

<h2>Testamento: define a vontade, não evita o inventário</h2>
<p>O testamento permite distribuir a parte disponível do patrimônio (até 50% quando há herdeiros necessários, como filhos e cônjuge) e registrar vontades. Ele <strong>não dispensa o inventário</strong>, mas reduz a margem para disputa.</p>

<h2>Holding familiar: sucessão resolvida em vida</h2>
<p>Na holding, os bens já pertencem à sociedade e as quotas são doadas aos herdeiros em vida, normalmente com <a href="/blog/clausulas-de-protecao-na-doacao-de-quotas/">reserva de usufruto e cláusulas de proteção</a> para os pais. No falecimento, o usufruto se extingue e os herdeiros já são os sócios: não há bens a inventariar, apenas o cancelamento do usufruto.</p>
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
<p>A ${link('ec132', 'Emenda Constitucional 132/2023')} determinou que o ITCMD seja <strong>progressivo</strong>, ou seja, com alíquotas maiores para heranças e doações de valor mais alto, e cada estado está ajustando a sua lei. A tendência é de aumento de custo para grandes patrimônios, o que tem levado muitas famílias a antecipar o planejamento.</p>
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
    titulo: 'Aluguel na pessoa física ou na holding: o que muda nos impostos',
    tema: 'Tributação',
    data: '2026-10-21',
    tituloSEO: 'Aluguel na pessoa física ou na holding: impostos',
    atualizado: '2026-10-31',
    fontes: [LEI.l15270, LEI.l9249, LEI.cf, LEI.stf796, LEI.lc214],
    descricao: 'Compare a tributação de aluguéis na pessoa física e na holding, o ITBI na integralização de imóveis e as mudanças da reforma tributária.',
    corpo: `
<p>Para muitas famílias, a renda de aluguel é o principal motivo para pensar em uma <a href="/blog/o-que-e-holding-familiar/">holding familiar</a>. A comparação, porém, precisa ser feita com números da própria família, e não com promessas genéricas de economia.</p>

<h2>Na pessoa física</h2>
<p>O aluguel recebido de pessoa física é tributado mensalmente pelo carnê-leão, e o de pessoa jurídica sofre retenção na fonte. Em ambos os casos vale a tabela progressiva do Imposto de Renda, que chega a <strong>27,5%</strong> para rendas mais altas. Podem ser deduzidos IPTU, condomínio e taxa de administração pagos pelo locador.</p>

<h2>Na holding (lucro presumido)</h2>
<p>No lucro presumido, a receita de aluguel tem presunção de 32% para IRPJ e CSLL. Somando PIS e Cofins no regime cumulativo, a carga federal costuma ficar <strong>em torno de 11% a 15% da receita</strong>, dependendo do valor, em holdings de pequeno e médio porte (o adicional de IRPJ incide sobre a parcela do lucro presumido que passar de R$ 20 mil por mês).</p>
<p>Depois disso, os lucros são distribuídos aos sócios. Desde janeiro de 2026, a <a href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/l15270.htm" rel="noopener">Lei 15.270/2025</a> prevê que, quando uma mesma empresa paga a uma mesma pessoa física mais de R$ 50 mil em lucros e dividendos no mês, há retenção de 10% de IR sobre o valor total pago, além de uma tributação mínima anual para rendas muito altas. Isso precisa entrar na conta.</p>

<h2>Levar os imóveis para a holding</h2>
<ul>
<li><strong>Imposto de Renda:</strong> a pessoa física pode transferir os imóveis pelo valor que consta na sua declaração (${link('l9249', 'art. 23 da Lei 9.249/1995')}), sem apurar ganho de capital nesse momento.</li>
<li><strong>ITBI:</strong> a ${link('cf', 'Constituição')} prevê imunidade na integralização de capital, mas ela não se aplica quando a atividade preponderante da empresa é imobiliária (compra, venda ou locação). Além disso, o STF decidiu (${link('stf796', 'Tema 796')}) que a imunidade não alcança o valor dos imóveis que exceder o capital integralizado. Muitas holdings de aluguel acabam pagando ITBI; a regra exata depende do município.</li>
<li><strong>Custos de cartório e registro</strong> também entram na conta.</li>
</ul>

<h2>A reforma tributária e os aluguéis</h2>
<p>Com a ${link('lc214', 'Lei Complementar 214/2025')}, a locação de imóveis passa a ter IBS e CBS, os novos tributos sobre consumo, com <strong>redução de 70% da alíquota</strong> (art. 261) e transição gradual a partir de 2027. Pessoas físicas também passam a ser contribuintes quando, no ano anterior, a receita de aluguéis passar de R$ 240 mil e envolver mais de 3 imóveis (<a href="https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm" rel="noopener">art. 251 da LC 214/2025</a>). Esse ponto pode mudar a comparação entre pessoa física e holding: vale refazer a simulação.</p>

<h2>Como decidir</h2>
<ol>
<li>Levante a receita anual de aluguéis e as despesas dedutíveis.</li>
<li>Simule o IR na pessoa física e a carga na holding, incluindo a distribuição de lucros.</li>
<li>Some os custos de entrada (ITBI, cartório) e de manutenção (contabilidade).</li>
<li>Considere os objetivos que não são tributários: sucessão, governança e gestão.</li>
</ol>
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
    ],
    materias: ['o-que-e-holding-familiar', 'aluguel-pessoa-fisica-ou-holding', 'organizacao-financeira-da-familia-empresaria'],
  },
  {
    slug: 'planejamento-sucessorio',
    nome: 'Planejamento sucessório',
    titulo: 'Planejamento sucessório para famílias',
    descricao: 'Planejamento sucessório em vida: mapeamento do patrimônio, comparação entre holding, inventário e testamento e coordenação com advogado e contador.',
    intro: 'Planejar a sucessão em vida permite que a família decida com calma como o patrimônio vai passar para a próxima geração, em vez de deixar tudo para um inventário depois do falecimento.',
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
    ],
    materias: ['holding-x-inventario-x-testamento', 'clausulas-de-protecao-na-doacao-de-quotas', 'o-que-e-holding-familiar'],
  },
  {
    slug: 'governanca-familiar',
    nome: 'Governança familiar',
    titulo: 'Governança familiar e acordo de sócios',
    descricao: 'Governança para famílias empresárias: acordo de sócios, protocolo familiar, conselho de família e preparação da próxima geração.',
    intro: 'Boa parte dos conflitos em torno de um patrimônio familiar vem da falta de regras combinadas antes. Governança é organizar essas regras e criar momentos para a família decidir junto.',
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
    ],
    materias: ['governanca-na-empresa-familiar', 'clausulas-de-protecao-na-doacao-de-quotas', 'organizacao-financeira-da-familia-empresaria'],
  },
];

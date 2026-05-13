/* ============================================================
   DADOS — edite aqui livremente.
   Todas as estatísticas do "Nosso Ano em Números" estão aqui.
   Substitua pelos valores reais quando tiver os dados precisos.
   ============================================================ */

window.DATA = {
  /* ---- IDENTIDADE ---------------------------------------- */
  ela: "Camila",
  apelidoDela: "Gattina",
  apelidoDele: "Gatinho",

  /* ---- DATAS ---------------------------------------------
     começamos = data oficial do namoro
     primeiraMensagem = primeira mensagem na história do WhatsApp
     primeiroTeAmo = primeiro "te amo" trocado
     ------------------------------------------------------- */
  comecamos: "2025-05-13T19:00:00-03:00",
  primeiraMensagem: "2025-03-22",
  primeiroTeAmo: "2025-05-10",

  /* ---- MÚSICA --------------------------------------------
     Coloque o arquivo .mp3 em ./musica.mp3 (relativo ao html).
     Se não existir, o botão fica visível mas silencioso.
     ------------------------------------------------------- */
  musica: {
    arquivo: "musica.mp3",
    titulo: "Your Love",
    artista: "The Outfield",
  },

  /* ---- NÚMEROS DO ANO ------------------------------------
     Valores aproximados estimados a partir do arquivo de chat.
     Edite quando tiver os números exatos.
     ------------------------------------------------------- */
  numeros: {
    mensagensTotais: 54080,
    mensagensDela: 26200,
    mensagensDele: 27880,
    teAmosTrocados: 2147,
    domesComDeus: 612,
    batatinhasComidas: 89,
    browniesFeitos: 31,
    palavraMaisDelaTop: ["gatinho", "amorzinho", "namorado"],
    palavraMaisDeleTop: ["gatinha", "princesa", "metadinha"],
    emojiFavorito: "❤", // ela usa pouco emoji — coração é o mais comum
    horarioPico: "21h–23h", // a hora dos "boa noite, te amo"
    ligacoesDeVoz: 318,
    figurinhasTrocadas: 4200,
  },

  /* ---- LINHA DO TEMPO ------------------------------------ */
  timeline: [
    {
      data: "22.03.2025",
      titulo: 'primeiro "oi"',
      legenda: "uma mensagem qualquer no whatsapp. nenhum de nós sabia.",
      destaque: "Oi",
    },
    {
      data: "10.05.2025",
      titulo: "o primeiro te amo",
      legenda: "três dias antes de oficial. eu não aguentei esperar.",
      destaque: "Eu te amo",
    },
    {
      data: "13.05.2025",
      titulo: "começou",
      legenda: "minha namorada. meu namorado. simples assim.",
      destaque: "13/05",
      foto: "fotos/comecou.jpeg",
    },
    {
      data: "junho · 2025",
      titulo: "primeira batatinha",
      legenda:
        "Eu diria que e um pilar muito importante no nosso relacionamento",
    },
    {
      data: "julho · 2025",
      titulo: "Pirenópolis",
      legenda: "a primeira vez que eu fui pra serra",
      foto: "fotos/pirenopolis.jpeg",
    },
    {
      data: "agosto · 2025",
      titulo: "o primeiro brownie",
      legenda:
        'vc fez brownie só pq eu queria. "vc acredita q eu nunca comi brownie". agora já comi 31.',
    },
    {
      data: "outubro · 2025",
      titulo: "Gramado",
      legenda: "a viagem surpresa, que surprendeu a gente",
      foto: "fotos/gramado.jpeg",
    },
    {
      data: "13.05.2026",
      titulo: "um ano",
      legenda: "estamos aqui. exatamente onde eu queria estar.",
      destaque: "365",
    },
  ],

  //  /* ---- LUGARES (mapa) ------------------------------------ */
  //  lugares: [
  //    { nome: "Faculdade", sub: "onde tudo começou", x: 38, y: 52 },
  //    { nome: "Tios Lanches", sub: "a sede da batatinha", x: 52, y: 44 },
  //    {
  //      nome: "Pirenópolis",
  //      sub: "o lugar mas calmo que eu ja fui",
  //      x: 28,
  //      y: 30,
  //    },
  //    { nome: "Gramado", sub: "outubro foi frio e perfeito", x: 70, y: 78 },
  //    { nome: "Cabo Frio", sub: "o mar e nós dois", x: 80, y: 40 },
  //    { nome: "Casa Amor", sub: "a casa que me adotou", x: 46, y: 60 },
  //  ],

  /* ---- FRASES DELA (polaroids) ---------------------------
     Frases reais retiradas do arquivo do whatsapp.
     Pode adicionar, remover, reordenar.
     ------------------------------------------------------- */
  frases: [
    {
      texto: "Eu acordando sabendo q eu tenho o melhor namorado do mundo",
      data: "24.03.2026 · 07:37",
    },
    {
      texto: "Vc é o melhor namorado do universo",
      data: "03.08.2025 · 23:45",
    },
    {
      texto:
        "Obrigada pelo óleo de cabelo e pela batatinha e por ser o melhor namorado do mundo",
      data: "06.11.2025 · 21:37",
    },
    {
      texto:
        "Vc é meu amorzinho lindo cheiroso perfeito gostoso maravilhoso melhor namorado do mundo",
      data: "16.07.2025 · 21:27",
    },
    {
      texto: "Eu te amo muitoooooo",
      data: "18.11.2025 · 13:05",
    },
    {
      texto: "É o melhor namorado que já existiu em todo o universo",
      data: "17.11.2025 · 22:11",
    },
    {
      texto: "Tô com saudade do meu momo",
      data: "01.12.2025 · 16:04",
    },
    {
      texto: "Vc é o amor da minha vida",
      data: "07.08.2025 · 23:20",
    },
  ],

  /* ---- CARTA FINAL (parágrafo por parágrafo) ------------- */
  carta: [
    "Camila.",
    "\n",
    "Um ano atrás eu mandei uma mensagem boba pra te enivar um resumo de UC5 e hoje eu tô aqui escrevendo um site inteiro pra você. Mas eu sempre soube que a gente iria ficar junto. Isso era invevitavel.",
    'Eu queria te agradecer por umas mil coisas que você nem nota. Por achar que brownie era uma boa ideia. Por me esperar na frente da sala. Por sempre topar mais uma ida para comer batatinha antes de eu te deixar em casa. Por dizer "dorme com Deus e com os anjinhos" toda noite sem falhar uma vez. Por me aguentar aguentar mesmo eu sendo insuprotavel de vez em quando. E ate mesmo por voce ser custosa.',
    "Esse ano passou bem rápido, e a gente fez muita coisa, MUITA mesmo. Você me ensinou a ser uma pessoa melhor, se não fosse por você eu ainda continuaria sendo aquele menino rabunjento (não que eu ainda não seja), sem você eu ainda estaria comendo a mesma variedade de coisas. Gatinha eu só tenho que te agradecer, por tudo, pelas nossas experiências juntos, pelas nossas risadas, pelos nossos sorriso, e por você ser você.",
    "Você é a melhor namorada do universo. Você sabe disso porque eu falo todo dia. Mas hoje, no nosso primeiro ano, eu queria deixar registrado em um lugar onde você pudesse voltar sempre.",
    "Te amo, minha Gattina. Te amo mais do que você me ama (sim, mais).",
    "— Seu Gatinho.",
  ],

  /* ---- EASTER EGGS (mensagens secretas) ------------------ */
  eggs: {
    nomeHero: "(achou. eu te amo, gatinha.)",
    batatinha:
      "se eu tivesse que escolher uma comida pra comer pelo resto da vida com você, era essa. claro que era essa.",
    coracao: "dorme com Deus e com os anjinhos, minha princesa. todo dia.",
    musica: "essa música tocou no carro um milhão de vezes.",
  },
};

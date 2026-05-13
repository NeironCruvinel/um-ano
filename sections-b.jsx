/* ============================================================
   SEÇÕES PRINCIPAIS — Timeline + Mapa + Polaroids + Carta + Final
   ============================================================ */

/* ============================================================
   3) LINHA DO TEMPO — vertical, com fita decorada
   Cada momento revela ao entrar no viewport.
   ============================================================ */
function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <header className="timeline-head">
        <p className="kicker">capítulo três</p>
        <h2>a linha do tempo</h2>
        <p className="dek">de um "oi" sem importância pro hoje.</p>
      </header>

      <ol className="timeline-list">
        {window.DATA.timeline.map((item, i) => (
          <TLItem key={i} item={item} alt={i % 2 === 1} index={i} />
        ))}
      </ol>
    </section>
  );
}

function TLItem({ item, alt, index }) {
  const [ref, shown] = useReveal(0.25);
  return (
    <li ref={ref} className={`tl-item ${alt ? "tl-alt" : ""} ${shown ? "is-shown" : ""}`}>
      <span className="tl-bullet" />
      <div className="tl-content">
        <p className="tl-date">{item.data}</p>
        <h3 className="tl-title">{item.titulo}</h3>
        <p className="tl-legenda">{item.legenda}</p>
        {item.destaque && <p className="tl-destaque">"{item.destaque}"</p>}
        {item.foto && (
          <figure className="tl-foto-real">
            <img src={item.foto} alt={`${item.titulo} · ${item.data}`} loading="lazy" />
          </figure>
        )}
      </div>
    </li>
  );
}

/* ============================================================
   4) MAPA — placeholder estilizado com pins
   Mapa simples desenhado em SVG; pins clicáveis revelam descrição.
   ============================================================ */
function Mapa() {
  const [ativo, setAtivo] = React.useState(null);

  return (
    <section id="mapa" className="mapa">
      <header className="mapa-head">
        <p className="kicker">capítulo quatro</p>
        <h2>os lugares que a gente foi</h2>
        <p className="dek">e os que a gente ainda vai.</p>
      </header>

      <div className="mapa-canvas">
        {/* fundo abstrato — não desenho um mapa do brasil, faço um plano romântico */}
        <svg viewBox="0 0 100 100" className="mapa-bg" preserveAspectRatio="none" aria-hidden>
          <defs>
            <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M4 0H0V4" fill="none" stroke="currentColor" strokeWidth="0.1" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
          {/* linhas sinuosas como rios ou rotas */}
          <path d="M5 70 Q 30 50 50 65 T 95 55" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
          <path d="M10 20 Q 40 35 60 25 T 90 35" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
        </svg>

        {window.DATA.lugares.map((l, i) => (
          <button
            key={i}
            className={`mapa-pin ${ativo === i ? "is-active" : ""}`}
            style={{ left: `${l.x}%`, top: `${l.y}%` }}
            onClick={() => setAtivo(ativo === i ? null : i)}
            aria-label={l.nome}
          >
            <span className="pin-dot" />
            <span className="pin-pulse" />
            <span className="pin-label">
              <strong>{l.nome}</strong>
              <em>{l.sub}</em>
            </span>
          </button>
        ))}
      </div>

      <p className="mapa-foot">
        toque nos pins. cada um deles tem um cheiro, um som, um sabor de batatinha.
      </p>
    </section>
  );
}

/* ============================================================
   5) FRASES DELA — polaroids/bilhetinhos espalhados
   Cada frase vira um cartão com leve rotação, hover endireita.
   ============================================================ */
function Frases() {
  return (
    <section id="frases" className="frases">
      <header className="frases-head">
        <p className="kicker">capítulo cinco</p>
        <h2>algumas coisas que você me disse</h2>
        <p className="dek">copiadas do whatsapp. nada inventado.</p>
      </header>

      <div className="frases-grid">
        {window.DATA.frases.map((f, i) => (
          <BilheteFrase key={i} frase={f} index={i} />
        ))}
      </div>
    </section>
  );
}

function BilheteFrase({ frase, index }) {
  const [ref, shown] = useReveal(0.2);
  const rot = ((index * 53) % 7) - 3.2; // entre -3.2 e 3.8 graus aprox
  const tilt = `rotate(${rot}deg)`;
  return (
    <figure
      ref={ref}
      className={`bilhete ${shown ? "is-shown" : ""}`}
      style={{ transform: tilt, "--rot": `${rot}deg` }}
    >
      <span className="bilhete-tape" aria-hidden />
      <blockquote>
        <p>"{frase.texto}"</p>
      </blockquote>
      <figcaption>
        <span>— você</span>
        <time>{frase.data}</time>
      </figcaption>
    </figure>
  );
}

/* ============================================================
   6) CARTA — texto íntimo, aparece parágrafo por parágrafo
   ============================================================ */
function Carta() {
  return (
    <section id="carta" className="carta">
      <header className="carta-head">
        <p className="kicker">capítulo seis</p>
        <h2>uma carta</h2>
        <p className="dek">a parte mais importante deste site.</p>
      </header>

      <article className="carta-corpo">
        {window.DATA.carta.map((p, i) => (
          <Paragrafo key={i} texto={p} index={i} />
        ))}
      </article>
    </section>
  );
}

function Paragrafo({ texto, index }) {
  const [ref, shown] = useReveal(0.4);
  const isAssinatura = texto.startsWith("—");
  const isAbertura = index === 0;
  return (
    <p
      ref={ref}
      className={`paragrafo ${shown ? "is-shown" : ""} ${isAbertura ? "p-abertura" : ""} ${isAssinatura ? "p-assinatura" : ""}`}
      style={{ transitionDelay: `${Math.min(index * 80, 400)}ms` }}
    >
      {texto}
    </p>
  );
}

/* ============================================================
   7) FINAL — fechamento simples e elegante
   ============================================================ */
function Finale() {
  const tempo = useTempoJuntos(window.DATA.comecamos);
  return (
    <section id="finale" className="finale">
      <p className="finale-eyebrow">13.05.2026</p>
      <h2 className="finale-h">
        <em>um ano.</em>
        <br />
        e eu já tô torcendo
        <br />
        pra ter outro
        <br />
        com você.
      </h2>
      <p className="finale-meta">
        <span>primeiro de muitos. {tempo.d} dias e contando.</span>
        <CoracaoSVG size={12} />
      </p>
    </section>
  );
}

/* ============================================================
   8) EASTER EGGS — corações flutuantes + batatinha escondida
   - botão de coração no canto: revela mensagem secreta
   - silhueta de batatinha minúscula no rodapé: revela mensagem
   - clicar 5x no contador de "te amo" (já feito em wrapped) é o 3º
   - o nome da hero (já feito) é o 4º
   ============================================================ */
function EasterEggs() {
  const [aberto, setAberto] = React.useState(null); // "coracao" | "batata" | null

  return (
    <>
      {/* coração flutuante fixo no canto inferior direito */}
      <button
        className="egg-heart-btn"
        onClick={() => setAberto("coracao")}
        aria-label="mensagem secreta"
      >
        <CoracaoSVG size={14} />
      </button>

      {/* batatinha minúscula escondida no rodapé */}
      <button
        className="egg-batata-btn"
        onClick={() => setAberto("batata")}
        aria-label="batatinha secreta"
      >
        <span className="batata-svg" aria-hidden>
          {/* mini SVG de uma "batatinha" simples */}
          <svg viewBox="0 0 14 30" width="10" height="22">
            <rect x="5.5" y="2" width="3" height="26" rx="1.4" fill="currentColor" />
          </svg>
        </span>
      </button>

      {aberto && (
        <button className="egg-overlay" onClick={() => setAberto(null)}>
          <div className="egg-card" onClick={(e) => e.stopPropagation()}>
            <CoracaoSVG size={22} className="egg-heart" />
            <p>{window.DATA.eggs[aberto === "coracao" ? "coracao" : "batatinha"]}</p>
            <small>(toque em qualquer lugar pra voltar)</small>
          </div>
        </button>
      )}
    </>
  );
}

Object.assign(window, { Timeline, Mapa, Frases, Carta, Finale, EasterEggs });

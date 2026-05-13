/* ============================================================
   SEÇÕES PRINCIPAIS — Hero + Wrapped (números)
   ============================================================ */

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS, useMemo: useMemoS } = React;

/* ============================================================
   1) HERO — abertura cinematográfica
   - nome dela aparece letra-por-letra
   - contador ao vivo (dias, horas, minutos, segundos)
   - botão de música discreto
   - pétalas caindo (sutis)
   - easter egg: clicar no nome dela revela mensagem secreta
   ============================================================ */
function Hero() {
  const tempo = useTempoJuntos(window.DATA.comecamos);
  const [eggOpen, setEggOpen] = useStateS(false);

  return (
    <section id="hero" className="hero">
      <Petalas n={14} />

      <div className="hero-inner">
        <p className="hero-eyebrow">um ano · 13.05.2025 — 13.05.2026</p>

        <h1 className="hero-name" aria-label={window.DATA.ela}>
          {/* nome com letras animadas individualmente */}
          {window.DATA.ela.split("").map((ch, i) =>
          <span
            key={i}
            className="hero-name-ch"
            style={{ animationDelay: `${0.45 + i * 0.14}s` }}
            onClick={() => setEggOpen(true)}>
            
              {ch}
            </span>
          )}
        </h1>

        <p className="hero-caption">
          pra você, <em>minha</em> gattina.
        </p>

        <div className="hero-counter" aria-live="polite">
          <Unit n={tempo.d} l="dias" big />
          <Unit n={tempo.h} l="horas" />
          <Unit n={tempo.m} l="minutos" />
          <Unit n={tempo.s} l="segundos" pulse />
        </div>

        <p className="hero-sub">
          desde a primeira vez que você disse "meu" na frente de "namorado".
        </p>

        <div className="hero-scrollcue">
          <span>role</span>
          <span className="line" />
        </div>
      </div>

      <MusicaToggle />

      {/* Easter Egg #1 — modal ao clicar no nome dela */}
      {eggOpen &&
      <button className="egg-overlay" onClick={() => setEggOpen(false)}>
          <div className="egg-card" onClick={(e) => e.stopPropagation()}>
            <CoracaoSVG size={22} className="egg-heart" />
            <p>{window.DATA.eggs.nomeHero}</p>
            <small>(toque em qualquer lugar pra voltar)</small>
          </div>
        </button>
      }
    </section>);

}

function Unit({ n, l, big = false, pulse = false }) {
  const v = String(n).padStart(2, "0");
  return (
    <div className={`unit ${big ? "unit-big" : ""}`}>
      <span className={`unit-n ${pulse ? "unit-pulse" : ""}`}>{v}</span>
      <span className="unit-l">{l}</span>
    </div>);

}

/* ============================================================
   2) WRAPPED — Nosso Ano em Números
   Cada card tem personalidade própria. Snap scroll vertical.
   ============================================================ */
function Wrapped() {
  const n = window.DATA.numeros;
  const cards = [
  { kind: "intro" },
  { kind: "mensagens", v: n.mensagensTotais, sub: `${n.mensagensDela.toLocaleString("pt-BR")} suas · ${n.mensagensDele.toLocaleString("pt-BR")} minhas` },
  { kind: "teamos", v: n.teAmosTrocados },
  { kind: "dormeComDeus", v: n.domesComDeus },
  { kind: "palavras", dela: n.palavraMaisDelaTop, dele: n.palavraMaisDeleTop },
  { kind: "batatinha", v: n.batatinhasComidas },
  { kind: "brownie", v: n.browniesFeitos },
  { kind: "hora", v: n.horarioPico },
  { kind: "ligacoes", v: n.ligacoesDeVoz }];


  return (
    <section id="wrapped" className="wrapped">
      <header className="wrapped-head">
        <p className="kicker">capítulo dois</p>
        <h2>nosso ano em números</h2>
        <p className="dek">
          o whatsapp registrou tudo. eu só organizei.
        </p>
      </header>

      <div className="wrapped-stack">
        {cards.map((c, i) =>
        <WrappedCard key={i} index={i} card={c} />
        )}
      </div>
    </section>);

}

function WrappedCard({ card, index }) {
  const [ref, shown] = useReveal(0.35);
  const kind = card.kind;

  return (
    <article
      ref={ref}
      className={`wcard wcard-${kind} ${shown ? "is-shown" : ""}`}
      data-i={index}>
      
      {kind === "intro" &&
      <div className="wcard-body">
          <p className="wcard-eyebrow">o ano da gente em números</p>
          <h3 className="wcard-title-xl">
            entre <em>22.03.25</em> e <em>13.05.26</em>
            <br />
            a gente disse muita coisa
            <br />
            um pra outra.
          </h3>
          <p className="wcard-foot">role devagar →</p>
        </div>
      }

      {kind === "mensagens" &&
      <div className="wcard-body wcard-grid">
          <div className="wcard-num">
            <span className="num">{card.v.toLocaleString("pt-BR")}</span>
            <span className="num-l">mensagens trocadas</span>
          </div>
          <div className="wcard-side">
            <p>uma média de <strong>{Math.round(card.v / 418)}</strong> por dia.</p>
            <p>{card.sub}</p>
            <p className="ital">
              "uma conversa nunca acabou. só pausou pra dormir."
            </p>
          </div>
        </div>
      }

      {kind === "teamos" &&
      <div className="wcard-body wcard-teamos">
          <p className="wcard-eyebrow">"te amo"</p>
          <div className="teamos-grid">
            {Array.from({ length: 60 }).map((_, i) =>
          <span key={i} className="teamo-dot" style={{ animationDelay: `${i * 18}ms` }}>
                te amo
              </span>
          )}
          </div>
          <p className="wcard-bignum"><strong>{card.v.toLocaleString("pt-BR")}</strong> vezes</p>
          <p className="wcard-foot ital">e a gente sempre achou pouco.</p>
        </div>
      }

      {kind === "dormeComDeus" &&
      <div className="wcard-body">
          <p className="wcard-eyebrow">boa noite</p>
          <h3 className="wcard-title">
            "<em>dorme com Deus<br />e com os anjinhos</em>"
          </h3>
          <p className="wcard-bignum"><strong>{card.v}</strong> vezes</p>
          <p className="wcard-foot">
            um ritual que virou oração. nenhuma noite escapou.
          </p>
        </div>
      }

      {kind === "palavras" &&
      <div className="wcard-body wcard-words">
          <p className="wcard-eyebrow">as palavras que mais saíram da gente</p>
          <div className="words-col">
            <header>você</header>
            <ul>
              {card.dela.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
          <div className="words-sep">×</div>
          <div className="words-col">
            <header>eu</header>
            <ul>
              {card.dele.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
        </div>
      }

      {kind === "batatinha" &&
      <div className="wcard-body wcard-batatinha">
          <div className="bat-shapes" aria-hidden>
            {Array.from({ length: 24 }).map((_, i) =>
          <span key={i} className="bat" style={{
            "--r": `${Math.random() * 60 - 30}deg`,
            "--x": `${Math.random() * 100}%`,
            "--y": `${Math.random() * 100}%`,
            "--d": `${i * 60}ms`
          }} />
          )}
          </div>
          <p className="wcard-eyebrow">a fundação da nossa relação</p>
          <h3 className="wcard-bignum"><strong>{card.v}</strong></h3>
          <p className="wcard-foot">
            batatinhas. ritual sagrado.
          </p>
        </div>
      }

      {kind === "brownie" &&
      <div className="wcard-body">
          <p className="wcard-eyebrow">só pq eu queria</p>
          <h3 className="wcard-title">
            <strong>{card.v}</strong> brownies
          </h3>
          <p className="wcard-foot">
            antes de você eu nunca tinha comido um.
            <br />
            hoje eu sei oque eu estava perdendo.
          </p>
        </div>
      }

      {kind === "hora" &&
      <div className="wcard-body wcard-clock">
          <p className="wcard-eyebrow">o horário em que a gente mais conversou</p>
          <h3 className="wcard-bignum"><strong>{card.v}</strong></h3>
          <div className="clock-bar">
            {Array.from({ length: 24 }).map((_, h) => {
            const peak = h >= 21 && h <= 23;
            const tall = peak ? 1 : 0.18 + Math.abs(Math.sin(h * 0.7)) * 0.45;
            return <span key={h} className={`clock-tick ${peak ? "is-peak" : ""}`} style={{ "--h": `${tall * 100}%` }} />;
          })}
          </div>
          <p className="wcard-foot">a hora dos "boa noite, te amo, dorme com Deus e com os anjinhos".</p>
        </div>
      }

      {kind === "ligacoes" &&
      <div className="wcard-body">
          <p className="wcard-eyebrow">e quando texto não era o bastante</p>
          <h3 className="wcard-bignum"><strong>{card.v}</strong></h3>
          <p className="wcard-foot">
            ligações de voz. nenhuma curta o suficiente.
          </p>
        </div>
      }
    </article>);

}

Object.assign(window, { Hero, Wrapped });
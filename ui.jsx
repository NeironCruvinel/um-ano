/* ============================================================
   COMPONENTES DA UI — pétalas, contador, áudio, polaroid etc.
   Tudo pequeno e reutilizável.
   ============================================================ */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ---- Hook: contador ao vivo até "agora" --------------------
   Devolve { d, h, m, s, totalDias } desde a data passada.
*/
function useTempoJuntos(inicioISO) {
  const [agora, setAgora] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setAgora(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return useMemo(() => {
    const inicio = new Date(inicioISO);
    const diff = Math.max(0, agora - inicio);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    return { d, h, m, s };
  }, [agora, inicioISO]);
}

/* ---- Hook: revela quando elemento entra no viewport --------- */
function useReveal(threshold = 0.18) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}

/* ---- Pétalas caindo na hero (sutis, não kitsch) ------------- */
function Petalas({ n = 14 }) {
  const petalas = useMemo(
    () =>
      Array.from({ length: n }).map((_, i) => ({
        i,
        left: Math.random() * 100,
        delay: -Math.random() * 18,
        dur: 18 + Math.random() * 16,
        size: 9 + Math.random() * 10,
        sway: 20 + Math.random() * 50,
        rot: Math.random() * 360,
        opacity: 0.25 + Math.random() * 0.35,
      })),
    [n]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {petalas.map((p) => (
        <span
          key={p.i}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.2}px`,
            animationDuration: `${p.dur}s, ${p.dur * 0.4}s`,
            animationDelay: `${p.delay}s, ${p.delay}s`,
            opacity: p.opacity,
            "--sway": `${p.sway}px`,
            "--rot": `${p.rot}deg`,
          }}
        />
      ))}
    </div>
  );
}

/* ---- Áudio com botão de mute ---------------------------------
   Tenta dar play assim que o usuário interage com a página.
   Se o arquivo não existir, o botão fica funcional mas em silêncio.
*/
function MusicaToggle() {
  const audioRef = useRef(null);
  const [mudo, setMudo] = useState(true);
  const [pronto, setPronto] = useState(false);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = 0.32;
    const onCanPlay = () => setPronto(true);
    const onError = () => setPronto(false);
    a.addEventListener("canplay", onCanPlay);
    a.addEventListener("error", onError);
    return () => {
      a.removeEventListener("canplay", onCanPlay);
      a.removeEventListener("error", onError);
    };
  }, []);

  const toggle = useCallback(async () => {
    const a = audioRef.current;
    if (!a) return;
    if (mudo) {
      try {
        await a.play();
        setMudo(false);
      } catch (e) {
        setMudo(false); // permite que ela veja o estado mesmo sem arquivo
      }
    } else {
      a.pause();
      setMudo(true);
    }
  }, [mudo]);

  return (
    <div className="music-toggle">
      <audio ref={audioRef} loop preload="auto" src={window.DATA.musica.arquivo} />
      <button onClick={toggle} aria-label={mudo ? "tocar música" : "pausar música"}>
        <span className="dot" data-on={!mudo} />
        <span className="label">
          {mudo ? "tocar nossa música" : `${window.DATA.musica.titulo} · ${window.DATA.musica.artista}`}
        </span>
      </button>
    </div>
  );
}

/* ---- Placeholder de foto (div com gradiente quente) ---------
   Para Neiron substituir depois pelas fotos reais.
*/
function FotoPlaceholder({ legenda = "foto aqui", rotacao = 0, aspect = "4/5", className = "" }) {
  return (
    <div
      className={`foto-placeholder ${className}`}
      style={{ transform: `rotate(${rotacao}deg)`, aspectRatio: aspect }}
    >
      <span className="foto-tag">{legenda}</span>
    </div>
  );
}

/* ---- Polaroid (placeholder de foto + legenda manuscrita) ---- */
function Polaroid({ legenda, rotacao = -2, aspect = "1/1" }) {
  return (
    <figure className="polaroid" style={{ transform: `rotate(${rotacao}deg)` }}>
      <FotoPlaceholder legenda="foto" aspect={aspect} />
      <figcaption>{legenda}</figcaption>
    </figure>
  );
}

/* ---- Coração SVG (não emoji) -------------------------------- */
function CoracaoSVG({ size = 18, className = "", fill = "currentColor" }) {
  return (
    <svg viewBox="0 0 24 22" width={size} height={size} className={className} fill={fill} aria-hidden>
      <path d="M12 21s-7.5-4.7-10.2-9.6C-.4 7.4 2.2 3 6.4 3c2.3 0 4.1 1.2 5.6 3 1.5-1.8 3.3-3 5.6-3 4.2 0 6.8 4.4 4.6 8.4C19.5 16.3 12 21 12 21z" />
    </svg>
  );
}

/* exporta tudo pro escopo global pq cada babel-script é isolado */
Object.assign(window, {
  useTempoJuntos,
  useReveal,
  Petalas,
  MusicaToggle,
  FotoPlaceholder,
  Polaroid,
  CoracaoSVG,
});

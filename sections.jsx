/* global React */
const { useState, useEffect, useRef } = React;

// ---------- Header ----------
function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="logo">
          <span className="logo__mark">R</span>
          <span>RC Odontologia <em style={{fontStyle:'italic', color:'var(--ink-3)'}}>Integrada</em></span>
        </a>
        <nav>
          <a href="#manutencao">Tratamento</a>
          <a href="#aparelhos">Aparelhos</a>
          <a href="#clinica">Clínica</a>
          <a href="#equipe">Equipe</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <a href="#form" className="btn btn--primary" style={{padding:'12px 20px', fontSize:14}}>
          Avaliar meu caso <span className="arrow" />
        </a>
      </div>
    </header>
  );
}

// ---------- Placeholder visual ----------
function Placeholder({ label, className = "", style }) {
  return (
    <div className={`ph ${className}`} style={style}>
      <div className="ph__label">{label}</div>
      <div className="ph__center">[ {label} ]</div>
    </div>
  );
}

// ---------- Hero ----------
function Hero({ data, layout }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__inner">
          <div>
            <div className="hero__meta">
              <span className="dot" />
              {data.eyebrow}
            </div>
            <h1 className="hero__title">
              Ortodontia <span className="ital">personalizada</span><br />
              para o seu sorriso
            </h1>
            <p className="hero__sub">{data.sub}</p>
            <div className="hero__meta" style={{marginBottom:0, marginTop:0}}>
              📍 {data.location}
            </div>
            <div className="hero__cta-row" style={{marginTop:32}}>
              <a href="#form" className="btn btn--primary">
                {data.cta} <span className="arrow" />
              </a>
              <a href="#manutencao" className="btn btn--ghost">
                Como funciona a avaliação
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <Placeholder label="retrato — paciente sorrindo" className="placeholder" />
            <div className="card-1">
              <span className="pulse" />
              <div>
                <strong>Avaliação individual</strong><br />
                <span style={{color:'var(--ink-3)', fontSize:12}}>1ª consulta com diagnóstico</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__strip">
          <div className="hero__strip-item">
            <span className="n">São Braz</span>
            <span className="l">Curitiba — próx. Santa Felicidade</span>
          </div>
          <div className="hero__strip-item">
            <span className="n">+ Especialidades</span>
            <span className="l">Clínica multidisciplinar integrada</span>
          </div>
          <div className="hero__strip-item">
            <span className="n">Avaliação <em style={{fontStyle:'italic'}}>antes</em></span>
            <span className="l">de qualquer indicação de aparelho</span>
          </div>
          <div className="hero__strip-item">
            <span className="n">Planejamento</span>
            <span className="l">claro, com tempo estimado e plano</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Marquee ----------
function Marquee() {
  const items = ["Diagnóstico individual", "Planejamento claro", "Acompanhamento próximo", "Equipe multidisciplinar"];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {repeated.map((t, i) => (
          <span className="marquee__item" key={i}>
            <span className={i % 2 ? "ital" : ""}>{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------- Manutenção ----------
function Manutencao({ data }) {
  return (
    <section className="section" id="manutencao">
      <div className="container">
        <div className="manut__grid">
          <div>
            <div className="eyebrow">{data.eyebrow}</div>
            <h2 className="h-1 manut__title">
              Ortodontia <span className="italic-serif" style={{color:'var(--accent)'}}>não é apenas</span> manutenção mensal.
            </h2>
          </div>
          <div className="manut__body">
            {data.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <div className="pillars">
          {data.pillars.map((p, i) => (
            <div className="pillar" key={i}>
              <span className="pillar__n">{p.n}</span>
              <h3 className="h-3 pillar__t">{p.t}</h3>
              <p className="pillar__d">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Reviews ----------
function Reviews({ data }) {
  return (
    <section className="section section--alt" id="reviews">
      <div className="container">
        <div className="reviews__head">
          <div>
            <div className="eyebrow">{data.eyebrow}</div>
            <h2 className="h-1" style={{marginTop:16}}>
              Pacientes que valorizam <span className="italic-serif" style={{color:'var(--accent)'}}>cuidado, clareza e confiança</span>.
            </h2>
          </div>
          <div>
            <p className="lead">{data.intro}</p>
            <div className="reviews__google">
              <span style={{color:'var(--highlight)', letterSpacing:2}}>★★★★★</span>
              <span><strong>Avaliações reais</strong> publicadas no Google</span>
            </div>
          </div>
        </div>

        <div className="reviews__grid">
          {data.items.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-card__stars">{'★'.repeat(r.stars)}</div>
              <p className="review-card__text">"{r.text}"</p>
              <div className="review-card__meta">
                <span className="name">{r.name}</span>
                <span>{r.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Porque avaliar antes ----------
function Porque({ data }) {
  return (
    <section className="section section--ink">
      <div className="container">
        <div className="porque__grid">
          <div>
            <div className="eyebrow">{data.eyebrow}</div>
            <h2 className="h-1" style={{marginTop:16, color:'var(--accent-ink)', marginBottom:32}}>
              Por que a avaliação<br/>vem <span className="italic-serif" style={{color:'var(--highlight)'}}>antes</span> do valor?
            </h2>
            <div className="porque__body">
              {data.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="porque__checks">
            <h3>Durante a avaliação, analisamos</h3>
            <ul>
              {data.checks.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Benefícios ----------
function Beneficios({ data }) {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <div className="benef__head">
          <div>
            <div className="eyebrow">{data.eyebrow}</div>
            <h2 className="h-1" style={{marginTop:16}}>
              Um tratamento planejado<br/>para o seu <span className="italic-serif" style={{color:'var(--accent)'}}>sorriso</span>.
            </h2>
          </div>
          <p className="lead">{data.intro}</p>
        </div>

        <div className="benef__grid">
          {data.items.map((it, i) => (
            <div className="benef__cell" key={i}>
              <span className="n">{String(i+1).padStart(2,'0')}</span>
              <div className="t">{it}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Aparelhos ----------
function Aparelhos({ data }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="section section--alt" id="aparelhos">
      <div className="container">
        <div className="aparelhos__head">
          <div className="eyebrow">{data.eyebrow}</div>
          <h2 className="h-1" style={{marginTop:16, marginBottom:24}}>
            Qual aparelho é <span className="italic-serif" style={{color:'var(--accent)'}}>melhor</span> para você?
          </h2>
          <p className="lead">{data.intro}</p>
        </div>

        <div className="aparelhos__list">
          {data.items.map((a, i) => (
            <div className="aparelho" key={i} onMouseEnter={() => setOpen(i)}>
              <div className="aparelho__tag">{a.tag}</div>
              <h3 className="aparelho__name">{a.name}</h3>
              <p className="aparelho__desc">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="aparelhos__note">
          <span className="icon">i</span>
          <span>{data.note}</span>
        </div>
      </div>
    </section>
  );
}

// ---------- Clínica ----------
function Clinica({ data }) {
  return (
    <section className="section" id="clinica">
      <div className="container">
        <div className="clinica__grid">
          <div className="clinica__visual">
            <Placeholder label="interior da clínica — recepção" style={{position:'absolute', inset:0}} />
          </div>
          <div className="clinica__body">
            <div className="eyebrow">{data.eyebrow}</div>
            <h2 className="h-1" style={{marginTop:16, marginBottom:32}}>
              Uma clínica completa<br/>para cuidar do seu sorriso em <span className="italic-serif" style={{color:'var(--accent)'}}>Curitiba</span>.
            </h2>
            {data.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <div className="clinica__stats">
          {data.stats.map((s, i) => (
            <div className="clinica__stat" key={i}>
              <span className="n">{s.n}</span>
              <span className="l">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Profissionais ----------
function Profissionais({ data }) {
  return (
    <section className="section section--alt" id="equipe">
      <div className="container">
        <div className="profs__head">
          <div>
            <div className="eyebrow">{data.eyebrow}</div>
            <h2 className="h-1" style={{marginTop:16}}>
              Profissionais preparados<br/>para <span className="italic-serif" style={{color:'var(--accent)'}}>orientar</span> o seu tratamento.
            </h2>
          </div>
          <p className="profs__intro">{data.intro}</p>
        </div>

        <div className="profs__grid">
          {data.items.map((p, i) => (
            <div className={`prof-card ${p.highlight ? 'prof--highlight' : ''}`} key={i}>
              <div className="prof-card__photo">
                <div className="ph__label">retrato profissional</div>
                {p.highlight && <span className="prof-card__badge">Ortodontia</span>}
              </div>
              <div className="prof-card__body">
                <div className="prof-card__name">{p.name}</div>
                <div className="prof-card__meta">
                  <span>{p.cro}</span>
                  <span>•</span>
                  <span className="role">{p.role}</span>
                </div>
                <p className="prof-card__quote">{p.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Pagamento ----------
function Pagamento({ data }) {
  return (
    <section className="section" id="pagamento">
      <div className="container">
        <div className="pgto__grid">
          <div>
            <div className="eyebrow">{data.eyebrow}</div>
            <h2 className="h-1" style={{marginTop:16, marginBottom:32}}>
              Condições de <span className="italic-serif" style={{color:'var(--accent)'}}>pagamento</span>.
            </h2>
            {data.body.map((p, i) => <p key={i} style={{color:'var(--ink-2)', maxWidth:'48ch'}}>{p}</p>)}
          </div>
          <div className="pgto__card">
            <div className="badge">Possibilidade de parcelamento</div>
            <div className="h">Pagamento ajustado ao seu planejamento.</div>
            <p style={{color:'rgba(244,239,230,0.7)', fontSize:15}}>
              Após a avaliação, a equipe apresenta o plano completo e as condições disponíveis para o seu caso — incluindo possibilidade de parcelamento mediante análise.
            </p>
            <div className="note">
              O tratamento ortodôntico envolve diagnóstico, planejamento e acompanhamento — e não apenas uma manutenção isolada.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  Header, Hero, Marquee, Manutencao, Reviews, Porque,
  Beneficios, Aparelhos, Clinica, Profissionais, Pagamento, Placeholder,
});

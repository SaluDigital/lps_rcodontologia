/* global React, ReactDOM */
const { useState: uS, useEffect: uE } = React;

const stripIdx = (s) => (s || '').replace(/^\s*\d+\s*\/\s*/, '');
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541998069893&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";
const REVIEWS_URL = "https://www.google.com/search?q=rc+odontologia+integrada#lrd=0x94dce1c3ec53d02f:0xc545acd00e31deaf,1";
const CONTACT_EMAILS = ["rcodontologiaintegrada@gmail.com", "rogeriosac@gmail.com"];

function Eyebrow({ children, light }) {
  return (
    <span className={`section-eyebrow ${light ? 'section-eyebrow--light' : ''}`}>
      <span className="section-eyebrow__mark" /> {children}
    </span>
  );
}

function HeaderV2() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="brand">
          <img
            src="RC_Horizonta-Amarela-atualizada.png"
            alt="RC Odontologia Integrada"
            className="brand__logo"
          />
        </a>
        <nav className="site-nav">
          <a href="#manutencao">Tratamento</a>
          <a href="#reviews">Avaliações</a>
          <a href="#aparelhos">Aparelhos</a>
          <a href="#clinica">Clínica</a>
          <a href="#equipe">Equipe</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <a href={WHATSAPP_URL} className="btn btn--emerald" style={{padding:'12px 18px', fontSize:13}} target="_blank" rel="noreferrer">
          Avaliar meu caso <span className="arrow" />
        </a>
      </div>
    </header>
  );
}

function HeroV2({ d }) {
  return (
    <section id="top">
      <div className="container">
        <div className="hero__top">
          <div className="hero__index"><strong>00</strong> / Landing page · Ortodontia</div>
          <div className="hero__city">São Braz, Curitiba</div>
          <div className="hero__date"><span className="live" /> Atendendo hoje</div>
        </div>

        <div className="hero">
          <div className="hero__body">
            <div className="hero__right hero__right--legacy">
              <p className="hero__sub">
                {d.sub} <span className="under">Antes do preço, o diagnóstico.</span>
              </p>
              <div className="hero__ctas">
                <a href={WHATSAPP_URL} className="btn btn--emerald" target="_blank" rel="noreferrer">Quero avaliar meu caso <span className="arrow" /></a>
                <a href="#manutencao" className="btn btn--ghost">Como funciona</a>
              </div>
            </div>
          </div>

          <div className="hero__mobile-copy">
            <h1 className="hero__title">
              <span>Ortodontia</span>
              <span className="l2">não é só</span>
              <span className="l3">manutenção.</span>
            </h1>
            <div className="hero__right">
              <p className="hero__sub">
                {d.sub} <span className="under">Antes do preço, o diagnóstico.</span>
              </p>
              <div className="hero__ctas">
                <a href={WHATSAPP_URL} className="btn btn--emerald" target="_blank" rel="noreferrer">Quero avaliar meu caso <span className="arrow" /></a>
                <a href="#manutencao" className="btn btn--ghost">Como funciona</a>
              </div>
            </div>
          </div>

          <div className="hero__photo">
            <div className="hero__content">
            <h1 className="hero__title hero__title--overlay">
              <span>Ortodontia</span>
              <span className="l2">não é só</span>
              <span className="l3">manutenção.</span>
            </h1>
            <div className="ph-label">PH-01 · Retrato — Paciente em consulta</div>
            <div className="ph-center">[ inserir foto principal — orientação landscape ]</div>
            <div className="hero__right hero__right--overlay">
              <p className="hero__sub">
                {d.sub} <span className="under">Antes do preço, o diagnóstico.</span>
              </p>
              <div className="hero__ctas">
                <a href={WHATSAPP_URL} className="btn btn--emerald" target="_blank" rel="noreferrer">Quero avaliar meu caso <span className="arrow" /></a>
                <a href="#manutencao" className="btn btn--ghost">Como funciona</a>
              </div>
            </div>
            </div>
          </div>

          <div className="hero__data">
            <div className="hero__data-cell">
              <span className="k">Localização</span>
              <span className="v">São Braz<br/>Curitiba</span>
            </div>
            <div className="hero__data-cell">
              <span className="k">Especialidades</span>
              <span className="v">Clínica integrada</span>
            </div>
            <div className="hero__data-cell">
              <span className="k">Avaliação</span>
              <span className="v">Antes da indicação</span>
            </div>
            <div className="hero__data-cell">
              <span className="k">Planejamento</span>
              <span className="v">Tempo e plano claros</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TickerV2() {
  const items = ["Diagnóstico individual", "Planejamento claro", "Acompanhamento próximo", "Equipe multidisciplinar", "Curitiba — São Braz"];
  const r = [...items, ...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {r.map((t, i) => (
          <span className="item" key={i}>
            <span className={i % 2 ? "ital" : ""}>{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHead({ idx, title, caption }) {
  return (
    <div className="section-head">
      <div className="section-head__title">
        <Eyebrow>{stripIdx(idx)}</Eyebrow>
        {title}
      </div>
      <div className="section-head__caption">{caption}</div>
    </div>
  );
}

function ManutencaoV2({ d }) {
  return (
    <section className="section section--paper" id="manutencao">
      <div className="container">
        <div className="manut__grid">
          <div className="manut__intro">
            <Eyebrow>Antes de falar em preço</Eyebrow>
            <h2 className="h-xl">
              Ortodontia <em className="em">não é apenas</em> manutenção mensal.
            </h2>
          </div>
          <div className="manut__body">
            {d.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        <div className="pillars-row">
          {d.pillars.map((p, i) => (
            <div className="pillar-cell" key={i}>
              <span className="n">{p.n}</span>
              <span className="t">{p.t}</span>
              <span className="d">{p.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsV2({ d }) {
  const getVisibleCards = () => {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1080) return 2;
    return 3;
  };

  const [active, setActive] = uS(0);
  const [visibleCards, setVisibleCards] = uS(getVisibleCards);
  const maxIndex = Math.max(0, d.items.length - visibleCards);

  uE(() => {
    const onResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  uE(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  uE(() => {
    setActive((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  function go(step) {
    setActive((prev) => {
      if (step > 0) return prev >= maxIndex ? 0 : prev + 1;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  }

  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionHead
          idx={d.eyebrow}
          title={<h2 className="h-xl">Cuidado, clareza,<br/><em className="em">confiança</em>.</h2>}
          caption={<>
            {d.intro}
            <div className="google-pill">
              <span className="stars">★★★★★</span> Avaliações reais — Doctoralia
            </div>
          </>}
        />
        <div className="reviews-carousel" style={{ "--reviews-visible": visibleCards }}>
          <div className="reviews-carousel__top">
            <div className="reviews-carousel__count">{String(active + 1).padStart(2, '0')} / {String(maxIndex + 1).padStart(2, '0')}</div>
            <div className="reviews-carousel__nav">
              <button type="button" className="reviews-carousel__btn" onClick={() => go(-1)} aria-label="Depoimento anterior">←</button>
              <button type="button" className="reviews-carousel__btn" onClick={() => go(1)} aria-label="Próximo depoimento">→</button>
            </div>
          </div>
          <div className="reviews-window">
            <div className="reviews-track" style={{ transform: `translateX(-${active * (100 / visibleCards)}%)` }}>
              {d.items.map((r, i) => (
                <div className="review" key={i}>
                  <span className="stars">{'★'.repeat(r.stars)}</span>
                  <p className="quote">"{r.text}"</p>
                  <div className="meta"><span className="name">{r.name}</span><span>{r.time}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="reviews-carousel__dots" aria-label="Navegação dos depoimentos">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`reviews-carousel__dot ${i === active ? 'reviews-carousel__dot--active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PorqueV2({ d }) {
  return (
    <section className="section section--emerald">
      <div className="container">
        <div className="porque__grid">
          <div className="porque__intro">
            <div style={{marginBottom:24}}><Eyebrow light>{stripIdx(d.eyebrow)}</Eyebrow></div>
            <h2 className="h-xl" style={{color:'var(--emerald-ink)', marginBottom:32}}>
              Por que a avaliação<br/>vem <em className="hot" style={{fontStyle:'italic'}}>antes</em> do valor?
            </h2>
            <div className="porque__body">
              {d.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="porque__aside">
            <div className="porque__list-title">→ Durante a avaliação, analisamos</div>
            <div className="porque__list">
              {d.checks.map((c, i) => (
                <div className="item" key={i}>
                  <span className="n">{String(i+1).padStart(2,'0')}</span>
                  <span className="t">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeneficiosV2({ d }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          idx={d.eyebrow}
          title={<h2 className="h-xl">Um tratamento planejado<br/>para o seu <em className="em">sorriso</em>.</h2>}
          caption={d.intro}
        />
        <div className="benef__grid">
          {d.items.map((it, i) => (
            <div className="benef-cell" key={i}>
              <span className="n">{String(i+1).padStart(2,'0')}</span>
              <span className="t">{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AparelhosV2({ d }) {
  const [active, setActive] = uS(0);
  const it = d.items[active];
  const images = ["ap1.webp", "ap2.webp", "ap3.webp"];
  const sides = [
    ["Estética", "Discrição", "Removível", "Indicado por avaliação"],
    ["Versátil", "Tradicional", "Diferentes correções", "Sob planejamento"],
    ["Conforto", "Praticidade", "Movimentações específicas", "Sob avaliação"],
  ];
  return (
    <section className="section section--paper" id="aparelhos">
      <div className="container">
        <SectionHead
          idx={d.eyebrow}
          title={<h2 className="h-xl">Qual aparelho é<br/><em className="em">melhor</em> para você?</h2>}
          caption={<>{d.intro}<br/><br/><strong style={{color:'var(--ink)'}}>{d.note}</strong></>}
        />

        <div className="aparelhos__tabs">
          {d.items.map((a, i) => (
            <button
              key={i}
              className={`aparelhos__tab ${active === i ? 'aparelhos__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <span className="n">/ {String(i+1).padStart(2,'0')}</span>
              <span className="name">{a.name}</span>
            </button>
          ))}
        </div>

        <div className="aparelhos__panel">
          <div>
            <div className="tag">{it.tag}</div>
            <div className="h">{it.name}</div>
            <p className="desc">{it.desc}</p>
          </div>
          <div className="side">
            <img src={images[active]} alt={`Ilustração do tratamento ${it.name}`} className="aparelhos__image" />
            <h4>Características</h4>
            <ul>
              {sides[active].map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>

        <div className="aparelhos__note">
          <span className="n">Importante</span>
          <span className="t">A escolha do aparelho não deve ser feita apenas pelo preço ou pela aparência — depende sempre do diagnóstico individual.</span>
        </div>
      </div>
    </section>
  );
}

function ClinicaV2({ d }) {
  const gallery = ["f0.webp", "f1.webp", "f2.webp", "f3.webp", "f4.webp", "f5.webp"];

  return (
    <section className="section" id="clinica">
      <div className="container">
        <div className="clinica__grid">
          <div className="clinica__photo">
            <div className="clinica__gallery">
              {gallery.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Ambiente da clínica ${i + 1}`}
                  className={`clinica__gallery-item clinica__gallery-item--${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="clinica__body">
            <div style={{marginBottom:16}}>
              <span className="section-eyebrow section-eyebrow--light">
                <span className="section-eyebrow__mark" /> {stripIdx(d.eyebrow)}
              </span>
            </div>
            <h2 className="h-xl" style={{marginBottom:32}}>
              Uma clínica completa<br/>em <em className="em">Curitiba</em>.
            </h2>
            {d.body.map((p, i) => <p key={i} className="body-p">{p}</p>)}
          </div>
        </div>

        <div className="clinica__stats">
          {d.stats.map((s, i) => (
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

function ProfsV2({ d }) {
  const images = Array.from({ length: 10 }, (_, i) => `dr${i + 1}.png`);
  const teamMembers = [
    { name: "Dr. Rogério Soares A. Carneiro", cro: "CROPR: 15.598" },
    { name: "Dr. José Henrique Gonzaga de Oliveira", cro: "CROPR: 4.284" },
    { name: "Dra. Eliane Mendes", cro: "CROPR: 19.023" },
    { name: "Dra. Mariana Martins", cro: "CROPR: 30.875" },
    { name: "Dra. Pamela Antunes", cro: "CROPR: 33.119" },
    { name: "Dra. Cassia Gerber M. Brescovici", cro: "CROPR: 37.777" },
    { name: "Dr. Luiz Felipe de Mello Paredes", cro: "CROPR: 15.362" },
    { name: "Dra. Bruna Caroline de Sousa Coura", cro: "CROPR: 38.893" },
    { name: "Dra.Bruna Campos Caporal", cro: "CROPR: 31.146" },
    { name: "Dra. Maria Fernanda Gbur Barbosa", cro: "CROPR: 38.397" },
  ].map((member, i) => ({
    ...member,
    image: images[i],
    role: "",
    quote: "",
    highlight: false,
  }));

  return (
    <section className="section section--paper" id="equipe">
      <div className="container">
        <SectionHead
          idx={d.eyebrow}
          title={<h2 className="h-xl">Profissionais para<br/><em className="em">orientar</em> o seu caso.</h2>}
          caption={d.intro}
        />
        <div className="profs__grid">
          {teamMembers.map((p, i) => (
            <div className="prof" key={i}>
              <div className="prof__photo">
                <img src={p.image} alt={p.name} className="prof__img" />
              </div>
              <div className="prof__body">
                <div className="prof__name">{p.name}</div>
                <div className="prof__cro">{p.cro}</div>
                {p.role && <div className="prof__role">→ {p.role}</div>}
                {p.quote && <p className="prof__quote">{p.quote}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PagamentoV2({ d }) {
  return (
    <section className="section section--emerald" id="pagamento">
      <div className="container">
        <div className="pgto__grid">
          <div className="pgto__head">
            <div style={{marginBottom:16}}><Eyebrow light>{stripIdx(d.eyebrow)}</Eyebrow></div>
            <h2 className="h-xl">Condições de <em className="hot" style={{fontStyle:'italic'}}>pagamento</em>.</h2>
            <div className="pgto__intro">
              {d.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="pgto__body">
            <div className="pgto__bullets">
              <div className="row">
                <span className="n">01</span>
                <div>
                  <div className="t">Plano apresentado após a avaliação</div>
                  <div className="d">Você recebe o diagnóstico, o aparelho indicado e as condições para o seu caso.</div>
                </div>
              </div>
              <div className="row">
                <span className="n">02</span>
                <div>
                  <div className="t">Possibilidade de parcelamento</div>
                  <div className="d">Mediante análise, dentro do plano de tratamento completo.</div>
                </div>
              </div>
              <div className="row">
                <span className="n">03</span>
                <div>
                  <div className="t">Sem foco em mensalidade isolada</div>
                  <div className="d">O tratamento inclui diagnóstico, planejamento e acompanhamento — não apenas a manutenção.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormV2() {
  const [name, setName] = uS("");
  const [phone, setPhone] = uS("");
  const [goal, setGoal] = uS("");
  const [status, setStatus] = uS("");
  const [done, setDone] = uS(false);

  const goals = ["Alinhar os dentes", "Corrigir a mordida", "Avaliar aparelho para filho(a)", "Trocar ou voltar a usar aparelho", "Entender qual aparelho é indicado"];
  const statuses = ["Ainda não", "Sim, mas não iniciei", "Já uso aparelho", "Já usei antes"];

  const phoneDigits = phone.replace(/\D/g, "").slice(0, 11);
  const valid = name.trim() && phoneDigits.length === 11 && goal && status;

  function formatPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits ? `(${digits}` : "";
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function handlePhoneChange(e) {
    setPhone(formatPhone(e.target.value));
  }

  function submit(e) {
    e.preventDefault();
    if (!valid) return;
    const subject = "Novo contato pelo site - Ortodontia";
    const body = [
      "Novo contato recebido pelo formulário do site.",
      "",
      `Nome: ${name}`,
      `WhatsApp: ${phoneDigits}`,
      `Interesse: ${goal}`,
      `Situação atual: ${status}`,
    ].join("\n");
    const mailtoUrl = `mailto:${CONTACT_EMAILS.join(",")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setTimeout(() => window.open(WHATSAPP_URL, "_blank"), 700);
    setDone(true);
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <section className="section" id="form">
      <div className="container">
        <div className="form-wrap">
          <div className="form-wrap__top">
            <div style={{marginBottom:16}}><Eyebrow>Formulário</Eyebrow></div>
            <h2 className="h-l">Conte rapidamente o que você deseja <em className="em">avaliar</em>.</h2>
            <p className="lead">Antes de falar em manutenção, é importante entender o seu caso. As respostas chegam por WhatsApp à equipe da RC.</p>
          </div>

          <form className="form-wrap__body" onSubmit={submit}>
            <div className="field-grid">
              <div className="field-row">
                <label className="field-row__label" htmlFor="v2-name">
                  Nome <span className="req">*</span>
                  <span className="field-row__hint">como podemos te chamar</span>
                </label>
                <input id="v2-name" className="input" placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} required />
              </div>

              <div className="field-row">
                <label className="field-row__label" htmlFor="v2-phone">
                  WhatsApp <span className="req">*</span>
                  <span className="field-row__hint">com DDD</span>
                </label>
                <input id="v2-phone" className="input" placeholder="(00) 00000-0000" value={phone} onChange={handlePhoneChange} inputMode="numeric" maxLength={15} required />
              </div>

              <div className="field-row">
                <span className="field-row__label">
                  O que avaliar <span className="req">*</span>
                  <span className="field-row__hint">escolha uma opção</span>
                </span>
                <div className="chips">
                  {goals.map(g => (
                    <button key={g} type="button" className={`chip ${goal === g ? 'chip--active' : ''}`} onClick={() => setGoal(g)}>{g}</button>
                  ))}
                </div>
              </div>

              <div className="field-row">
                <span className="field-row__label">
                  Situação <span className="req">*</span>
                  <span className="field-row__hint">avaliação ortodôntica anterior</span>
                </span>
                <div className="chips">
                  {statuses.map(s => (
                    <button key={s} type="button" className={`chip ${status === s ? 'chip--active' : ''}`} onClick={() => setStatus(s)}>{s}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-submit">
              <button type="submit" className="btn btn--emerald" disabled={!valid} style={{opacity: valid ? 1 : 0.5, cursor: valid ? 'pointer' : 'not-allowed'}}>
                Receber orientação pelo WhatsApp <span className="arrow" />
              </button>
              <p className="note">Ao enviar, abrimos uma conversa no WhatsApp com sua mensagem pronta. Seus dados são usados apenas para esta orientação.</p>
            </div>
          </form>
        </div>

        {done && <div className="toast"><span className="ok" /> Mensagem aberta no WhatsApp</div>}
      </div>
    </section>
  );
}

function FAQV2({ d }) {
  const [open, setOpen] = uS(0);
  return (
    <section className="section section--paper" id="faq">
      <div className="container">
        <SectionHead
          idx={d.eyebrow}
          title={<h2 className="h-xl">Perguntas frequentes<br/>sobre tratamento <em className="em">ortodôntico</em>.</h2>}
          caption={<>Reunimos as dúvidas mais comuns que chegam até a RC antes da primeira avaliação.</>}
        />
        <div className="faq__list">
          {d.items.map((it, i) => (
            <div className={`faq-row ${open === i ? 'faq-row--open' : ''}`} key={i}>
              <button className="faq-row__btn" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-row__n">/ {String(i+1).padStart(2,'0')}</span>
                <span className="faq-row__q">{it.q}</span>
                <span className="faq-row__toggle" />
              </button>
              <div className="faq-row__panel">
                <div className="faq-row__content">
                  <p className="faq-row__answer">{it.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinalV2({ d }) {
  return (
    <section className="section section--ink cta-final">
      <div className="cta-final__aurora" aria-hidden="true" />
      <div className="cta-final__aurora-glow" aria-hidden="true" />
      <div className="container">
        <div style={{marginBottom: 'clamp(48px, 6vw, 80px)'}}>
          <Eyebrow light>{stripIdx(d.eyebrow)}</Eyebrow>
        </div>
        <div className="cta-final__inner">
          <h2>
            Avalie o seu<br/>caso <span className="ital">— antes</span><br/>do orçamento.
          </h2>
          <div>
            {d.body.map((p, i) => <p key={i}>{p}</p>)}
            <a href={WHATSAPP_URL} className="btn btn--emerald" target="_blank" rel="noreferrer">{d.cta} <span className="arrow" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterV2() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__cols">
          <div className="site-footer__logo-col">
            <img
              src="RC_Horizonta-Amarela-atualizada.png"
              alt="RC Odontologia Integrada"
              className="site-footer__logo"
            />
          </div>
          <div>
            <h4>Localização</h4>
            <ul>
              <li>São Braz, Curitiba — PR</li>
              <li>Próximo a Santa Felicidade</li>
            </ul>
          </div>
          <div>
            <h4>Atendimento</h4>
            <ul>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Agendamento</a></li>
              <li><a href={REVIEWS_URL} target="_blank" rel="noreferrer">Google Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4>Navegação</h4>
            <ul>
              <li><a href="#manutencao">Tratamento</a></li>
              <li><a href="#aparelhos">Aparelhos</a></li>
              <li><a href="#equipe">Equipe</a></li>
              <li><a href="#faq">Dúvidas</a></li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© RC Odontologia Integrada · Todos os direitos reservados</span>
          <span>Desenvolvido por SuperDental®</span>
        </div>
      </div>
    </footer>
  );
}

function AppV2() {
  const D = window.LP_DATA;
  return (
    <>
      <HeaderV2 />
      <main>
        <HeroV2 d={D.hero} />
        <TickerV2 />
        <ManutencaoV2 d={D.manutencao} />
        <ReviewsV2 d={D.reviews} />
        <PorqueV2 d={D.porque} />
        <BeneficiosV2 d={D.beneficios} />
        <AparelhosV2 d={D.aparelhos} />
        <ClinicaV2 d={D.clinica} />
        <ProfsV2 d={D.profissionais} />
        <PagamentoV2 d={D.pagamento} />
        <FormV2 />
        <FAQV2 d={D.faq} />
        <CTAFinalV2 d={D.ctaFinal} />
      </main>
      <FooterV2 />
      <div className="sticky-cta">
        <a href={WHATSAPP_URL} className="btn btn--emerald" target="_blank" rel="noreferrer">Avaliar meu caso <span className="arrow" /></a>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AppV2 />);

/* global React, ReactDOM */
const { useState: uS, useEffect: uE } = React;

const stripIdx = (s) => (s || '').replace(/^\s*\d+\s*\/\s*/, '');
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5541998069893&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";
const REVIEWS_URL = "https://www.google.com/search?q=rc+odontologia+integrada#lrd=0x94dce1c3ec53d02f:0xc545acd00e31deaf,1";

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
  const avatarTones = ["#7A57C8", "#7A4C34", "#8AA0AF", "#4F7A5B", "#A1658C", "#6F88D8", "#7C8B58"];
  const getVisibleCards = () => {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 1080) return Math.min(2, d.items.length);
    return Math.min(3, d.items.length);
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

  function getInitial(name) {
    return (name || "?").trim().charAt(0).toUpperCase();
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
        <div className="reviews-carousel reviews-carousel--google" style={{ "--reviews-visible": visibleCards }}>
          <div className="reviews-window">
            <div className="reviews-track" style={{ transform: `translateX(-${active * (100 / visibleCards)}%)` }}>
              {d.items.map((r, i) => (
                <div className="review" key={i}>
                  <div className="review__card">
                    <div className="review__head">
                      <div className="review__identity">
                        <span
                          className="review__avatar"
                          style={{ background: avatarTones[i % avatarTones.length] }}
                          aria-hidden="true"
                        >
                          {getInitial(r.name)}
                        </span>
                        <div className="review__person">
                          <span className="review__name">{r.name}</span>
                          <span className="review__time">{r.time}</span>
                        </div>
                      </div>
                      <span className="review__google" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M21.8 12.23c0-.72-.06-1.25-.2-1.8H12v3.39h5.64c-.11.84-.74 2.11-2.14 2.96l-.02.11 3.02 2.34.21.02c1.92-1.77 3.09-4.38 3.09-7.02Z" />
                          <path fill="#34A853" d="M12 22c2.76 0 5.08-.91 6.77-2.47l-3.23-2.5c-.86.6-2.02 1.03-3.54 1.03-2.7 0-4.99-1.77-5.81-4.22l-.1.01-3.13 2.43-.03.1C4.61 19.68 8.03 22 12 22Z" />
                          <path fill="#FBBC05" d="M6.19 13.84A6.08 6.08 0 0 1 5.86 12c0-.64.12-1.25.32-1.84l-.01-.12-3.17-2.47-.1.05A9.96 9.96 0 0 0 2 12c0 1.59.38 3.1 1.04 4.38l3.15-2.54Z" />
                          <path fill="#EA4335" d="M12 5.94c1.92 0 3.21.83 3.95 1.53l2.88-2.81C17.07 3.03 14.76 2 12 2 8.03 2 4.61 4.31 2.94 7.62l3.28 2.54C7.04 7.71 9.3 5.94 12 5.94Z" />
                        </svg>
                      </span>
                    </div>
                    <div className="review__rating">
                      <span className="stars">{'★'.repeat(r.stars)}</span>
                      <span className="review__verified" aria-label="Avaliação verificada">
                        <svg viewBox="0 0 20 20">
                          <path fill="#4F86F7" d="M10 1.5 12.2 3l2.63-.2 1.36 2.26 2.3 1.28-.2 2.64L19.5 11l-1.5 2.2.2 2.63-2.26 1.36-1.28 2.3-2.64-.2L10 18.5 7.8 17l-2.63.2-1.36-2.26-2.3-1.28.2-2.64L.5 9l1.5-2.2-.2-2.63L4.06 2.8l1.28-2.3 2.64.2L10 1.5Z" />
                          <path fill="#FFF" d="m8.54 12.9-2.1-2.1 1.02-1.02 1.08 1.08 3.23-3.23 1.02 1.02-4.25 4.25Z" />
                        </svg>
                      </span>
                    </div>
                    <p className="quote">{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reviews-carousel__nav">
            <button type="button" className="reviews-carousel__btn" onClick={() => go(-1)} aria-label="Depoimento anterior">‹</button>
            <button type="button" className="reviews-carousel__btn" onClick={() => go(1)} aria-label="Próximo depoimento">›</button>
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
              Por que a avaliação<br/>vem <em style={{fontStyle:'italic', color:'#EBE7DD'}}>antes</em> do valor?
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
              <span className="section-eyebrow section-eyebrow--light clinica-eyebrow">
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
            <h2 className="h-xl">Condições de <em style={{fontStyle:'italic', color:'#EBE7DD'}}>pagamento</em>.</h2>
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
        <FAQV2 d={D.faq} />
      </main>
      <FooterV2 />
      <a
        href={WHATSAPP_URL}
        className="desktop-whatsapp-fab"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M19.11 17.28c-.27-.14-1.58-.78-1.83-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.15.18-.31.21-.58.07-.27-.14-1.12-.41-2.14-1.31-.79-.7-1.33-1.57-1.49-1.84-.15-.27-.02-.41.11-.55.12-.12.27-.31.4-.47.13-.15.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.46.07-.7.34-.24.27-.92.9-.92 2.19 0 1.29.94 2.54 1.07 2.72.13.18 1.85 2.83 4.48 3.97.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.58-.64 1.8-1.26.22-.62.22-1.15.15-1.26-.06-.11-.24-.18-.51-.32Z" fill="currentColor" />
          <path d="M16.02 3.2c-7.08 0-12.8 5.72-12.8 12.79 0 2.26.59 4.47 1.71 6.42L3 29l6.75-1.77a12.8 12.8 0 0 0 6.27 1.61h.01c7.07 0 12.79-5.72 12.79-12.79 0-3.43-1.34-6.66-3.77-9.08A12.7 12.7 0 0 0 16.02 3.2Zm0 23.48h-.01a10.7 10.7 0 0 1-5.46-1.49l-.39-.23-4.01 1.05 1.07-3.91-.25-.4a10.62 10.62 0 0 1-1.63-5.71c0-5.9 4.8-10.7 10.7-10.7 2.86 0 5.55 1.11 7.57 3.13a10.64 10.64 0 0 1 3.13 7.57c0 5.9-4.8 10.7-10.69 10.7Z" fill="currentColor" />
        </svg>
      </a>
      <div className="sticky-cta">
        <a href={WHATSAPP_URL} className="btn btn--emerald" target="_blank" rel="noreferrer">Avaliar meu caso <span className="arrow" /></a>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AppV2 />);

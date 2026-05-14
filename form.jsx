/* global React */
const { useState: useStateF } = React;

function LeadForm() {
  const [name, setName] = useStateF("");
  const [phone, setPhone] = useStateF("");
  const [goal, setGoal] = useStateF("");
  const [status, setStatus] = useStateF("");
  const [submitted, setSubmitted] = useStateF(false);

  const goals = [
    "Alinhar os dentes",
    "Corrigir a mordida",
    "Avaliar aparelho para meu filho/minha filha",
    "Trocar ou voltar a usar aparelho",
    "Entender qual aparelho é indicado para meu caso",
  ];
  const statuses = [
    "Ainda não",
    "Sim, mas não iniciei o tratamento",
    "Já uso aparelho",
    "Já usei aparelho antes",
  ];

  const valid = name.trim() && phone.trim() && goal && status;

  function handleSubmit(e) {
    e.preventDefault();
    if (!valid) return;
    const msg = `Olá! Vim pela página de ortodontia da RC Odontologia.\n\nTenho interesse em avaliar: ${goal}\nMinha situação atual: ${status}\n\nGostaria de receber orientação sobre avaliação, tipo de aparelho e condições de pagamento.\n\n— ${name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="section" id="form">
      <div className="container">
        <div className="form-wrap">
          <div className="form-wrap__head">
            <div className="eyebrow">09 / Formulário</div>
            <h2 className="h-1" style={{marginTop:16, marginBottom:16}}>
              Conte rapidamente o que você deseja <span className="italic-serif" style={{color:'var(--accent)'}}>avaliar</span>.
            </h2>
            <p className="lead">
              Antes de falar em manutenção, é importante entender o seu caso. Preencha as informações abaixo para que a equipe da RC possa orientar você sobre avaliação, tipo de aparelho, planejamento e condições de pagamento.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row form-row--2">
              <div className="field">
                <label className="field__label" htmlFor="name">Nome</label>
                <input
                  id="name"
                  className="field__input"
                  type="text"
                  placeholder="Como podemos te chamar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="field">
                <label className="field__label" htmlFor="phone">WhatsApp</label>
                <input
                  id="phone"
                  className="field__input"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field" style={{marginBottom:24}}>
              <label className="field__label">O que você gostaria de avaliar?</label>
              <div className="options">
                {goals.map((g) => (
                  <label
                    key={g}
                    className={`option ${goal === g ? 'option--selected' : ''}`}
                  >
                    <span className="option__radio" />
                    <input
                      type="radio"
                      name="goal"
                      value={g}
                      checked={goal === g}
                      onChange={() => setGoal(g)}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            <div className="field" style={{marginBottom:32}}>
              <label className="field__label">Você já passou por uma avaliação ortodôntica?</label>
              <div className="options">
                {statuses.map((s) => (
                  <label
                    key={s}
                    className={`option ${status === s ? 'option--selected' : ''}`}
                  >
                    <span className="option__radio" />
                    <input
                      type="radio"
                      name="status"
                      value={s}
                      checked={status === s}
                      onChange={() => setStatus(s)}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn--primary"
              disabled={!valid}
              style={{opacity: valid ? 1 : 0.5, cursor: valid ? 'pointer' : 'not-allowed'}}
            >
              Receber orientação pelo WhatsApp <span className="arrow" />
            </button>

            <p className="form-disclaimer">
              Ao enviar, abriremos uma conversa no WhatsApp com a mensagem já preparada. Seus dados são usados apenas para esta orientação.
            </p>
          </form>
        </div>

        {submitted && (
          <div className="toast">
            <span style={{color:'var(--highlight)'}}>✓</span> Pronto! Mensagem aberta no WhatsApp.
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- FAQ ----------
function FAQ({ data }) {
  const [open, setOpen] = useStateF(0);
  return (
    <section className="section section--alt" id="faq">
      <div className="container">
        <div className="faq__head">
          <div className="eyebrow">{data.eyebrow}</div>
          <h2 className="h-1" style={{marginTop:16}}>
            Perguntas frequentes<br/>sobre tratamento <span className="italic-serif" style={{color:'var(--accent)'}}>ortodôntico</span>.
          </h2>
        </div>

        <div className="faq__list">
          {data.items.map((item, i) => (
            <div className={`faq-item ${open === i ? 'faq-item--open' : ''}`} key={i}>
              <button className="faq-item__btn" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__panel">
                <div className="faq-item__content">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- CTA Final ----------
function CTAFinal({ data }) {
  return (
    <section className="section cta-final" id="cta">
      <div className="container">
        <div className="cta-final__grid">
          <div>
            <div className="eyebrow" style={{color:'rgba(244,239,230,0.6)'}}>{data.eyebrow}</div>
            <h2 style={{marginTop:24}}>
              Quero entender qual tratamento ortodôntico faz <span className="italic-serif" style={{color:'var(--highlight)'}}>sentido</span> para mim.
            </h2>
          </div>
          <div>
            {data.body.map((p, i) => <p key={i}>{p}</p>)}
            <a href="#form" className="btn btn--primary" style={{marginTop:24}}>
              {data.cta} <span className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <div className="brand-line">RC Odontologia <em style={{fontStyle:'italic'}}>Integrada</em></div>
            <p style={{maxWidth:'36ch', fontSize:14}}>Clínica multidisciplinar em São Braz, próxima à região de Santa Felicidade, em Curitiba.</p>
          </div>
          <div>
            <h4>Endereço</h4>
            <ul>
              <li>São Braz</li>
              <li>Curitiba — PR</li>
              <li>Próx. Santa Felicidade</li>
            </ul>
          </div>
          <div>
            <h4>Atendimento</h4>
            <ul>
              <li>WhatsApp</li>
              <li>Agendamento online</li>
              <li>Google Reviews</li>
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
          <span>LP de Ortodontia · Curitiba</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { LeadForm, FAQ, CTAFinal, Footer });

/* global React, ReactDOM, useTweaks, TweaksPanel, TweakSection, TweakColor, TweakRadio, TweakSelect */
const { useEffect: useEffectApp } = React;

const DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "esmalte",
  "type": "instrument",
  "highlight": "#C8865A"
}/*EDITMODE-END*/;

const PALETTES = {
  esmalte: {
    name: "Esmalte (default)",
    bg: "#F4EFE6", bg2: "#EBE4D6", surface: "#FFFDF8",
    ink: "#1A1F1B", ink2: "#41504A", ink3: "#6C7A73",
    accent: "#1F3B2D", accentInk: "#F4EFE6",
    highlight: "#C8865A",
  },
  sereno: {
    name: "Sereno",
    bg: "#ECF1F4", bg2: "#DEE6EC", surface: "#FFFFFF",
    ink: "#0E1B27", ink2: "#3A4A5A", ink3: "#6A7989",
    accent: "#11243A", accentInk: "#ECF1F4",
    highlight: "#D88A6F",
  },
  petala: {
    name: "Pétala",
    bg: "#FAF4EE", bg2: "#F2E9DF", surface: "#FFFDF8",
    ink: "#231619", ink2: "#4A3741", ink3: "#7A6973",
    accent: "#3B2235", accentInk: "#FAF4EE",
    highlight: "#C68D72",
  },
  carbono: {
    name: "Carbono",
    bg: "#F1EFEC", bg2: "#E5E2DD", surface: "#FFFFFF",
    ink: "#161616", ink2: "#3D3D3D", ink3: "#737373",
    accent: "#161616", accentInk: "#F1EFEC",
    highlight: "#B89968",
  },
};

const TYPES = {
  instrument: { serif: '"Instrument Serif", Georgia, serif', sans: '"Manrope", "Inter", sans-serif' },
  spectral:   { serif: '"Spectral", Georgia, serif',           sans: '"Outfit", sans-serif' },
  cormorant:  { serif: '"Cormorant Garamond", Georgia, serif', sans: '"Work Sans", sans-serif' },
};

function applyTokens(t) {
  const p = PALETTES[t.palette] || PALETTES.esmalte;
  const ty = TYPES[t.type] || TYPES.instrument;
  const r = document.documentElement.style;
  r.setProperty('--bg', p.bg);
  r.setProperty('--bg-2', p.bg2);
  r.setProperty('--surface', p.surface);
  r.setProperty('--ink', p.ink);
  r.setProperty('--ink-2', p.ink2);
  r.setProperty('--ink-3', p.ink3);
  r.setProperty('--accent', p.accent);
  r.setProperty('--accent-ink', p.accentInk);
  r.setProperty('--highlight', t.highlight || p.highlight);
  r.setProperty('--font-serif', ty.serif);
  r.setProperty('--font-sans', ty.sans);
}

function App() {
  const [t, setTweak] = useTweaks(DEFAULTS);
  useEffectApp(() => { applyTokens(t); }, [t]);

  const D = window.LP_DATA;

  return (
    <>
      <Header />
      <main>
        <Hero data={D.hero} layout="editorial" />
        <Marquee />
        <Manutencao data={D.manutencao} />
        <Reviews data={D.reviews} />
        <Porque data={D.porque} />
        <Beneficios data={D.beneficios} />
        <Aparelhos data={D.aparelhos} />
        <Clinica data={D.clinica} />
        <Profissionais data={D.profissionais} />
        <Pagamento data={D.pagamento} />
        <LeadForm />
        <FAQ data={D.faq} />
        <CTAFinal data={D.ctaFinal} />
      </main>
      <Footer />

      <div className="sticky-cta">
        <a href="#form" className="btn btn--primary">Quero avaliar meu caso <span className="arrow" /></a>
      </div>

      <TweaksPanel>
        <TweakSection title="Paleta">
          <TweakSelect
            label="Tema de cores"
            value={t.palette}
            onChange={(v) => setTweak('palette', v)}
            options={Object.entries(PALETTES).map(([k, v]) => ({ value: k, label: v.name }))}
          />
          <TweakColor
            label="Acento (highlight)"
            value={t.highlight}
            onChange={(v) => setTweak('highlight', v)}
            options={["#C8865A", "#D88A6F", "#B89968", "#6F9E80", "#C9A66B"]}
          />
        </TweakSection>
        <TweakSection title="Tipografia">
          <TweakRadio
            label="Pareamento"
            value={t.type}
            onChange={(v) => setTweak('type', v)}
            options={[
              { value: 'instrument', label: 'Instrument' },
              { value: 'spectral',   label: 'Spectral' },
              { value: 'cormorant',  label: 'Cormorant' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

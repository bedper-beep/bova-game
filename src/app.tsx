
export default function App() {
  return (
    <main className="nova">
      <header className="topbar">
        <div className="logo">NOVA<span>.</span></div>
        <div className="status">● SYSTEM ONLINE</div>
      </header>

      <section className="hero">
        <p className="eyebrow">WELCOME TO THE FUTURE</p>
        <h1>ENTER<br /><span>THE NEXUS</span></h1>
        <p className="subtitle">
          Your world. Your squad. Your next legend.
        </p>
        <button onClick={() => alert("Welcome to NOVA. Your journey begins soon.")}>
          ENTER THE LOBBY <span>↗</span>
        </button>
      </section>

      <section className="world">
        <div className="planet"></div>
        <div className="platform"></div>
        <div className="character">
          <div className="head"></div>
          <div className="body"></div>
          <div className="leg left"></div>
          <div className="leg right"></div>
        </div>
        <div className="world-label">SECTOR 01 — NEXUS CITY</div>
      </section>

      <footer>
        <span>NOVA PROJECT</span>
        <span>BUILD 001 · PRE-ALPHA</span>
      </footer>
    </main>
  );
}

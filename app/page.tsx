import Hero from "../components/Hero/Hero";
import ScrollBackground from "../components/ScrollBackground/ScrollBackground";

export default function Home() {
  return (
    <main className="page">
      <ScrollBackground />
      <Hero />

      <section className="section">
        <div className="glassCard">
          <h2>Sección 2</h2>
          <p style={{ marginTop: 16 }}>
            Texto de relleno para que haya altura y se note el scroll del fondo.
          </p>
          <div style={{ height: 700 }} />
        </div>
      </section>
    </main>
  );
}

import Hero from "../components/Hero/Hero";
import ScrollBackground from "../components/ScrollBackground/ScrollBackground";

export default function Home() {
  return (
    <main className="page">
      <ScrollBackground />
      <Hero />

      <section className="section">
        <div className="glassCard">
          <h2>Somos expertos en simplificar tu gestión</h2>
          <p>
            Mientras tú construyes, vendes, atiendes y haces que tu proyecto crezca,
            nosotros nos encargamos del terreno invisible: contabilidad clara, gestión precisa y decisiones.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="glassCard">
          <h2>Otra sección</h2>
          <p>Contenido...</p>
        </div>
      </section>

      <section className="section">
        <div className="glassCard">
          <h2>Otra sección</h2>
          <p>Contenido...</p>
        </div>
      </section>
    </main>
  );
}

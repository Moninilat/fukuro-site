import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
     
      {/* Tarjeta */}
      <div className={styles.card}>
        {/* Izquierda */}
        <div className={styles.left}>
          <div className={styles.brandRow}>
            <h1 className={styles.brand}>FUKURO</h1>
            <Image
              src="/assets/hero-owl.jpg"
              alt="Fukuro"
              width={44}
              height={44}
              className={styles.owl}
            />
          </div>

          <p className={styles.subtitle}>ADMINISTRACIÓN Y CONTABILIDAD</p>

          <h2 className={styles.headline}>
            <span className={styles.white}>SIMPLIFICA</span>
            <br />
            <span className={styles.dark}>TU GESTIÓN</span>
            <br />
            <span className={styles.bold}>CON NOSOTROS</span>
          </h2>

          <div className={styles.buttons}>
            <button className={styles.btnGhost}>CONOCE MÁS</button>
            <button className={styles.btnPrimary}>SOLICITA TU ASESORÍA</button>
          </div>
        </div>

        {/* Derecha */}
        <div className={styles.right}>
          <Image
            src="/assets/Fukuro_Hero.png"
            alt="Fukuro multitarea"
            fill
            priority
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        {/* Imagen izquierda (SIN card) */}
        <div className={styles.left}>
          <Image
            src="/assets/about-section.png"
            alt="Sobre Fukuro"
            fill
            className={styles.image}
            priority={false}
          />
        </div>

        {/* Card derecha */}
        <div className={styles.rightCard}>
          <h2 className={styles.title}>
            Somos expertos <br />
            en <span className={styles.bold}>simplificar</span> <br />
            tu gestión
          </h2>

          <p className={styles.text}>
            Mientras tú construyes, vendes, atiendes y haces que tu proyecto crezca,
            nosotros nos encargamos del terreno invisible: contabilidad clara, gestión
            precisa y decisiones respaldadas por números que hablan sin rodeos.
          </p>

          <button className={styles.cta}>Ordenemos tus finanzas juntos</button>
        </div>
      </div>
    </section>
  );
}

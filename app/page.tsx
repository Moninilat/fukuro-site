import Hero from "../components/Hero/Hero";
import ScrollBackground from "../components/ScrollBackground/ScrollBackground";
import AboutSection from "../components/AboutSection/AboutSection";

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <AboutSection />
    </main>
  );
}

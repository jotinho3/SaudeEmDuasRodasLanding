import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import bgVideo from '../../assets/0526(1).mp4';
import flexibilityIcon from '../../assets/icons8-flexibility-64.png';
import preventionIcon from '../../assets/icons8-prevention-64.png';
import healthIcon from '../../assets/icons8-health-64.png';
import Header from "./components/Header";
import sectionThirdImage from '../../assets/pexels-chermiti-mohamed-3049225.jpg';

const ParallaxSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && sectionRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const videoHeight = videoRef.current.offsetHeight;
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const offset = (scrollTop - sectionTop) / (sectionHeight + window.innerHeight);
        const translateY = Math.round(offset * videoHeight);

        videoRef.current.style.transform = `translateY(-${translateY}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.sectionThird} ref={sectionRef} aria-label="Section 3">
      <div className={styles.sectionThirdFlex}>
        <img className={styles.sectionThirdImage} src={sectionThirdImage} alt="Health and wellness" />
        <div className={styles.sectionThirdContent}>
          <h3>Objetivo</h3>
          <h2>Promovendo Saúde</h2>
          <p>
            O alongamento diário é essencial para ciclistas, motociclistas, cadeirantes e motoboys, pois melhora a flexibilidade, previne lesões e aumenta o desempenho. De acordo com estudos científicos, como o da revista Journal of Sports Sciences, o alongamento regular melhora a eficiência muscular e reduz o risco de lesões musculoesqueléticas.
          </p>
          <button>Saber mais</button>
        </div>
      </div>
    </section>
  );
};

const MainPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <Header />

      <main>
        <section className={styles.sectionFirst} aria-label="Section 1">
          <video className={styles.bgVideoStyle} autoPlay muted loop ref={videoRef} src={bgVideo} />
          <div className={styles.sectionFirstText}>
            <h1>Descubra o poder do alongamento e transforme sua vida com uma saúde flexível e plena!</h1>
            <div>
              <button className={styles.sectionFirstButton}>Saber Mais</button>
            </div>
          </div>
        </section>

        <section className={styles.sectionSecond} aria-label="Section 2">
          <div className={styles.sectionSecondFlex}>
            <span>Benefícios</span>
            <h3>
              Aqui serão apresentados alguns dos benefícios que o leitor terá ao desfrutar do conteúdo do nosso e-book.
            </h3>

            <div className={styles.sectionSecondCardFlex}>
              <div className={styles.sectionSecondCard}>
                <img src={flexibilityIcon} alt="Flexibilidade" />
                <h4>Flexibilidade</h4>
                <p>Obtenha liberdade de movimento e desfrute de uma vida sem limitações.</p>
              </div>

              <div className={styles.sectionSecondCard}>
                <img src={preventionIcon} alt="Bem-estar" />
                <h4>Bem-estar</h4>
                <p>Promova harmonia física e mental, encontrando o equilíbrio e serenidade.</p>
              </div>

              <div className={styles.sectionSecondCard}>
                <img src={healthIcon} alt="Prevenção" />
                <h4>Prevenção</h4>
                <p>Proteja-se de lesões, fortalecendo seu corpo e evitando problemas futuros.</p>
              </div>
            </div>
          </div>
        </section>

        <ParallaxSection />

        <section className="section section-4" aria-label="Section 4">
          {/* Section 4 content goes here */}
        </section>
      </main>
    </>
  );
};

export default MainPage;

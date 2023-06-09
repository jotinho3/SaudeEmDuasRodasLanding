import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import bgVideo from "../../assets/0526(1).mp4";
import flexibilityIcon from "../../assets/icons8-flexibility-64.png";
import preventionIcon from "../../assets/icons8-prevention-64.png";
import healthIcon from "../../assets/icons8-health-64.png";
import Header from "./components/Header";
import { motion } from "framer-motion";
import sectionThirdImage from "../../assets/pexels-chermiti-mohamed-3049225.jpg";
import sectionFourthSmartphone from "../../assets/CelularSaudeEmDuasRodas.png";
import sectionFourthTablet from "../../assets/TabletSaudeEmDuasRodas.png";
import sectionFourthKindle from "../../assets/KindleSaudeEmDuasRodas.png";
import ShoppingCart from '../../assets/shopping-cart.svg'


const ParallaxSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && sectionRef.current) {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const videoHeight = videoRef.current.offsetHeight;
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const offset =
          (scrollTop - sectionTop) / (sectionHeight + window.innerHeight);
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
    <section
      className={styles.sectionThird}
      ref={sectionRef}
      aria-label="Nosso objetivo"
      id="objetivo"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        className={styles.sectionThirdFlex}
      >
        <img
          className={styles.sectionThirdImage}
          src={sectionThirdImage}
          alt="Health and wellness"
        />
        <div className={styles.sectionThirdContent}>
          <h3>Objetivo</h3>
          <h2>Promovendo Saúde</h2>
          <p>
            O alongamento diário é essencial para ciclistas, motociclistas,
            cadeirantes e motoboys, pois melhora a flexibilidade, previne lesões
            e aumenta o desempenho. De acordo com estudos científicos, como o da
            revista Journal of Sports Sciences, o alongamento regular melhora a
            eficiência muscular e reduz o risco de lesões musculoesqueléticas.
          </p>
          <a href="https://www.tandfonline.com/doi/abs/10.1080/02640410410001730205">
            Saber mais
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const MainPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <Header />

      <main>
        <section
          className={styles.sectionFirst}
          aria-label="Introdução da página"
          id="inicio"
        >
          <video
            className={styles.bgVideoStyle}
            autoPlay
            muted
            loop
            ref={videoRef}
            src={bgVideo}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            className={styles.sectionFirstText}
          >
            <h1>
              Descubra o poder do alongamento e transforme sua vida com uma
              saúde flexível e plena!
            </h1>
            <div>
              <button className={styles.sectionFirstButton}>Saber Mais</button>
            </div>
          </motion.div>
        </section>

        <section className={styles.sectionSecond} aria-label="Benefícios" id="beneficios">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className={styles.sectionSecondFlex}
          >
            <span>Benefícios</span>
            <h3>
              Aqui serão apresentados alguns dos benefícios que o leitor terá ao
              desfrutar do conteúdo do nosso e-book.
            </h3>

            <div className={styles.sectionSecondCardFlex}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: false }}
                className={styles.sectionSecondCard}
              >
                <motion.img src={flexibilityIcon} alt="Flexibilidade" />
                <h4>Flexibilidade</h4>
                <p>
                  Obtenha liberdade de movimento e desfrute de uma vida sem
                  limitações.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: false }}
                className={styles.sectionSecondCard}
              >
                <img src={healthIcon} alt="Imagem de bem-estar" />
                <h4>Bem-estar</h4>
                <p>
                  Promova harmonia física e mental, encontrando o equilíbrio e
                  serenidade.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: false }}
                className={styles.sectionSecondCard}
              >
                <img src={preventionIcon} alt="Prevenção" />
                <h4>Prevenção</h4>
                <p>
                  Proteja-se de lesões, fortalecendo seu corpo e evitando
                  problemas futuros.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <ParallaxSection />

        <section className={styles.sectionFourth} aria-label="Comprar" id="comprar">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 100 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.sectionFourthFlex}
          >
            <div className={styles.sectionFourthInsideFlex}>
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: false }}
                src={sectionFourthSmartphone}
                className={styles.sectionFourthSmartphone}
                alt=""
              />
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                viewport={{ once: false }}
                src={sectionFourthTablet}
                className={styles.sectionFourthTablet}
                alt=""
              />
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                viewport={{ once: false }}
                src={sectionFourthKindle}
                className={styles.sectionFourthKindle}
                alt=""
              />
            </div>
            <div className={styles.sectionFourthContent}>
              <h2>Adquira já!</h2>
              <p>
                Não deixe dores e lesões atrapalharem sua paixão por pilotar!
                Com nosso e-book, você terá acesso a exercícios, alongamentos e
                orientações de especialistas em fisioterapia para manter uma
                postura correta. Invista em seu conforto e segurança. Adquira
                agora e transforme sua experiência ao pilotar!
              </p>
              <h3>R$109,99</h3>
              <h2>R$77,00</h2>
              <a href="https://www.tandfonline.com/doi/abs/10.1080/02640410410001730205">
                Comprar
                <img src={ShoppingCart} alt=""/>
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default MainPage;

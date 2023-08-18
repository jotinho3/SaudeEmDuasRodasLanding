import React from "react";
import styles from "./styles.module.scss";
import flexibilityIcon from "../../assets/icons8-flexibility-64.png";
import preventionIcon from "../../assets/icons8-prevention-64.png";
import healthIcon from "../../assets/icons8-health-64.png";
import Header from "./components/Header";
import { motion } from "framer-motion";

import sectionFourthSmartphone from "../../assets/smartmockups_lku2smyd (1).png";
import sectionFourthTablet from "../../assets/smartmockups_lku2q92j.png";
import sectionFourthKindle from "../../assets/smartmockups_lkwycnw7.png";
import ShoppingCart from '../../assets/shopping-cart.svg'
import svgBgSeparator from '../../assets/layered-waves-haikei (3).svg'
import GiftIcon from '../../assets/gift.svg'
import KiwifyLogo from '../../assets/kiwifyLogo.png'
import scrollGif from '../../assets/animation_llfpyn6d_small (1).gif'
import Popup from "./components/Popup/Popup";



// const ParallaxSection: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (videoRef.current && sectionRef.current) {
//         const scrollTop =
//           window.scrollY || document.documentElement.scrollTop;
//         const videoHeight = videoRef.current.offsetHeight;
//         const sectionTop = sectionRef.current.offsetTop;
//         const sectionHeight = sectionRef.current.offsetHeight;
//         const offset =
//           (scrollTop - sectionTop) / (sectionHeight + window.innerHeight);
//         const translateY = Math.round(offset * videoHeight);

//         videoRef.current.style.transform = `translateY(-${translateY}px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section
//       className={styles.sectionThird}
//       ref={sectionRef}
//       aria-label="Nosso objetivo"
//       id="objetivo"
//     >
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 100 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.3 }}
//         className={styles.sectionThirdFlex}
//       >
//         <img
//           className={styles.sectionThirdImage}
//           src={sectionThirdImage}
//           alt="Health and wellness"
//         />
//         <div className={styles.sectionThirdContent}>
//           <h3>Objetivo</h3>
//           <h2>Promovendo Saúde</h2>
//           <p>
//             De acordo com estudos científicos, como o da
//             revista Journal of Sports Sciences, o alongamento regular melhora a
//             eficiência muscular e reduz o risco de lesões musculoesqueléticas.
//           </p>
//           <a href="#comprar">
//             Saber mais
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

const MainPage: React.FC = () => {
 


  return (
    <>
      <Header />

      

      <main>
        <section
          className={styles.sectionFirst}
          aria-label="Introdução da página"
          id="inicio"
        >

          <Popup />
          
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
            <div className={styles.buttonFirstDiv}>
              <a href="#comprar"><button className={styles.sectionFirstButton}>Saber Mais </button></a>
              <a href="#comprar"><button className={styles.sectionFirstButtonHighlight}>Dar de presente <img src={GiftIcon} alt="giftIcon" /></button></a>
              <img src={scrollGif} alt="" />
              
            </div>
          </motion.div>

            <motion.div  
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0,  opacity: 100 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.2 }} 
            className={styles.LottieWrapper}>
              <iframe src="https://www.youtube.com/embed/QTO8NiJpHhw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
       
            </motion.div>


            
          
        </section>

        <img width="100%" className={styles.svgBgSeparator} src={svgBgSeparator} alt="" />

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
                <a href="#comprar">
            Saber mais
          </a>
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
                <a href="#comprar">
            Saber mais
          </a>
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
                <a href="#comprar">
            Saber mais
          </a>
              </motion.div>
            </div>
          </motion.div>
        </section>
{/* 
        <ParallaxSection /> */}

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
                postura correta. <br /> <strong>7 Dias de garantia</strong>
              </p>
              <h3>R$59,90</h3>
              <h2>R$49,90</h2>
              <div>
                
              </div>
              <a href="https://pay.kiwify.com.br/iDvlB5E" target="_blank" id="comprarButton">
                Comprar
                <img src={ShoppingCart} alt=""/>
              </a>

              <p>Compra via <img width='120px' src={KiwifyLogo} alt="" /></p>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className={styles.Footer}>
        <div className={styles.FooterContent}>
          <h3>Contato:</h3>

          <div>
            <p>Contato: vizinhoslacqua@gmail.com</p>

          </div>
          
        </div>

        <div className={styles.FooterSocials}>
          

        </div>

      </footer>

    </>
  );
};

export default MainPage;

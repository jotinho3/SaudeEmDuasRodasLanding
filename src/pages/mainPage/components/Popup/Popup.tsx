import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Popup.css';


const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1890); // 15 minutes in seconds

  useEffect(() => {
    // Show the popup after 3 seconds
    const timerToShow = setTimeout(() => {
      setShowPopup(true);
    }, 21000);

    // Hide the popup after 15 minutes (900 seconds)
    const timerToHide = setTimeout(() => {
      setShowPopup(false);
    }, 900000);

    // Update time remaining every second
    const countdownInterval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timerToShow);
      clearTimeout(timerToHide);
      clearInterval(countdownInterval);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  // Convert seconds to minutes and seconds
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="popup-container"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
        >
          <motion.div className="close-button-container">
            <motion.button
              className="close-button"
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              X
            </motion.button>
          </motion.div>


          <div className="countdown-container">
            <div className="countdown-icon">
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/present.png" alt="present"/>
            </div>
            <div className="countdown-timer">
              {minutes < 10 ? '0' : ''}
              {minutes}:{seconds < 10 ? '0' : ''}
              {seconds}
            </div>
          </div>

         
          <div className="popup-content">
            <h2 className="popup-title">Oferta de Lançamento!</h2>
            <p className="popup-description">
            Oferta de lançamento exclusiva! Garanta já o e-book Saúde em Duas Rodas e transforme sua experiência em duas rodas. Não perca essa chance!
            </p>

            <h3>
                R$29,00
            </h3>
            <a href="https://pay.kiwify.com.br/cYQYhXL" className="popup-link" target="_blank" >
              Comprar com desconto
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;

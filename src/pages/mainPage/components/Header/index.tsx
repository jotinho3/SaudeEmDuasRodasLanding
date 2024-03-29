import { useEffect, useState } from 'react';
import {  AnimatePresence, Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import mainIcon from '../../../../assets/SaudeSobRodas4.png'

import {
  HeaderContainer,
  NavLinks,
  NavLink,
  DropdownMenu,
  DropdownLink,
  Link,
  DropdownLinkText,
  NavbarContainer,
  HeaderIcon,
  NavbarFlex,
  NavButton,
} from './styles';
import { ScreenReaderLabel, StyledBurger } from '../HamburgerIcon/styles';





const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);



  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  useEffect(() => { // useEffect to set isOpen in DropdownMenu to 'false' if the width of screen surpasses smartphone size
    const handleResize = () => {
      if (window.innerWidth >= 868) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dropdownAnimationVariants: Variants = {
    closed: {
      height: 0,
      marginTop: "0px",
      opacity: "0%",
      overflow: "hidden",
      transition: {
        type: 'spring',
        stiffness: 60
      },
    },
    open: {
      height: "auto",
      marginTop: "50px",
      opacity: "100%",
      overflow: "visible",
      transition: {
        type: 'spring',
        stiffness: 60
        
      },
    },
  };
  

  return (
    <HeaderContainer>
      <NavbarContainer>
        <NavbarFlex> 
        <HeaderIcon src={mainIcon} />
        <NavLinks>
          <NavLink>
          <Link href="#inicio">Início</Link>
          </NavLink>
          <NavLink>
            <Link href="#beneficios">Benefícios</Link>
          </NavLink>
          <NavLink>
            <Link href="#objetivo">Objetivo</Link>
          </NavLink>
        </NavLinks>
        <NavButton href='#comprar'>Adquirir</NavButton>
        <StyledBurger
      aria-label="Menu"
      aria-expanded={isDropdownOpen}
      onClick={toggleDropdown}
    >
      <ScreenReaderLabel>Menu</ScreenReaderLabel>
      <motion.span
        animate={isDropdownOpen ? { rotate: 43,x: 1, y: 10 } : { rotate: 0, y: 0 }}
        transition={{duration: 0.3}}
      />
      <motion.span animate={{ opacity: isDropdownOpen ? 0 : 1 }} transition={{duration: 0.3}} />
      <motion.span
        animate={isDropdownOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
        transition={{duration: 0.3}}
      
      />
    </StyledBurger>
        </NavbarFlex >
        
        <AnimatePresence >
          {isDropdownOpen && (
            <DropdownMenu
              isOpen={isDropdownOpen}
              onClose={toggleDropdown}
              variants={dropdownAnimationVariants}
              initial="closed"
              animate="open"
              transition={{ delay: 2 }}
              exit="closed"
            >
              <DropdownLink>
                <DropdownLinkText href="#inicio">Inicio</DropdownLinkText>
              </DropdownLink>
              <DropdownLink>
                <DropdownLinkText href="#beneficios">Benefícios</DropdownLinkText>
              </DropdownLink>
              <DropdownLink>
                <DropdownLinkText href="#objetivo">Objetivo</DropdownLinkText>
              </DropdownLink>
              <DropdownLink>
                <DropdownLinkText href="#comprar">Adquirir</DropdownLinkText>
              </DropdownLink>
            </DropdownMenu>
          )}
        </AnimatePresence>
      
      </NavbarContainer>

    </HeaderContainer>

    
  );
};

export default Header;

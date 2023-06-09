import styled from 'styled-components';
import { HTMLAttributes, CSSProperties } from "react";
import {  motion, Variants } from "framer-motion";
import { VariantLabels } from "framer-motion";


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: #000;
  color: #fff;
  position: fixed;
  z-index: 999;
  width: 100%;
  
`;

export const HeaderIcon = styled.img`
    height: 2.8rem;

`

export const NavbarContainer = styled.nav`

    width: 100%;
    margin: 0 60px;

    @media (max-width: 868px) {

      margin: 0 10px;
      
      
    }
`

export const NavbarFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 868px) {
      
      
    }
   


`

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  transition: display 0.3s ease;


  @media (max-width: 868px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  margin: 0 10px;

 
  
`;


export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  

  &:active{
    transform: scale(120%);
    transition: 0.2s;
    
  }



  @media (max-width: 868px) {
    display: block;
  }

  & > div {
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #fff;
  }

  

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #3b82f6;
  }
`;


interface DropdownMenuProps extends HTMLAttributes<HTMLUListElement> {
    isOpen: boolean;
    onClose: () => void;
    variants: Variants;
    initial: VariantLabels; 
    animate: VariantLabels;
    exit: VariantLabels;
    css?: CSSProperties;
  }
  
 

export const DropdownMenu = styled(motion.ul)<DropdownMenuProps>`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 0;

  overflow: hidden;

 



`;

export const NavButton = styled.button`

cursor: pointer;

border: 2px solid currentColor;
border-radius: 3rem;
color: #002f8d;
overflow: hidden;
padding: 1rem 2rem;
position: relative;
text-decoration: none;
transition: 0.2s transform ease-in-out;
will-change: transform;
z-index: 0;

&::after {
  background-color: #002f8d;
  border-radius: 3rem;
  content: '';
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-100%, 0) rotate(10deg);
  transform-origin: top left;
  transition: 0.2s transform ease-out;
  will-change: transform;
  z-index: -1;
}

&:hover::after {
  transform: translate(0, 0);
}

&:hover {
  border: 2px solid transparent;
  transform: scale(1.05);
  will-change: transform;
  background-color: #002f8d;
}




@media (max-width: 878px) {
    display: none;
    
}



width: 10rem;
border: 2px solid rgb(210, 210, 210) ;
background-color: transparent;
border-radius: 100rem;
font-size: larger;
color: #FFF;
transition: background-color 0.2s ease;








`

export const DropdownLink = styled.li`
  margin: 0;

  
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const ActiveLink = styled(Link)`
  text-decoration: underline;
`;

export const DropdownLinkText = styled(Link)`
  display: block;
  padding: 10px;
`;

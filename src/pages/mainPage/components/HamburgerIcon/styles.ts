import styled from "styled-components";

export const StyledBurger = styled.button`
  cursor: pointer;
  padding: 0;
  z-index: 10;
  display: none;


  &:active{
    transform: scale(120%);
    
  }

  @media (max-width: 868px) {
    display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  -webkit-tap-highlight-color: transparent;

  }



  & > span {
    width: 30px;
    height: 8px;
    margin: 5px;
    background-color: #fff;
  }
`;

export const ScreenReaderLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
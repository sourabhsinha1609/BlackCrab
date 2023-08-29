import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Nav className={isScrolled ? 'scrolled' : ''}>
      {isScrolled && (
        <Logo>
       
          <h1> </h1>
        </Logo>
      )}
      <NavLinks>
        <a href='#home'>Home</a>
        <a href='#project'>Our Services</a>
        <a href='#client'>About Us</a>
        <a href='#footer'>Contact Us</a>
      </NavLinks>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  transition: background-color 0.3s;
  z-index: 1;
  &.scrolled {
    background-color: #000; /* Change to the desired background color */
  }
`;

const Logo = styled.div`

  
  span {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  h1 {
    font-weight: 600;
    font-size: 1.2rem;
    display: none; /* Hide the text for the circular logo */
  }
`;


const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    transition: opacity 0.3s ease-in-out;
    :hover {
      opacity: 0.7;
    }
  }
`;

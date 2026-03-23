'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import TutorRegisterModal from './TutorRegisterModal';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 1200px) {
    padding: 1rem 3rem;
  }

  @media (max-width: 1024px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Gilroy-Bold', sans-serif;
  color: #2563eb;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  @media (max-width: 1024px) {
    display: flex;
  }

  span {
    width: 100%;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'rotate(0)'};
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 5rem 2rem 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transform: translateX(${props => props.isOpen ? '0' : '100%'});
    transition: transform 0.3s ease;
    gap: 0;
    overflow-y: auto;
  }

  @media (max-width: 480px) {
    width: 280px;
    padding: 4rem 1.5rem 2rem;
  }
`;

const NavLinksOverlay = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-family: 'Gilroy-Medium', sans-serif;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
  white-space: nowrap;

  &:hover {
    color: #2563eb;
    background-color: #f1f5f9;
  }

  &.active {
    color: #ffffff;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  @media (max-width: 1024px) {
    width: 100%;
    text-align: left;
    padding: 1rem;
    border-bottom: 1px solid #f1f5f9;
    border-radius: 0;
    margin-bottom: 0.5rem;

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #f1f5f9;
  }
`;

const LoginButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
`;

const JoinButton = styled.button`
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
`;

export default function Navbar() {
  const pathname = usePathname();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isTutorRegisterModalOpen, setIsTutorRegisterModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/how-it-works', label: 'How it works' },
    { href: '/find-tutor', label: 'Find Tutors' },
    { href: '/contact', label: 'Contact Us' }
  ];

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleJoinClick = () => {
    setIsTutorRegisterModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleCloseTutorRegisterModal = () => {
    setIsTutorRegisterModalOpen(false);
  };

  const handleSwitchToRegister = () => {
    setIsRegisterModalOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsLoginModalOpen(true);
  };

  const handleSwitchToTutorLogin = () => {
    setIsLoginModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>TutorApp</Logo>
        
        <HamburgerButton 
          isOpen={isMobileMenuOpen} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>

        <NavLinksOverlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
        
        <NavLinks isOpen={isMobileMenuOpen}>
          {navItems.map((item) => (
            <NavLink 
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'active' : ''}
              onClick={handleNavLinkClick}
            >
              {item.label}
            </NavLink>
          ))}
          <ButtonGroup>
            <LoginButton onClick={handleLoginClick}>
              Login
            </LoginButton>
            <JoinButton onClick={handleJoinClick}>
              Join for free as a Tutor
            </JoinButton>
          </ButtonGroup>
        </NavLinks>
      </NavbarContainer>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={handleCloseLoginModal}
        onSwitchToRegister={handleSwitchToRegister}
      />
      
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={handleCloseRegisterModal}
        onSwitchToLogin={handleSwitchToLogin}
      />
      
      <TutorRegisterModal 
        isOpen={isTutorRegisterModalOpen} 
        onClose={handleCloseTutorRegisterModal}
        onSwitchToLogin={handleSwitchToTutorLogin}
      />
    </>
  );
}

'use client';

import styled from 'styled-components';

const FloatingButton = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  z-index: 1000;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 55px;
    height: 55px;
  }
`;

const WhatsAppIcon = styled.img`
  width: 35px;
  height: 35px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  right: 70px;
  top: 50%;
  transform: translateY(-50%);
  background: #1a202c;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 6px solid transparent;
    border-left-color: #1a202c;
  }

  ${FloatingButton}:hover & {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function WhatsAppFloat() {
  const phoneNumber = "9988786776";
  const message = "Hello! I'm interested in your tutoring services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <FloatingButton
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <Tooltip>Chat with us on WhatsApp</Tooltip>
      <WhatsAppIcon 
        src="/Images/Icons/whatsapp-svgrepo-com.svg" 
        alt="WhatsApp"
      />
    </FloatingButton>
  );
}
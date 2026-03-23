'use client';

import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  padding: 3rem 5rem 1rem;
  margin-top: auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="1" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="1" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 1200px) {
    padding: 3rem 3rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1rem;
  }
`;

const FooterContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    text-align: center;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const FooterTitle = styled.h3`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.2rem;
  margin: 0;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const FooterLink = styled(Link)`
  color: #d1d5db;
  text-decoration: none;
  font-family: 'Gilroy-Bold', sans-serif;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: #60a5fa;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const FooterText = styled.p`
  color: #d1d5db;
  font-family: 'Gilroy-Bold', sans-serif;
  margin: 0;
  line-height: 1.6;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.5;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const SocialLink = styled.a`
  color: #d1d5db;
  transition: opacity 0.3s ease;
  display: inline-block;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 32px;
    height: 32px;

    @media (max-width: 480px) {
      width: 28px;
      height: 28px;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    margin-top: 1.5rem;
    padding-top: 0.8rem;
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Gilroy-Bold', sans-serif;
  margin: 0;
  font-size: 0.9rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>TutorApp</FooterTitle>
          <FooterText>
            Connect with the best tutors in your city. Find qualified tutors absolutely for free and submit your learning requirements.
          </FooterText>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <img src="/Images/Icons/facebook-color-svgrepo-com.svg" alt="Facebook" />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <img src="/Images/Icons/instagram-1-svgrepo-com.svg" alt="Instagram" />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <img src="/Images/Icons/linkedin-svgrepo-com.svg" alt="LinkedIn" />
            </SocialLink>
            <SocialLink href="#" aria-label="Gmail">
              <img src="/Images/Icons/gmail-icon-logo-svgrepo-com.svg" alt="Gmail" />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/how-it-works">How it Works</FooterLink>
          <FooterLink href="/find-tutors">Find Tutors</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="/contact">Contact Us</FooterLink>
          <FooterLink href="/help">Help Center</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterText>📧 info@tutorapp.com</FooterText>
          <FooterText>📞 +1 (555) 123-4567</FooterText>
          <FooterText>📍 123 Education St, Learning City, LC 12345</FooterText>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © 2026 TutorApp. All rights reserved.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
}
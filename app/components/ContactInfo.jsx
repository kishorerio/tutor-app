'use client';

import styled from 'styled-components';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoTitle = styled.h3`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.8rem;
  color: #1a202c;
  margin: 0 0 1rem 0;
`;

const InfoSubtitle = styled.p`
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
`;

const InfoCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.h4`
  font-family: 'Gilroy-SemiBold', sans-serif;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
`;

const InfoText = styled.p`
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const InfoLink = styled.a`
  font-family: 'Gilroy-Medium', sans-serif;
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #5a67d8;
  }
`;

export default function ContactInfo() {
  return (
    <InfoContainer>
      <InfoTitle>Get in Touch</InfoTitle>
      <InfoSubtitle>
        Choose the best way to reach us. We're here to help with any questions about our tutoring services.
      </InfoSubtitle>
      
      <InfoCard>
        <IconWrapper>📧</IconWrapper>
        <InfoContent>
          <InfoLabel>Email Us</InfoLabel>
          <InfoText>
            <InfoLink href="mailto:info@tutorapp.com">
              info@tutorapp.com
            </InfoLink>
          </InfoText>
          <InfoText style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
            We typically respond within 2 hours
          </InfoText>
        </InfoContent>
      </InfoCard>

      <InfoCard>
        <IconWrapper>📞</IconWrapper>
        <InfoContent>
          <InfoLabel>Call Us</InfoLabel>
          <InfoText>
            <InfoLink href="tel:+15551234567">
              +1 (555) 123-4567
            </InfoLink>
          </InfoText>
          <InfoText style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
            Mon-Fri: 9AM-6PM EST
          </InfoText>
        </InfoContent>
      </InfoCard>

      <InfoCard>
        <IconWrapper>📍</IconWrapper>
        <InfoContent>
          <InfoLabel>Visit Our Office</InfoLabel>
          <InfoText>
            123 Education Street<br />
            Learning City, LC 12345<br />
            United States
          </InfoText>
        </InfoContent>
      </InfoCard>
    </InfoContainer>
  );
}
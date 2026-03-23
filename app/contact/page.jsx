'use client';

import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import MapSection from '../components/MapSection';
import ContactHero from '../components/ContactHero';

const PageContainer = styled.div `
  min-height: 100vh;
`;

const MainContent = styled.div `
  background: #ffffff;
`;

const FormSection = styled.section `
  padding: 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 5rem;

  @media (max-width: 1024px) {
    margin: 0 3rem;
  }

  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  @media (max-width: 480px) {
    margin: 0 1rem;
  }

  @media (max-width: 360px) {
    margin: 0 0.5rem;
  }
`;

const SectionTitle = styled.h1`
  font-family: 'Gilroy-ExtraBold', sans-serif;
  font-size: 3rem;
  text-align: center;
  color: #1a202c;
  margin: 1rem 0 2rem 0;
  letter-spacing: -0.02em;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin: 0.5rem 0 1.5rem 0;
  }

  @media (max-width: 360px) {
    font-size: 1.6rem;
    margin: 0.5rem 0 1rem 0;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }

  @media (max-width: 360px) {
    gap: 1rem;
  }
`;

export default function ContactPage() {
    return (
        <PageContainer>
            <MainContent>
                <FormSection>
                    <ContactHero/>
                    <Container>
                        <SectionTitle>Contact Us</SectionTitle>
                        <FormGrid>
                            <ContactForm/>
                            <ContactInfo/>
                        </FormGrid>
                    </Container>
                </FormSection>
                <MapSection/>
            </MainContent>
        </PageContainer>
    );
}

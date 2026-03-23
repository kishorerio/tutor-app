'use client';

import styled from 'styled-components';

const ContentSection = styled.section`
  padding: 6rem 0;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const MainTitle = styled.h2`
  font-family: 'Gilroy-ExtraBold', sans-serif;
  font-size: 2.5rem;
  color: #1a202c;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionTitle = styled.h3`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.5rem;
  color: #2563eb;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const StepsList = styled.ul`
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 1rem;
  color: #64748b;
  line-height: 1.8;
  margin: 0;
  padding-left: 1.5rem;
  list-style-type: disc;

  li {
    margin-bottom: 0.5rem;
    color: #374151;
    display: list-item;
  }
`;

const RegisterButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 1.2rem 3rem;
  border-radius: 12px;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    align-self: center;
    padding: 1rem 2.5rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);

  @media (max-width: 968px) {
    order: -1;
  }
`;

const HowItWorksImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

export default function HowItWorksContent() {
  return (
    <ContentSection>
      <Container>
        <ContentGrid>
          <TextContent>
            <MainTitle>How it works for students / Tutors / Institutes !!</MainTitle>
            
            <SectionTitle>How it works for Students ??</SectionTitle>
            <StepsList>
              <li>Submit your learning requirement absolutely for free.</li>
              <li>Search the Tutor profile and find the right Tutor for you or else contact customer care +91 xxxxxxxxx to fulfill your requirement for free.</li>
              <li>No registration fee.</li>
            </StepsList>

            <SectionTitle>How it works for Tutors/ Institutes ??</SectionTitle>
            <StepsList>
              <li>Join with medvann community for free today.</li>
              <li>Create a free professional profile</li>
              <li>Secure more students .</li>
              <li>No registration fee .</li>
            </StepsList>

            <RegisterButton>
              Register Now
            </RegisterButton>
          </TextContent>
          
          <ImageContainer>
            <HowItWorksImage 
              src="/Images/howits.jpg" 
              alt="How It Works - Learning Process"
            />
          </ImageContainer>
        </ContentGrid>
      </Container>
    </ContentSection>
  );
}
'use client';

import styled from 'styled-components';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '../data/data';

const TestimonialsSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }

  @media (max-width: 360px) {
    padding: 1.5rem 0;
  }
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

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 360px) {
    margin-bottom: 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Gilroy-ExtraBold', sans-serif;
  font-size: 3rem;
  color: #1a202c;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin: 0 0 0.5rem 0;
  }

  @media (max-width: 360px) {
    font-size: 1.6rem;
    line-height: 1.3;
  }
`;

const SectionSubtitle = styled.p`
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 1.2rem;
  color: #64748b;
  margin: 0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 400px;
    line-height: 1.5;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
    max-width: 300px;
    line-height: 1.4;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
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

export default function Testimonials() {
  return (
    <TestimonialsSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Why Choose TutorApp?</SectionTitle>
          <SectionSubtitle>
            Discover what makes our platform the preferred choice for students and tutors across Coimbatore
          </SectionSubtitle>
        </SectionHeader>
        
        <CardsGrid>
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              title={testimonial.title}
              description={testimonial.description}
            />
          ))}
        </CardsGrid>
      </Container>
    </TestimonialsSection>
  );
}
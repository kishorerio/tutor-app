'use client';

import styled from 'styled-components';
import TestimonialCard from './TestimonialCard';
import { testimonialsData } from '../data/data';

const TestimonialsSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Gilroy-ExtraBold', sans-serif;
  font-size: 3rem;
  color: #1a202c;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.2rem;
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
    font-size: 1rem;
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
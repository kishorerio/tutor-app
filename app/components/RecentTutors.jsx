'use client';

import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import RecentTutorCard from './RecentTutorCard';
import { tutorsData } from '../data/tutorsData';

const CarouselSection = styled.section`
  padding: 4rem 0;
  background: #ffffff;
  overflow: hidden;
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
  margin-bottom: 3rem;
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

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.translateX}px);
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%) scale(1);
  }

  ${props => props.direction === 'left' ? 'left: 1rem;' : 'right: 1rem;'}

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
    ${props => props.direction === 'left' ? 'left: 0.5rem;' : 'right: 0.5rem;'}
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e2e8f0'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#cbd5e0'};
  }
`;

const AutoPlayIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 0.9rem;
  color: #64748b;
`;

const PlayPauseButton = styled.button`
  background: none;
  border: none;
  color: #667eea;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f1f5f9;
  }
`;

export default function RecentTutors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(350);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Get recently joined tutors (for demo, we'll use all tutors)
  const recentTutors = tutorsData;
  const totalCards = recentTutors.length;
  const visibleCards = Math.floor((containerRef.current?.offsetWidth || 1200) / cardWidth);
  const maxIndex = Math.max(0, totalCards - visibleCards);

  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth <= 768) {
        setCardWidth(280);
      } else {
        setCardWidth(350);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= maxIndex) {
            return 0;
          }
          return prev + 1;
        });
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, maxIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const translateX = -currentIndex * cardWidth;

  return (
    <CarouselSection>
      <Container>
        <SectionHeader>
          <SectionTitle>Recently Joined Tutors</SectionTitle>
          <SectionSubtitle>
            Meet our newest expert tutors who have recently joined our platform
          </SectionSubtitle>
        </SectionHeader>

        <CarouselContainer ref={containerRef}>
          <NavigationButton
            direction="left"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            ←
          </NavigationButton>

          <CarouselWrapper translateX={translateX}>
            {recentTutors.map((tutor) => (
              <RecentTutorCard key={tutor.id} tutor={tutor} />
            ))}
          </CarouselWrapper>

          <NavigationButton
            direction="right"
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
          >
            →
          </NavigationButton>
        </CarouselContainer>

        <DotsContainer>
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <Dot
              key={index}
              active={currentIndex === index}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsContainer>
      </Container>
    </CarouselSection>
  );
}
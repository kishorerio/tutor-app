'use client';

import styled from 'styled-components';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';

const PageContainer = styled.div`
  min-height: 100vh;
`;

export default function AboutPage() {
  return (
    <PageContainer>
      <AboutHero />
      <AboutContent />
    </PageContainer>
  );
}
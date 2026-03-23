'use client';

import styled from 'styled-components';
import HowItWorksHero from '../components/HowItWorksHero';
import HowItWorksContent from '../components/HowItWorksContent';

const PageContainer = styled.div`
  min-height: 100vh;
`;

export default function HowItWorksPage() {
  return (
    <PageContainer>
      <HowItWorksHero />
      <HowItWorksContent />
    </PageContainer>
  );
}
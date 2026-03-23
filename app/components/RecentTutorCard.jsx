'use client';

import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
  min-width: 300px;
  max-width: 300px;
  margin: 0 0.75rem;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0.1, 0, 0.15);
  }
`;

const TutorImageContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem auto;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #e2e8f0;
`;

const TutorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TutorName = styled.h3`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.2rem;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
  text-align: center;
`;

const TutorSubject = styled.div`
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1rem;
`;

const TutorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 0.9rem;
`;

const DetailLabel = styled.span`
  color: #64748b;
`;

const DetailValue = styled.span`
  color: #1a202c;
  font-family: 'Gilroy-Medium', sans-serif;
`;

const CardWrapper = styled.div`
  position: relative;
`;

export default function RecentTutorCard({ tutor }) {
  return (
    <CardWrapper>
      <Card>
        <TutorImageContainer>
          <TutorImage src={tutor.image} alt={tutor.name} />
        </TutorImageContainer>
        
        <TutorName>{tutor.name}</TutorName>
        <TutorSubject>{tutor.subject}</TutorSubject>
        
        <TutorDetails>
          <DetailRow>
            <DetailLabel>Class:</DetailLabel>
            <DetailValue>{tutor.class}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Location:</DetailLabel>
            <DetailValue>{tutor.location}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Experience:</DetailLabel>
            <DetailValue>{tutor.experience}</DetailValue>
          </DetailRow>
        </TutorDetails>
      </Card>
    </CardWrapper>
  );
}
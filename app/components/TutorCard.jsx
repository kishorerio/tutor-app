'use client';

import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  display: flex;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TutorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
`;

const TutorInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TutorName = styled.h3`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.3rem;
  color: #1a202c;
  margin: 0;
`;

const TutorDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const DetailItem = styled.span`
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 0.9rem;
  color: #64748b;
  background: #f1f5f9;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
`;

const TutorDescription = styled.p`
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0.5rem 0;
`;

const TutorFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
  }
`;

export default function TutorCard({ tutor }) {
  const handleContact = () => {
    // Handle contact logic here
    console.log('Contacting tutor:', tutor.name);
  };

  return (
    <Card>
      <TutorImage src={tutor.image} alt={tutor.name} />
      <TutorInfo>
        <TutorName>{tutor.name}</TutorName>
        <TutorDetails>
          <DetailItem>{tutor.subject}</DetailItem>
          <DetailItem>{tutor.class}</DetailItem>
          <DetailItem>{tutor.location}</DetailItem>
          <DetailItem>{tutor.experience}</DetailItem>
        </TutorDetails>
        <TutorDescription>{tutor.description}</TutorDescription>
        <TutorFooter>
          <ContactButton onClick={handleContact}>
            Contact Tutor
          </ContactButton>
        </TutorFooter>
      </TutorInfo>
    </Card>
  );
}
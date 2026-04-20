'use client';

import styled from 'styled-components';
import { useState } from 'react';

const ProfileContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 1024px) {
    padding: 2.5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 360px) {
    padding: 1rem 0.5rem;
  }
`;

const ProfileContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 15px;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #667eea;
  font-family: 'Gilroy-Bold', sans-serif;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;

const OnlineIndicator = styled.div`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  background: #10b981;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    bottom: 6px;
    right: 6px;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  color: white;
`;

const WelcomeText = styled.h2`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const TutorName = styled.h3`
  font-family: 'Gilroy-ExtraBold', sans-serif;
  font-size: 1.8rem;
  margin: 0 0 1rem 0;
  color: #fbbf24;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const ProfileDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const DetailIcon = styled.span`
  font-size: 1rem;
  color: #fbbf24;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    gap: 0.8rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 90px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    min-width: auto;
  }
`;

const StatNumber = styled.div`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.4rem;
  color: #fbbf24;
  margin-bottom: 0.2rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const StatLabel = styled.div`
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    justify-content: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 8px;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
  }

  &.primary {
    background: rgba(251, 191, 36, 0.2);
    border-color: #fbbf24;
    color: #fbbf24;

    &:hover {
      background: rgba(251, 191, 36, 0.3);
    }
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.85rem;
  }
`;

export default function TutorProfileDisplay({ isLoggedIn = true, tutorData = null }) {
  // Mock tutor data for demonstration
  const mockTutorData = {
    name: "Dr. Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 9876543210",
    location: "Coimbatore, Tamil Nadu",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    experience: "8 years",
    rating: 4.8,
    totalStudents: 156,
    completedSessions: 1240,
    responseTime: "< 2 hrs",
    availability: "Online",
    profileImage: null,
    joinDate: "Jan 2020",
    specialization: "IIT-JEE, NEET Preparation"
  };

  const tutor = tutorData || mockTutorData;

  if (!isLoggedIn) {
    return null;
  }

  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileImageContainer>
          <ProfileImage>
            {tutor.name.split(' ').map(n => n[0]).join('')}
          </ProfileImage>
          <OnlineIndicator />
        </ProfileImageContainer>

        <ProfileInfo>
          <WelcomeText>Welcome back,</WelcomeText>
          <TutorName>{tutor.name}</TutorName>
          
          <ProfileDetails>
            <DetailItem>
              <DetailIcon>📧</DetailIcon>
              {tutor.email}
            </DetailItem>
            <DetailItem>
              <DetailIcon>📱</DetailIcon>
              {tutor.phone}
            </DetailItem>
            <DetailItem>
              <DetailIcon>📍</DetailIcon>
              {tutor.location}
            </DetailItem>
            <DetailItem>
              <DetailIcon>📚</DetailIcon>
              {tutor.subjects.join(', ')}
            </DetailItem>
            <DetailItem>
              <DetailIcon>⭐</DetailIcon>
              {tutor.rating}/5.0 Rating
            </DetailItem>
            <DetailItem>
              <DetailIcon>🕒</DetailIcon>
              {tutor.experience} Experience
            </DetailItem>
          </ProfileDetails>

          <StatsContainer>
            <StatItem>
              <StatNumber>{tutor.totalStudents}</StatNumber>
              <StatLabel>Total Students</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{tutor.completedSessions}</StatNumber>
              <StatLabel>Sessions Done</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{tutor.responseTime}</StatNumber>
              <StatLabel>Avg Response</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>₹{(tutor.completedSessions * 500).toLocaleString()}</StatNumber>
              <StatLabel>Total Earned</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{tutor.availability}</StatNumber>
              <StatLabel>Current Status</StatLabel>
            </StatItem>
          </StatsContainer>
        </ProfileInfo>

        <ActionButtons>
          <ActionButton className="primary">
            📝 Edit Profile
          </ActionButton>
          <ActionButton>
            📊 Dashboard
          </ActionButton>
          <ActionButton>
            💬 Messages (3)
          </ActionButton>
          <ActionButton>
            🔔 Notifications
          </ActionButton>
        </ActionButtons>
      </ProfileContent>
    </ProfileContainer>
  );
}
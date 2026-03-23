'use client';

import styled from 'styled-components';
import { useState } from 'react';

const Card = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  background-color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  display: block;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  padding: 2rem;
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const CardTitle = styled.h3`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.2rem;
  color: #1a202c;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  text-align: center;
`;

const CardDescription = styled.p`
  font-family: 'Gilroy-ExtraBold', sans-serif;
  font-size: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  margin: 0;
  text-align: center;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default function TestimonialCard({ image, title, description }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.log('Image failed to load:', image);
    setImageError(true);
  };

  return (
    <Card>
      <ImageContainer>
        {imageError ? (
          <ImagePlaceholder>
            📚 {title}
          </ImagePlaceholder>
        ) : (
          <CardImage 
            src={image} 
            alt={title}
            onError={handleImageError}
          />
        )}
      </ImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
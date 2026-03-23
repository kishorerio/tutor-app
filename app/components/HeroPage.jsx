'use client';

import styled from 'styled-components';
import {useState} from 'react';

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('/Images/homeImage.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 90vh;
    background-position: center center;
  }

  @media (max-width: 480px) {
    height: 85vh;
    min-height: 600px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #ffffff;
  margin: 0;
  font-family: 'Gilroy-ExtraBold', sans-serif;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.4;
  }

  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #f0f0f0;
  margin: 0;
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 500; 
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  max-width: 800px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 90%;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    gap: 1rem;
  }
`;

const PincodeInput = styled.input`
  width: 150px;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 6px;
  font-size: 1rem;
  font-family: 'Gilroy-Regular', sans-serif;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #999;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0.8rem 1rem;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 2px solid #e0e0e0;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 6px;
  font-size: 1rem;
  font-family: 'Gilroy-Regular', sans-serif;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #999;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #2563eb;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
  }
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Gilroy-SemiBold', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
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
    width: 100%;
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0.8rem 2rem;
  }
`;

export default function HeroPage() {
    const [searchInput, setSearchInput] = useState('');
    const [pincode, setPincode] = useState('');

    const handleSearch = () => {
        if (searchInput.trim()) {
            console.log('Searching for:', searchInput);
            console.log('Pincode:', pincode);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <HeroContainer>
            <ContentWrapper>
                <Title>Connect with Best Tutors in your City,<br></br>
                    Its free</Title>
                <Subtitle>Find qualified Tutors absolutely for free, Submit Your Learning Requirments</Subtitle>

                <SearchContainer>
                    <PincodeInput 
                        id="pincode" 
                        type="text" 
                        placeholder="Enter Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        onKeyPress={handleKeyPress}
                        maxLength={6}
                    />
                    <Input id="search" type="text" placeholder="Which Class are you looking for help with ?"
                        value={searchInput}
                        onChange={
                            (e) => setSearchInput(e.target.value)
                        }
                        onKeyPress={handleKeyPress}/>
                    <Button onClick={handleSearch}>Next</Button>
                </SearchContainer>
            </ContentWrapper>
        </HeroContainer>
    );
}

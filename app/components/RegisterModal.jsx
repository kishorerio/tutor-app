'use client';

import styled from 'styled-components';
import { useState } from 'react';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  padding: 2rem 1rem;
  overflow-y: auto;

  @media (max-height: 700px) {
    align-items: flex-start;
    padding: 1rem;
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: slideUp 0.3s ease-out;
  margin: auto;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-height: 700px) {
    padding: 1.5rem;
    margin: 1rem auto;
  }

  @media (max-height: 600px) {
    padding: 1rem;
    border-radius: 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
  transition: color 0.3s ease;

  &:hover {
    color: #1a202c;
  }
`;

const ModalTitle = styled.h2`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.8rem;
  color: #1a202c;
  text-align: center;
  margin: 0 0 0.5rem 0;

  @media (max-height: 600px) {
    font-size: 1.5rem;
    margin: 0 0 0.3rem 0;
  }
`;

const ModalSubtitle = styled.p`
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  text-align: center;
  margin: 0 0 1.5rem 0;
  font-size: 0.9rem;

  @media (max-height: 600px) {
    margin: 0 0 1rem 0;
    font-size: 0.8rem;
  }
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-height: 700px) {
    gap: 1rem;
  }

  @media (max-height: 600px) {
    gap: 0.8rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media (max-height: 600px) {
    gap: 0.3rem;
  }
`;

const Label = styled.label`
  font-family: 'Gilroy-SemiBold', sans-serif;
  color: #374151;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-height: 600px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const RegisterButton = styled.button`
  padding: 0.8rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  @media (max-height: 600px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  font-size: 0.9rem;

  @media (max-height: 600px) {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: #667eea;
  font-family: 'Gilroy-SemiBold', sans-serif;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #5a67d8;
  }
`;

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    console.log('Registration attempt:', formData);
    // Add registration logic here
    onClose();
  };

  const handleLoginClick = () => {
    onClose();
    onSwitchToLogin();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ModalTitle>Create Account</ModalTitle>
        <ModalSubtitle>Join TutorApp as Student/Parent</ModalSubtitle>
        
        <RegisterForm onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <RegisterButton type="submit">
            Create Account
          </RegisterButton>
        </RegisterForm>

        <LoginLink>
          Already have an account?{' '}
          <LoginButton onClick={handleLoginClick}>
            Login here
          </LoginButton>
        </LoginLink>
      </ModalContent>
    </ModalOverlay>
  );
}
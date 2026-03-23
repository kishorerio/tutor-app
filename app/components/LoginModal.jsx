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
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: slideUp 0.3s ease-out;

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
  margin: 0 0 2rem 0;
`;

const LoginTypeSelector = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const LoginTypeButton = styled.button`
  flex: 1;
  padding: 1rem;
  border: 2px solid ${props => props.active ? '#667eea' : '#e2e8f0'};
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border-radius: 12px;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    ${props => !props.active && `
      border-color: #667eea;
      color: #667eea;
    `}
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: 'Gilroy-SemiBold', sans-serif;
  color: #374151;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 1rem;
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
`;

const LoginButton = styled.button`
  padding: 1rem;
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
`;

const ForgotPassword = styled.a`
  text-align: center;
  color: #667eea;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  font-size: 0.9rem;
`;

const SignupButton = styled.button`
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

export default function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const [loginType, setLoginType] = useState('student');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { loginType, ...formData });
    // Add login logic here
    onClose();
  };

  const handleSignup = () => {
    onClose();
    onSwitchToRegister();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ModalTitle>Login to TutorApp</ModalTitle>
        
        <LoginTypeSelector>
          <LoginTypeButton
            active={loginType === 'student'}
            onClick={() => setLoginType('student')}
            type="button"
          >
            Student / Parent
          </LoginTypeButton>
          <LoginTypeButton
            active={loginType === 'tutor'}
            onClick={() => setLoginType('tutor')}
            type="button"
          >
            Tutor
          </LoginTypeButton>
        </LoginTypeSelector>

        <LoginForm onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <LoginButton type="submit">
            Login as {loginType === 'student' ? 'Student/Parent' : 'Tutor'}
          </LoginButton>

          <ForgotPassword>
            Forgot your password?
          </ForgotPassword>
        </LoginForm>

        <SignupLink>
          {loginType === 'student' && (
            <>
              Don't have an account?{' '}
              <SignupButton onClick={handleSignup}>
                Sign up as Student/Parent
              </SignupButton>
            </>
          )}
        </SignupLink>
      </ModalContent>
    </ModalOverlay>
  );
}
'use client';

import styled from 'styled-components';
import { useState, useEffect } from 'react';

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

  @media (max-height: 800px) {
    align-items: flex-start;
    padding: 1rem;
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
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

  @media (max-height: 800px) {
    padding: 1.5rem;
    margin: 1rem auto;
  }

  @media (max-height: 700px) {
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

  @media (max-height: 700px) {
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

  @media (max-height: 700px) {
    margin: 0 0 1rem 0;
    font-size: 0.8rem;
  }
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-height: 800px) {
    gap: 1rem;
  }

  @media (max-height: 700px) {
    gap: 0.8rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media (max-height: 700px) {
    gap: 0.3rem;
  }
`;

const Label = styled.label`
  font-family: 'Gilroy-SemiBold', sans-serif;
  color: #374151;
  font-size: 0.9rem;

  @media (max-height: 700px) {
    font-size: 0.8rem;
  }
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

  @media (max-height: 700px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const FileUploadContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 2px dashed #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #667eea;
    background: #f1f5f9;
  }

  @media (max-height: 700px) {
    padding: 1.5rem;
  }
`;

const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const FileUploadText = styled.p`
  font-family: 'Gilroy-Medium', sans-serif;
  color: #64748b;
  margin: 0;
  text-align: center;
  font-size: 0.9rem;

  @media (max-height: 700px) {
    font-size: 0.8rem;
  }
`;

const PreferenceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const PreferenceTitle = styled.h4`
  font-family: 'Gilroy-SemiBold', sans-serif;
  color: #374151;
  margin: 0;
  font-size: 0.9rem;

  @media (max-height: 700px) {
    font-size: 0.8rem;
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.8rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-family: 'Gilroy-Regular', sans-serif;
  color: #374151;
  font-size: 0.9rem;

  @media (max-height: 700px) {
    font-size: 0.8rem;
  }
`;

const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #667eea;
`;

const CaptchaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 2px solid #e2e8f0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const CaptchaDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CaptchaText = styled.div`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.2rem;
  color: #1a202c;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  letter-spacing: 2px;
  border: 1px solid #d1d5db;

  @media (max-height: 700px) {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
`;

const RefreshButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease;

  &:hover {
    background: #5a67d8;
  }

  @media (max-height: 700px) {
    padding: 0.4rem;
    font-size: 0.8rem;
  }
`;

const CaptchaInput = styled.input`
  flex: 1;
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  @media (max-height: 700px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const RegisterButton = styled.button`
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

  @media (max-height: 700px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  font-size: 0.9rem;

  @media (max-height: 700px) {
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

export default function TutorRegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    location: '',
    pinCode: '',
    password: '',
    confirmPassword: '',
    profileImage: null,
    captchaInput: '',
    preferences: {
      myHome: false,
      theirHome: false,
      noPreference: false,
      online: false,
      institute: false
    }
  });

  const [captchaCode, setCaptchaCode] = useState('');

  // Generate new captcha when modal opens
  const generateCaptcha = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  // Update captcha when modal opens
  useEffect(() => {
    if (isOpen) {
      setCaptchaCode(generateCaptcha());
      setFormData(prev => ({
        ...prev,
        captchaInput: '' // Clear previous captcha input
      }));
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('preference_')) {
      const prefKey = name.replace('preference_', '');
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [prefKey]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      profileImage: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (formData.captchaInput !== captchaCode) {
      alert('Captcha verification failed');
      return;
    }
    
    console.log('Tutor registration attempt:', formData);
    // Add registration logic here
    onClose();
  };

  const handleLoginClick = () => {
    onClose();
    onSwitchToLogin();
  };

  const handleRefreshCaptcha = () => {
    setCaptchaCode(generateCaptcha());
    setFormData(prev => ({
      ...prev,
      captchaInput: '' // Clear captcha input when refreshed
    }));
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ModalTitle>Join as a Tutor</ModalTitle>
        <ModalSubtitle>Create your tutor profile and start teaching</ModalSubtitle>
        
        <RegisterForm onSubmit={handleSubmit}>
          <FormRow>
            <InputGroup>
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                placeholder="Enter your contact number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </InputGroup>
          </FormRow>

          <FormRow>
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
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                id="location"
                name="location"
                placeholder="Enter your city/area"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </InputGroup>
          </FormRow>

          <FormRow>
            <InputGroup>
              <Label htmlFor="pinCode">Pin Code</Label>
              <Input
                type="text"
                id="pinCode"
                name="pinCode"
                placeholder="Enter your pin code"
                value={formData.pinCode}
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
          </FormRow>

          <FormRow>
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
          </FormRow>

          <InputGroup>
            <Label>Profile Image</Label>
            <FileUploadContainer>
              <FileInput
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <FileUploadText>
                {formData.profileImage 
                  ? `Selected: ${formData.profileImage.name}`
                  : 'Click to upload profile image (JPG, PNG)'
                }
              </FileUploadText>
            </FileUploadContainer>
          </InputGroup>

          <PreferenceSection>
            <PreferenceTitle>Teaching Preferences</PreferenceTitle>
            <CheckboxGroup>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  name="preference_myHome"
                  checked={formData.preferences.myHome}
                  onChange={handleInputChange}
                />
                My Home
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  name="preference_theirHome"
                  checked={formData.preferences.theirHome}
                  onChange={handleInputChange}
                />
                Their Home
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  name="preference_noPreference"
                  checked={formData.preferences.noPreference}
                  onChange={handleInputChange}
                />
                No Preference
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  name="preference_online"
                  checked={formData.preferences.online}
                  onChange={handleInputChange}
                />
                Online
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  name="preference_institute"
                  checked={formData.preferences.institute}
                  onChange={handleInputChange}
                />
                Institute or Coaching Center
              </CheckboxItem>
            </CheckboxGroup>
          </PreferenceSection>

          <InputGroup>
            <Label>Captcha Verification</Label>
            <CaptchaContainer>
              <CaptchaDisplay>
                <CaptchaText>{captchaCode}</CaptchaText>
                <RefreshButton type="button" onClick={handleRefreshCaptcha}>
                  ↻
                </RefreshButton>
              </CaptchaDisplay>
              <CaptchaInput
                type="text"
                name="captchaInput"
                placeholder="Enter the captcha code"
                value={formData.captchaInput}
                onChange={handleInputChange}
                required
              />
            </CaptchaContainer>
          </InputGroup>

          <RegisterButton type="submit">
            Register as Tutor
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
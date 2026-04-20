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
  max-width: 650px;
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
  }
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media (max-height: 700px) {
    gap: 1rem;
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
  color: #374151;
  background: white;
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

const FileInput = styled.input`
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 0.9rem;
  color: #374151;
  background: white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  @media (max-height: 700px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 1rem;
  color: #374151;
  background: white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }

  option {
    background: white !important;
    color: #374151 !important;
    padding: 0.5rem;
    font-family: 'Gilroy-Regular', sans-serif;
  }

  @media (max-height: 700px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 0.5rem;
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  font-family: 'Gilroy-Regular', sans-serif;
  color: #374151;
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8fafc;
  }
`;

const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #667eea;
  cursor: pointer;
`;

const CaptchaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: #f8fafc;
`;

const CaptchaText = styled.span`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.2rem;
  color: #1a202c;
  background: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  letter-spacing: 2px;
  user-select: none;
`;

const RefreshButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: #5a67d8;
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

// Generate random captcha
const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export default function TutorRegisterModal({ isOpen, onClose, onSwitchToLogin, onShowNextStep }) {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    location: '',
    pinCode: '',
    password: '',
    profileImage: null,
    captchaInput: '',
    preferences: {
      myHome: false,
      theirHome: false,
      noPreference: false,
      online: false,
      instituteOrCoaching: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handlePreferenceChange = (preference) => {
    setFormData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [preference]: !prev.preferences[preference]
      }
    }));
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setFormData(prev => ({
      ...prev,
      captchaInput: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate captcha
    if (formData.captchaInput !== captcha) {
      alert('Captcha verification failed. Please try again.');
      refreshCaptcha();
      return;
    }

    // Check if at least one preference is selected
    const hasPreference = Object.values(formData.preferences).some(pref => pref);
    if (!hasPreference) {
      alert('Please select at least one teaching preference.');
      return;
    }
    
    console.log('Tutor registration attempt:', formData);
    onClose();
    onShowNextStep();
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
        
        <ModalTitle>Join for Free as a Tutor</ModalTitle>
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
              <Label htmlFor="email">Email ID</Label>
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
              <Select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your city</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Surat">Surat</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Kanpur">Kanpur</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Indore">Indore</option>
                <option value="Thane">Thane</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Visakhapatnam">Visakhapatnam</option>
                <option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>
                <option value="Patna">Patna</option>
                <option value="Vadodara">Vadodara</option>
                <option value="Ghaziabad">Ghaziabad</option>
                <option value="Ludhiana">Ludhiana</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Kochi">Kochi</option>
                <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                <option value="Madurai">Madurai</option>
                <option value="Salem">Salem</option>
                <option value="Tiruchirappalli">Tiruchirappalli</option>
                <option value="Tirunelveli">Tirunelveli</option>
                <option value="Erode">Erode</option>
                <option value="Vellore">Vellore</option>
                <option value="Thanjavur">Thanjavur</option>
                <option value="Dindigul">Dindigul</option>
                <option value="Cuddalore">Cuddalore</option>
                <option value="Other">Other</option>
              </Select>
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

          <InputGroup>
            <Label htmlFor="profileImage">Profile Image Upload</Label>
            <FileInput
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              onChange={handleInputChange}
            />
          </InputGroup>

          <InputGroup>
            <Label>Teaching Preferences</Label>
            <CheckboxGroup>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.preferences.myHome}
                  onChange={() => handlePreferenceChange('myHome')}
                />
                My Home
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.preferences.theirHome}
                  onChange={() => handlePreferenceChange('theirHome')}
                />
                Their Home
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.preferences.noPreference}
                  onChange={() => handlePreferenceChange('noPreference')}
                />
                No Preference
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.preferences.online}
                  onChange={() => handlePreferenceChange('online')}
                />
                Online
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.preferences.instituteOrCoaching}
                  onChange={() => handlePreferenceChange('instituteOrCoaching')}
                />
                Institute or Coaching Center
              </CheckboxItem>
            </CheckboxGroup>
          </InputGroup>

          <InputGroup>
            <Label>Captcha Verification</Label>
            <CaptchaContainer>
              <CaptchaText>{captcha}</CaptchaText>
              <RefreshButton type="button" onClick={refreshCaptcha}>
                ↻
              </RefreshButton>
            </CaptchaContainer>
            <Input
              type="text"
              name="captchaInput"
              placeholder="Enter the captcha above"
              value={formData.captchaInput}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <RegisterButton type="submit">
            Register
          </RegisterButton>
        </RegisterForm>

        <LoginLink>
          Already have an account?{' '}
          <LoginButton onClick={handleLoginClick}>
            Login
          </LoginButton>
        </LoginLink>
      </ModalContent>
    </ModalOverlay>
  );
}
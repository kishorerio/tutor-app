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
  margin: 0 0 2rem 0;

  @media (max-height: 700px) {
    font-size: 1.5rem;
    margin: 0 0 1.5rem 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-height: 700px) {
    gap: 1rem;
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  @media (max-height: 700px) {
    gap: 0.6rem;
  }
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  font-family: 'Gilroy-Regular', sans-serif;
  color: #374151;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f8fafc;
  }

  @media (max-height: 700px) {
    font-size: 0.9rem;
    gap: 0.6rem;
    padding: 0.3rem;
  }
`;

const Checkbox = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  accent-color: #667eea;
  cursor: pointer;

  @media (max-height: 700px) {
    width: 1rem;
    height: 1rem;
  }
`;

const ProceedButton = styled.button`
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  }

  @media (max-height: 700px) {
    padding: 0.8rem;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

export default function TutorNextStepModal({ isOpen, onClose, onComplete, onShowFinalStep }) {
  const [selectedCategories, setSelectedCategories] = useState({
    classIV: false,
    classVIVIII: false,
    classIXX: false,
    classXIXII: false,
    collegeLevel: false,
    engineeringSubjects: false,
    languages: false,
    dance: false,
    diploma: false,
    iitJeeMain: false,
    iitJeeAdvanced: false,
    cetCoaching: false
  });

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedItems = Object.entries(selectedCategories)
      .filter(([key, value]) => value)
      .map(([key]) => key);
    
    if (selectedItems.length === 0) {
      alert('Please select at least one teaching category');
      return;
    }
    
    console.log('Selected teaching categories:', selectedItems);
    onComplete(selectedItems);
    onClose();
    onShowFinalStep(selectedItems);
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ModalTitle>Please Fill Up !!</ModalTitle>
        
        <Form onSubmit={handleSubmit}>
          <CheckboxGroup>
            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.classIV}
                onChange={() => handleCategoryChange('classIV')}
              />
              Class I-V Tuition
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.classVIVIII}
                onChange={() => handleCategoryChange('classVIVIII')}
              />
              Class VI-VIII Tuition
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.classIXX}
                onChange={() => handleCategoryChange('classIXX')}
              />
              Class IX-X Tuition
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.classXIXII}
                onChange={() => handleCategoryChange('classXIXII')}
              />
              Class XI-XII Tuition
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.collegeLevel}
                onChange={() => handleCategoryChange('collegeLevel')}
              />
              College Level
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.engineeringSubjects}
                onChange={() => handleCategoryChange('engineeringSubjects')}
              />
              Engineering Subjects
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.languages}
                onChange={() => handleCategoryChange('languages')}
              />
              Languages
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.dance}
                onChange={() => handleCategoryChange('dance')}
              />
              Dance
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.diploma}
                onChange={() => handleCategoryChange('diploma')}
              />
              Diploma
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.iitJeeMain}
                onChange={() => handleCategoryChange('iitJeeMain')}
              />
              IIT - JEE Main
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.iitJeeAdvanced}
                onChange={() => handleCategoryChange('iitJeeAdvanced')}
              />
              IIT - JEE Advanced
            </CheckboxItem>

            <CheckboxItem>
              <Checkbox
                type="checkbox"
                checked={selectedCategories.cetCoaching}
                onChange={() => handleCategoryChange('cetCoaching')}
              />
              CET Coaching
            </CheckboxItem>
          </CheckboxGroup>

          <ProceedButton type="submit">
            PROCEED
          </ProceedButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}
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
  max-width: 700px;
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

const Section = styled.div`
  margin-bottom: 1.5rem;

  @media (max-height: 700px) {
    margin-bottom: 1rem;
  }
`;

const SectionTitle = styled.h3`
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 1.2rem;
  color: #2563eb;
  margin: 0 0 1rem 0;

  @media (max-height: 700px) {
    font-size: 1.1rem;
    margin: 0 0 0.8rem 0;
  }
`;

const SubLabel = styled.p`
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  margin: 0 0 0.8rem 0;
  font-size: 0.9rem;

  @media (max-height: 700px) {
    font-size: 0.85rem;
    margin: 0 0 0.6rem 0;
  }
`;

const CheckboxGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.8rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 0.6rem;
  }

  @media (max-height: 700px) {
    gap: 0.5rem;
    margin-bottom: 0.8rem;
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
    font-size: 0.85rem;
    gap: 0.4rem;
  }
`;

const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: #667eea;
  cursor: pointer;

  @media (max-height: 700px) {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  @media (max-height: 700px) {
    gap: 1rem;
  }
`;

const RadioItem = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-family: 'Gilroy-Regular', sans-serif;
  color: #374151;
  font-size: 0.9rem;

  @media (max-height: 700px) {
    font-size: 0.85rem;
  }
`;

const Radio = styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: #667eea;
  cursor: pointer;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-height: 700px) {
    gap: 0.4rem;
    margin-bottom: 0.8rem;
  }
`;

const Label = styled.label`
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  font-size: 0.9rem;

  @media (max-height: 700px) {
    font-size: 0.85rem;
  }
`;

const Input = styled.input`
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

  &::placeholder {
    color: #9ca3af;
  }

  @media (max-height: 700px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 0.9rem;
  color: #374151;
  background: white;
  min-height: 80px;
  resize: vertical;
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
    font-size: 0.85rem;
    min-height: 60px;
  }
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  @media (max-height: 700px) {
    gap: 0.8rem;
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

export default function TutorFinalStepModal({ isOpen, onClose, onComplete, selectedCategories }) {
  const [formData, setFormData] = useState({
    // Board selection
    boards: {
      cbse: false,
      icseIse: false,
      state: false,
      international: false
    },
    // Subject selection
    subjects: {
      allSubject: false,
      science: false,
      maths: false
    },
    // Course selection
    courses: {
      bba: false,
      bsc: false,
      bcom: false,
      bcomca: false,
      ma: false,
      msc: false,
      mca: false,
      mcomca: false
    },
    subjectWillingToHandle: '',
    // Personal information
    gender: 'female',
    experience: '',
    age: '',
    university: '',
    educationalQualifications: '',
    expertise: '',
    // Availability
    availableDays: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    },
    // Communication
    communicationLanguages: {
      english: false,
      hindi: false,
      telugu: false,
      kannada: false
    },
    // Class timing
    classTiming: 'morning'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (category, field) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: !prev[category][field]
      }
    }));
  };

  const handleRadioChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final tutor registration data:', { selectedCategories, ...formData });
    onComplete({ selectedCategories, ...formData });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        
        <ModalTitle>Almost There !!</ModalTitle>
        
        <Form onSubmit={handleSubmit}>
          {/* Class I-V Tuition Section */}
          <Section>
            <SectionTitle>Class I-V Tuition</SectionTitle>
            
            <SubLabel>Kindly mention your Board :</SubLabel>
            <CheckboxGrid>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.boards.cbse}
                  onChange={() => handleCheckboxChange('boards', 'cbse')}
                />
                CBSE
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.boards.icseIse}
                  onChange={() => handleCheckboxChange('boards', 'icseIse')}
                />
                ICSE/ISE
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.boards.state}
                  onChange={() => handleCheckboxChange('boards', 'state')}
                />
                State
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.boards.international}
                  onChange={() => handleCheckboxChange('boards', 'international')}
                />
                International
              </CheckboxItem>
            </CheckboxGrid>

            <SubLabel>Kindly mention your Subject :</SubLabel>
            <CheckboxGrid>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.subjects.allSubject}
                  onChange={() => handleCheckboxChange('subjects', 'allSubject')}
                />
                All Subject
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.subjects.science}
                  onChange={() => handleCheckboxChange('subjects', 'science')}
                />
                Science
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.subjects.maths}
                  onChange={() => handleCheckboxChange('subjects', 'maths')}
                />
                Maths
              </CheckboxItem>
            </CheckboxGrid>
          </Section>

          {/* College Level Section */}
          <Section>
            <SectionTitle>College Level</SectionTitle>
            
            <SubLabel>Kindly mention your Course :</SubLabel>
            <CheckboxGrid>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.courses.bba}
                  onChange={() => handleCheckboxChange('courses', 'bba')}
                />
                BBA
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.courses.bsc}
                  onChange={() => handleCheckboxChange('courses', 'bsc')}
                />
                BSC
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.courses.bcom}
                  onChange={() => handleCheckboxChange('courses', 'bcom')}
                />
                BCOM
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.courses.bcomca}
                  onChange={() => handleCheckboxChange('courses', 'bcomca')}
                />
                BCOM(CA)
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.courses.ma}
                  onChange={() => handleCheckboxChange('courses', 'ma')}
                />
                MA
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.courses.msc}
                  onChange={() => handleCheckboxChange('courses', 'msc')}
                />
                MSC
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.courses.mca}
                  onChange={() => handleCheckboxChange('courses', 'mca')}
                />
                MCA
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.courses.mcomca}
                  onChange={() => handleCheckboxChange('courses', 'mcomca')}
                />
                MCOM(CA)
              </CheckboxItem>
            </CheckboxGrid>

            <InputGroup>
              <Label>Kindly Give Your Subject Willing TO Handle :</Label>
              <TextArea
                name="subjectWillingToHandle"
                value={formData.subjectWillingToHandle}
                onChange={handleInputChange}
                placeholder="Enter subjects you're willing to handle..."
              />
            </InputGroup>
          </Section>

          {/* Personal Information Section */}
          <Section>
            <SectionTitle>Please Tell About Yourself</SectionTitle>
            
            <InputGroup>
              <Label>Gender :</Label>
              <RadioGroup>
                <RadioItem>
                  <Radio
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={(e) => handleRadioChange('gender', e.target.value)}
                  />
                  Female
                </RadioItem>
                <RadioItem>
                  <Radio
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={(e) => handleRadioChange('gender', e.target.value)}
                  />
                  Male
                </RadioItem>
              </RadioGroup>
            </InputGroup>

            <InputRow>
              <InputGroup>
                <Label>Your Experience :</Label>
                <Input
                  type="text"
                  name="experience"
                  placeholder="eg: 3"
                  value={formData.experience}
                  onChange={handleInputChange}
                />
              </InputGroup>
              <InputGroup>
                <Label>Your Age :</Label>
                <Input
                  type="text"
                  name="age"
                  placeholder="eg: 30"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </InputGroup>
            </InputRow>

            <InputGroup>
              <Label>University of Graduation :</Label>
              <Input
                type="text"
                name="university"
                placeholder="eg: Anna University"
                value={formData.university}
                onChange={handleInputChange}
              />
            </InputGroup>

            <InputGroup>
              <Label>Your Educational Qualifications :</Label>
              <TextArea
                name="educationalQualifications"
                placeholder="Graduation Degree"
                value={formData.educationalQualifications}
                onChange={handleInputChange}
              />
            </InputGroup>

            <InputGroup>
              <Label>Your Expertise :</Label>
              <TextArea
                name="expertise"
                placeholder="Expertise"
                value={formData.expertise}
                onChange={handleInputChange}
              />
            </InputGroup>
          </Section>

          {/* Availability Section */}
          <Section>
            <SubLabel>Please Select the Convenient Day for taking Classes :</SubLabel>
            <CheckboxGrid>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.availableDays.monday}
                  onChange={() => handleCheckboxChange('availableDays', 'monday')}
                />
                Monday
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.availableDays.tuesday}
                  onChange={() => handleCheckboxChange('availableDays', 'tuesday')}
                />
                Tuesday
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.availableDays.wednesday}
                  onChange={() => handleCheckboxChange('availableDays', 'wednesday')}
                />
                Wednesday
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.availableDays.thursday}
                  onChange={() => handleCheckboxChange('availableDays', 'thursday')}
                />
                Thursday
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.availableDays.friday}
                  onChange={() => handleCheckboxChange('availableDays', 'friday')}
                />
                Friday
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.availableDays.saturday}
                  onChange={() => handleCheckboxChange('availableDays', 'saturday')}
                />
                Saturday
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.availableDays.sunday}
                  onChange={() => handleCheckboxChange('availableDays', 'sunday')}
                />
                Sunday
              </CheckboxItem>
            </CheckboxGrid>
          </Section>

          {/* Communication Section */}
          <Section>
            <SubLabel>Tutor Medium of Communication :</SubLabel>
            <CheckboxGrid>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.communicationLanguages.english}
                  onChange={() => handleCheckboxChange('communicationLanguages', 'english')}
                />
                English
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.communicationLanguages.hindi}
                  onChange={() => handleCheckboxChange('communicationLanguages', 'hindi')}
                />
                Hindi
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.communicationLanguages.telugu}
                  onChange={() => handleCheckboxChange('communicationLanguages', 'telugu')}
                />
                Telugu
              </CheckboxItem>
              <CheckboxItem>
                <Checkbox
                  type="checkbox"
                  checked={formData.communicationLanguages.kannada}
                  onChange={() => handleCheckboxChange('communicationLanguages', 'kannada')}
                />
                Kannada
              </CheckboxItem>
            </CheckboxGrid>
          </Section>

          {/* Class Timing Section */}
          <Section>
            <SubLabel>Please Select the Class Timing ( Select Only One ) :</SubLabel>
            <CheckboxGrid>
              <CheckboxItem>
                <Radio
                  type="radio"
                  name="classTiming"
                  value="morning"
                  checked={formData.classTiming === 'morning'}
                  onChange={(e) => handleRadioChange('classTiming', e.target.value)}
                />
                Morning time
              </CheckboxItem>
              <CheckboxItem>
                <Radio
                  type="radio"
                  name="classTiming"
                  value="afternoon"
                  checked={formData.classTiming === 'afternoon'}
                  onChange={(e) => handleRadioChange('classTiming', e.target.value)}
                />
                Afternoon onwards
              </CheckboxItem>
              <CheckboxItem>
                <Radio
                  type="radio"
                  name="classTiming"
                  value="both"
                  checked={formData.classTiming === 'both'}
                  onChange={(e) => handleRadioChange('classTiming', e.target.value)}
                />
                Both Morning and Afternoon
              </CheckboxItem>
              <CheckboxItem>
                <Radio
                  type="radio"
                  name="classTiming"
                  value="evening"
                  checked={formData.classTiming === 'evening'}
                  onChange={(e) => handleRadioChange('classTiming', e.target.value)}
                />
                Evening time
              </CheckboxItem>
              <CheckboxItem>
                <Radio
                  type="radio"
                  name="classTiming"
                  value="asNeeded"
                  checked={formData.classTiming === 'asNeeded'}
                  onChange={(e) => handleRadioChange('classTiming', e.target.value)}
                />
                As per student needs
              </CheckboxItem>
            </CheckboxGrid>
          </Section>

          <ProceedButton type="submit">
            PROCEED TO NEXT STEP
          </ProceedButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}
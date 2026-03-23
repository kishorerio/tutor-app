'use client';

import styled from 'styled-components';

const FiltersContainer = styled.div`
  position: sticky;
  top: 100px;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  height: fit-content;
`;

const FilterTitle = styled.h3`
  font-family: 'Gilroy-Bold', sans-serif;
  font-size: 1.5rem;
  color: #1a202c;
  margin: 0 0 1.5rem 0;
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FilterLabel = styled.label`
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 1rem;
  color: #374151;
  display: block;
  margin-bottom: 0.5rem;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-family: 'Gilroy-Regular', sans-serif;
  font-size: 1rem;
  background: white;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const FilterInput = styled.input`
  width: 100%;
  padding: 0.75rem;
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

const FilterButton = styled.button`
  width: 100%;
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
`;

const ClearButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  border-radius: 8px;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background: #667eea;
    color: white;
  }
`;

export default function TutorFilters({ filters, onFilterChange, onApplyFilters, onClearFilters }) {
  return (
    <FiltersContainer>
      <FilterTitle>Filter Tutors</FilterTitle>
      
      <FilterGroup>
        <FilterLabel>Location</FilterLabel>
        <FilterSelect
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
        </FilterSelect>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel>Class</FilterLabel>
        <FilterSelect
          value={filters.class}
          onChange={(e) => onFilterChange('class', e.target.value)}
        >
          <option value="">All Classes</option>
          <option value="Class 6-8">Class 6-8</option>
          <option value="Class 9-10">Class 9-10</option>
          <option value="Class 11-12">Class 11-12</option>
        </FilterSelect>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel>Subject</FilterLabel>
        <FilterSelect
          value={filters.subject}
          onChange={(e) => onFilterChange('subject', e.target.value)}
        >
          <option value="">All Subjects</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Biology">Biology</option>
          <option value="English">English</option>
        </FilterSelect>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel>Tutor Name</FilterLabel>
        <FilterInput
          type="text"
          placeholder="Search by name..."
          value={filters.name}
          onChange={(e) => onFilterChange('name', e.target.value)}
        />
      </FilterGroup>

      <FilterButton onClick={onApplyFilters}>
        Apply Filters
      </FilterButton>
      
      <ClearButton onClick={onClearFilters}>
        Clear All Filters
      </ClearButton>
    </FiltersContainer>
  );
}
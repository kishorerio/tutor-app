'use client';

import styled from 'styled-components';
import { useState, useMemo } from 'react';
import TutorFilters from './TutorFilters';
import TutorCard from './TutorCard';
import Pagination from './Pagination';
import { tutorsData } from '../data/tutorsData';

const ListingSection = styled.section`
  padding: 4rem 0;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Gilroy-ExtraBold', sans-serif;
  font-size: 3rem;
  color: #1a202c;
  text-align: center;
  margin: 0 0 3rem 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ListingGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TutorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
`;

const NoResultsText = styled.p`
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 1.2rem;
  color: #64748b;
  margin: 0;
`;

const ResultsCount = styled.div`
  font-family: 'Gilroy-Medium', sans-serif;
  color: #64748b;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

export default function TutorListing() {
  const [filters, setFilters] = useState({
    location: '',
    class: '',
    subject: '',
    name: ''
  });
  
  const [appliedFilters, setAppliedFilters] = useState({
    location: '',
    class: '',
    subject: '',
    name: ''
  });
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleApplyFilters = () => {
    setAppliedFilters(filters);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    const emptyFilters = {
      location: '',
      class: '',
      subject: '',
      name: ''
    };
    setFilters(emptyFilters);
    setAppliedFilters(emptyFilters);
    setCurrentPage(1);
  };

  const filteredTutors = useMemo(() => {
    return tutorsData.filter(tutor => {
      return (
        (appliedFilters.location === '' || tutor.location.includes(appliedFilters.location)) &&
        (appliedFilters.class === '' || tutor.class.includes(appliedFilters.class)) &&
        (appliedFilters.subject === '' || tutor.subject.includes(appliedFilters.subject)) &&
        (appliedFilters.name === '' || tutor.name.toLowerCase().includes(appliedFilters.name.toLowerCase()))
      );
    });
  }, [appliedFilters]);

  const totalPages = Math.ceil(filteredTutors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTutors = filteredTutors.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ListingSection>
      <Container>
        <SectionTitle>Find Your Perfect Tutor</SectionTitle>
        
        <ListingGrid>
          <TutorFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
          />
          
          <div>
            <ResultsCount>
              Found {filteredTutors.length} tutor{filteredTutors.length !== 1 ? 's' : ''}
            </ResultsCount>
            
            <TutorsContainer>
              {paginatedTutors.length > 0 ? (
                paginatedTutors.map(tutor => (
                  <TutorCard key={tutor.id} tutor={tutor} />
                ))
              ) : (
                <NoResults>
                  <NoResultsText>
                    No tutors found matching your criteria. Try adjusting your filters.
                  </NoResultsText>
                </NoResults>
              )}
            </TutorsContainer>
            
            {filteredTutors.length > itemsPerPage && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalItems={filteredTutors.length}
                itemsPerPage={itemsPerPage}
              />
            )}
          </div>
        </ListingGrid>
      </Container>
    </ListingSection>
  );
}
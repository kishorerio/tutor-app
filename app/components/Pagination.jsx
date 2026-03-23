'use client';

import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const PageButton = styled.button`
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'white'};
  color: ${props => props.active ? 'white' : '#64748b'};
  border-radius: 8px;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 45px;

  &:hover {
    ${props => !props.active && `
      background: #f8fafc;
      border-color: #667eea;
      color: #667eea;
    `}
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PageInfo = styled.span`
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  margin: 0 1rem;
  font-size: 0.9rem;
`;

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange,
  totalItems,
  itemsPerPage 
}) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div>
      <PageInfo>
        Showing {startItem}-{endItem} of {totalItems} tutors
      </PageInfo>
      <PaginationContainer>
        <PageButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ←
        </PageButton>
        
        {getVisiblePages().map((page, index) => (
          page === '...' ? (
            <span key={index} style={{ padding: '0 0.5rem', color: '#64748b' }}>...</span>
          ) : (
            <PageButton
              key={page}
              active={currentPage === page}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PageButton>
          )
        ))}
        
        <PageButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          →
        </PageButton>
      </PaginationContainer>
    </div>
  );
}
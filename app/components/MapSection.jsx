'use client';

import styled from 'styled-components';

const MapContainer = styled.section`
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 5rem;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }
`;

const MapTitle = styled.h2`
  font-family: 'Gilroy-ExtraBold', sans-serif;
  font-size: 2.5rem;
  color: #1a202c;
  text-align: center;
  margin: 0 0 2rem 0;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MapWrapper = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: none;
  display: block;
`;

const LocationInfo = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }
`;

const LocationDetails = styled.div``;

const LocationTitle = styled.h4`
  font-family: 'Gilroy-Bold', sans-serif;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

const LocationAddress = styled.p`
  font-family: 'Gilroy-Regular', sans-serif;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-family: 'Gilroy-SemiBold', sans-serif;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }
  }

  &.secondary {
    background: white;
    color: #667eea;
    border: 2px solid #667eea;

    &:hover {
      background: #667eea;
      color: white;
    }
  }
`;

export default function MapSection() {
  const address = "123 Education Street, Learning City, LC 12345";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus";

  const getDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
    window.open(directionsUrl, '_blank');
  };

  const openInMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <MapContainer>
      <Container>
        <MapTitle>Visit Our Location</MapTitle>
        
        <MapWrapper>
          <MapFrame
            src={mapEmbedUrl}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="TutorApp Location"
          />
          
          <LocationInfo>
            <LocationDetails>
              <LocationTitle>TutorApp Headquarters</LocationTitle>
              <LocationAddress>
                123 Education Street<br />
                Learning City, LC 12345<br />
                United States
              </LocationAddress>
            </LocationDetails>
            
            <ActionButtons>
              <ActionButton className="primary" onClick={getDirections}>
                Get Directions
              </ActionButton>
              <ActionButton className="secondary" onClick={openInMaps}>
                View Larger Map
              </ActionButton>
            </ActionButtons>
          </LocationInfo>
        </MapWrapper>
      </Container>
    </MapContainer>
  );
}
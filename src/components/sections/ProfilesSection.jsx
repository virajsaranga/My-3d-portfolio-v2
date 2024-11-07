import React from 'react';
import styled from "styled-components";
import { Profiles as profilesData } from "../../data/constants";
import StarCanvas from "../canvas/Stars";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; 
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ProfilesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px; 
  justify-content: center;
`;

const ProfileCard = styled.div`
  max-width: 700px;
  background-image: linear-gradient(135deg, rgba(23, 92, 230, 0.1), rgba(0, 204, 255, 0.1)); /* Lighter gradient background */
  border: 1px solid rgba(255, 255, 255, 0.15); /* Slightly stronger border contrast */
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease, background-color 0.3s ease;

  color: #ffffff; /* White font color for content */

  &:hover {
    transform: translateY(-5px);
    background-color: rgba(23, 98, 230, 0.2); /* Slightly brighter background on hover */
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
    height: auto;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const ProfilesTitle = styled.div`
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 20px;
  text-align: center;
  color: #ffffff; /* Ensure title is white for visibility */
`;

const ProfilesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const ProfilesItem = styled.div`
 font-size: 16px;
  font-weight: 400;
  color: #ffffff; /* White text color for items */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Light border color */
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const ProfilesSection = () => {
  return (
    <div>
      <StarCanvas />
      <Container id="ProfilesSection">
        <Wrapper>
          <Title>Profile</Title>

          <ProfilesContainer>
            {profilesData && profilesData.map((profile, index) => (
              <ProfileCard key={`Profiles-${index}`}>
                <ProfilesTitle>{profile.title}</ProfilesTitle>
                <ProfilesList>
                  {profile.skills && profile.skills.map((item, index_x) => (
                    <ProfilesItem key={`Profiles-x-${index_x}`}>
                      {item.name}
                    </ProfilesItem>
                  ))}
                </ProfilesList>
              </ProfileCard>
            ))}
          </ProfilesContainer>
        </Wrapper>
        <br /><br />
      </Container>
    </div>
  );
};

export default ProfilesSection;

import React from 'react'
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import StarCanvas from "../canvas/Stars";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; /* Fixed spelling from "rlative" */
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px; /* Adjusted gap for better spacing */
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-image: linear-gradient(135deg, rgba(223, 0, 191, 0.3), rgba(23, 92, 230, 0.3)); /* Gradient background */
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  height: 300px; /* Fixed height for uniformity */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures title and list are spaced out */
  align-items: center; /* Centers the title and list */
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
    height: auto; /* Allow height to adjust on smaller screens */
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: #ffffff;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: auto;
  margin-top: auto;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <StarCanvas />
      <Wrapper>
        <Title>Skills</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Over the past few years, I’ve honed my expertise across a diverse range of technologies and tools. Here are some of the key skills that have shaped my journey and continue to drive my passion for creating impactful solutions.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      {item.image ? ( // Check if the image exists
                        <SkillImage src={item.image} alt={item.name} />
                      ) : null}
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
      <br /><br />
    </Container>
  )
}

export default Skills

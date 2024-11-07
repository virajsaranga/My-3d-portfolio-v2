import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

// Styled Components
const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const School = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #e0e0e0;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #e0e0e0;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

// EducationCard Component
const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "linear-gradient(135deg, rgba(223, 0, 191, 0.3), rgba(23, 92, 230, 0.3))", // Transparent gradient effect
        color: "#ffffff", // White text bg: "linear-gradient(135deg, #3a3a3a, #a36eff)",
        boxShadow: "rgba(23, 92, 230, 0.2) 0px 4px 24px", // Shadow effect
        borderRadius: "8px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}
      date={education?.date}  
    >
      <Top>
        <Image src={education?.img} />
        <Body>
          <School>{education?.school}</School>
          <Degree>{education?.degree}</Degree>
          <Date>{education?.date}</Date>
        </Body>
      </Top>
      <Description>
        {education?.desc && <Span>{education.desc}</Span>}
      </Description>
    </VerticalTimelineElement>
  );
};

export default EducationCard;

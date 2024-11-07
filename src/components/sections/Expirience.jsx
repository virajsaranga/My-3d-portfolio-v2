import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

// Styled Components
const PageContainer = styled.div`
  font-family: "Arial", sans-serif;

  padding: 0 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 40px 0;
  background-color: #222;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #ddd;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const ExperienceSection = styled.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperienceTitle = styled.h2`
  font-size: 32px;
  color: #fff; /* Updated color for better contrast */
  margin-bottom: 30px;
`;

const ExperienceCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ExperienceCard = styled.div`
  background: linear-gradient(135deg, rgba(23, 92, 230, 0.1), rgba(0, 204, 255, 0.1)); /* Lighter gradient */
  padding: 20px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 8px;
  color: #fff; /* Set text color to white */

  /* Optional border styling */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Light border for subtle separation */
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Position = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #ffddff; /* Lightened text color for contrast */
`;

const Company = styled.div`
  font-size: 16px;
  color: #dcdcdc; /* Lightened text color for readability */
  margin-top: 5px;
`;

const Date = styled.div`
  font-size: 14px;
  color: #bbbbbb; /* Slightly lighter gray for readability */
  margin-top: 5px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #e0e0e0; /* Lighter gray for readability on dark background */
  margin-top: 10px;
`;

const EducationCard = ({ experience }) => (
  <ExperienceCard>
    <Top>
      <Image src={experience.img} alt={experience.company} />
      <Body>
        <Position>{experience.position}</Position>
        <Company>{experience.company}</Company>
        <Date>{experience.date}</Date>
      </Body>
    </Top>
    <Description>{experience.description}</Description>
  </ExperienceCard>
);

const Portfolio = () => {
  const experienceData = [
    {
        img: "https://i.ibb.co/8xyCd3m/logo-for-freelancer.jpg",
        position: "Web Developer",
        company: "Freelance",
        date: "Jul 2024 - Present",
        description:
          "As a Web Developer (Self-employed), I've worked on projects using .NET Framework, Kendo UI, and SQL Server to build dynamic web applications. I also have experience with MERN stack projects and am passionate about DevOps, optimizing deployments and system performance.",
      },
    {
      img: "https://i.ibb.co/1sSj88Z/hasthiya.png",
      position: "Software Engineer Intern",
      company: "Hasthiya Information technology",
      date: "Jul 2022 - Oct 2023",
      description:
        "Contributed to feature development across several projects while collaborating directly with foreign product owners. Practiced Agile Scrum on a 3-week sprint cycle and participated in scrum meetings. Worked as a Full-Stack Developer, gaining hands-on experience with technologies including React.js, Node.js, Express.js, Java, JavaScript, SQL, MongoDB, Redux, FileZilla, Heroku, Cloudinary, Stripe, Agora SDK, CSS, and HTML.",
    },
  ];

  return (
    <PageContainer>
      <ContentWrapper>
        <ExperienceSection>
          <ExperienceTitle>Work Experience</ExperienceTitle>
          <ExperienceCardWrapper>
            {experienceData.map((exp, index) => (
              <ExperienceCard key={index}>
                <EducationCard experience={exp} />
              </ExperienceCard>
            ))}
          </ExperienceCardWrapper>
        </ExperienceSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Portfolio;

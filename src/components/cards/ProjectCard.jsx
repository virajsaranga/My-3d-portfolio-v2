import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: ${({ isExpanded }) => (isExpanded ? "90%" : "330px")};
  height: ${({ isExpanded }) => (isExpanded ? "auto" : "490px")};
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: ${({ isExpanded }) => (isExpanded ? "none" : "translateY(-10px)")};
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: ${({ isExpanded }) => (isExpanded ? "none" : "brightness(1.1)")};
  }
`;

const Image = styled.img`
  width: 100%;
  height: ${({ isExpanded }) => (isExpanded ? "auto" : "180px")};
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_on_primary};
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 12px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "none" : 2)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? "none" : 3)};
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Button = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;

const CloseButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_on_primary};
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 12px;
  align-self: flex-end;
`;

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card isExpanded={isExpanded} onClick={handleExpandClick}>
      <Image src={project.image} alt={project.title} isExpanded={isExpanded} />
      <Details>
        <Title isExpanded={isExpanded}>{project.title}</Title>
        <Description isExpanded={isExpanded}>{project.description}</Description>
      </Details>
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Button href={project.github} target="_blank">
        Click Here
      </Button>
      {isExpanded && (
        <CloseButton onClick={handleExpandClick}>Close</CloseButton>
      )}
    </Card>
  );
};

export default ProjectCard;

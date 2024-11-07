import React from "react";
import styled from "styled-components";

// Styled Components
const SectionContainer = styled.section`
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const BlogList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const BlogItem = styled.a`
  background: rgba(77, 121, 255, 0.1); /* Semi-transparent white background */
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  backdrop-filter: blur(10px); /* Glass effect */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3); /* Light border to enhance the glass effect */
  transition: all 0.3s ease-in-out;
  width: 100%;
  max-width: 350px; /* Set a maximum width */
  height: auto; /* Let the height adjust dynamically based on content */
  min-height: 250px; /* Minimum height for uniformity */
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }
`;

const BlogTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffd700;
  }
`;

const BlogDescription = styled.p`
  font-size: 16px;
  color: #ddd;
  line-height: 1.5;
`;

const TrendingTag = styled.span`
  font-size: 12px;
  color: #ff4500;
  font-weight: 600;
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 12px;
  align-self: flex-start;
`;

const ReadMoreButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  background: #5a2d9b;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #3e1c7e;
    transform: translateY(-3px);
  }
`;

const MoreButton = styled.a`
  margin-top: 30px;
  padding: 12px 30px;
  background: #5a2d9b;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-block;
  z-index: 1;  /* Ensure it is not covered by other elements */
  
  &:hover {
    background-color: #3e1c7e;
    transform: translateY(-3px);
    /* Optional: Add cursor style for better UX */
    cursor: pointer;
  }
`;

const BlogSection = () => {
  const blogArticles = [
    {
      title: "Understanding SOLID Principles: Enhancing Code Quality with Examples and Insights",
      link: "https://medium.com/@it20096298/understanding-solid-principles-enhancing-code-quality-with-examples-and-insights-ed3e0833bce6",
      description: "The SOLID principles are a set of five design principles that help software developers create more maintainable, flexible, and scalable code by promoting best practices in object-oriented programming."
    },
    {
      title: "Understanding OAuth Authentication: A Complete Guide with React and Node.js Example",
      link: "https://medium.com/@it20096298/understanding-oauth-authentication-a-complete-guide-with-react-and-node-js-example-da2dadf896c2",
      description: "OAuth authentication is a secure authorization framework that allows users to grant third-party applications limited access to their resources without sharing their credentials, and this guide demonstrates how to implement OAuth in a React and Node.js application for seamless user authentication."
    },
    {
      title: "How to Approach Algorithmic Problems: From Thought to Code",
      link: "https://medium.com/@it20096298/how-to-approach-algorithmic-problems-from-thought-to-code-f604ca969622",
      description: "This article provides a structured approach to tackling algorithmic problems, guiding you from understanding the problem through step-by-step problem-solving strategies to writing efficient code solutions."
    },
  ];

  return (
    <SectionContainer id="Blogs">
      <Title> Blog Articles</Title>
      <BlogList> {/* Changed from BlogSection to BlogList */}
        {blogArticles.map((article, index) => (
          <BlogItem key={index} href={article.link} target="_blank">
            <TrendingTag>Trending</TrendingTag>
            <BlogTitle>{article.title}</BlogTitle>
            <BlogDescription>{article.description}</BlogDescription>
            <ReadMoreButton>Read More</ReadMoreButton>
          </BlogItem>
        ))}
      </BlogList>
      <MoreButton href="https://medium.com/@it20096298" target="_blank">
        More Blog Articles
      </MoreButton>
    </SectionContainer>
  );
};

export default BlogSection;

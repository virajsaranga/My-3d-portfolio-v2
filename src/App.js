import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { coolDarkTheme } from "./utils/Themes"; // Ensure correct path
import { BrowserRouter } from "react-router-dom"; // Ensure correct import
import Navbar from "./components/Navbar"; // Ensure correct import

// Directly import all components
import Dashboard from "./components/sections/Dashboard";
import ProfilesSection from "./components/sections/ProfilesSection";
import Expirience from "./components/sections/Expirience";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Projects from "./components/sections/Projects";
import Blogs from "./components/sections/Blogs";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={coolDarkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          {/* Render all components directly without lazy loading */}
          <Dashboard />
          <ProfilesSection />
          <Expirience />
          <Skills />
          <Education />
          <Projects />
          <Blogs />
          <Contact />
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

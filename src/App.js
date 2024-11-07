import React, { Suspense, lazy } from "react";
import styled, { ThemeProvider } from "styled-components";
import { coolDarkTheme } from "./utils/Themes"; // Ensure correct path
import { BrowserRouter } from "react-router-dom"; // Ensure correct import
import Navbar from "./components/Navbar"; // Ensure correct import


// Lazy load other components
const Dashboard = lazy(() => import("./components/sections/Dashboard"));
const ProfilesSection = lazy(() => import("./components/sections/ProfilesSection"));
const Expirience = lazy(() => import("./components/sections/Expirience"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Education = lazy(() => import("./components/sections/Education"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));
const Blogs  = lazy(() => import ('./components/sections/Blogs'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
            <ProfilesSection />
            <Expirience />
            <Skills />
            <Education />
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
          </Suspense>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

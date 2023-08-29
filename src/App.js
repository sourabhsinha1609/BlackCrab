import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cybersecurity from "./pages/Services/Cybersecurity";
import AISolutions from "./pages/Services/AISolutions";
import CloudServices from "./pages/Services/CloudServices";
import DatabaseManagement from "./pages/Services/DatabaseManagement";
import ProductManufacturing from "./pages/Services/ProductManufacturing";
import RND from "./pages/Services/RND";
import TrainingAndWorkshops from "./pages/Services/TrainingAndWorkshops";
import MachineLearning from "./pages/Services/MachineLearning";

import Home from "./pages/Home";
import Header from "../src/components/Banner/Header";
import Footer from "./components/Footer/Footer";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import ScrollToTop from "./ScrollToTop";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Header />
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/cybersecurity" Component={Cybersecurity} />
            <Route path="/aisolutions" Component={AISolutions} />
            <Route path="/cloudservices" Component={CloudServices} />
            <Route path="/databasemanagement" Component={DatabaseManagement} />
            <Route
              path="/productmanufacturing"
              Component={ProductManufacturing}
            />
            <Route path="/researchanddevelopment" Component={RND} />
            <Route
              path="/trainingandworkshops"
              Component={TrainingAndWorkshops}
            />
            <Route path="/machinelearning" Component={MachineLearning} />
          </Routes>
        </ScrollToTop>
      </Router>
      <LightColor>
        <Footer />
      </LightColor>
    </>
  );
}

export default App;

const Container = styled.div``;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

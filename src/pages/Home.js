import ProfComponent from "../components/Banner/ProfComponent";
import Clients from "../components/Clients/Clients";
import Projects from "../components/Projects/Projects";
import Services from "../components/Service/Services";

import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Banner>
        <ProfComponent />
      </Banner>
      <Services />
      {/* <LightColor>
        <Projects />
      </LightColor> */}
      <Clients />
    </>
  );
};

export default Home;

const Banner = styled.div`
  height: 120vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;

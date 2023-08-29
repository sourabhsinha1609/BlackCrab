import React from "react";
import {
  HeroSection,
  HeroText,
  VideoIframe,
  VideoContainer,
  Container,
  MainHeading,
} from "./HeroStyles";

import { Slide } from "react-awesome-reveal";
import Navbar from "../Navbar/Navbar";

const Hero = () => {
  return (
    <HeroSection>
    <Navbar />
      <Container>
        <Slide direction="left" delay={1}>
          <MainHeading>Cloud Services</MainHeading>
        </Slide>
        <HeroText>
          Embracing the dynamic potential of cloud technology, our bespoke
          solutions are meticulously crafted to harness its inherent flexibility
          and scalability. Through our tailored offerings, we empower businesses
          to optimize their operations by capitalizing on the agility and
          expansive capabilities of the cloud. By seamlessly integrating cloud
          resources, our solutions drive enhanced efficiency across processes
          while fostering a fertile ground for innovation. This synergy enables
          organizations to adapt swiftly to changing demands, scale resources as
          needed, and unlock new avenues for creative problem-solving.
        </HeroText>
        <VideoContainer>
          <VideoIframe src="https://www.youtube.com/embed/i9x0UO8MY0g" />
        </VideoContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;

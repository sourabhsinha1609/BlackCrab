import React from "react";
import {
  HeroSection,
  HeroText,
  ButtonWrapper,
  VideoIframe,
  VideoContainer,
  Button,
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
          In the rapidly evolving landscape of the digital age, where
          interconnectedness and technological advancements are becoming
          increasingly prevalent, the security of digital assets has emerged as
          a critical concern for individuals, businesses, and organizations
          alike. This is where cutting-edge solutions play a pivotal role,
          offering a comprehensive and sophisticated approach to safeguarding
          valuable digital assets against the myriad of threats that can arise
          in this interconnected world.
        </HeroText>
        <VideoContainer>
          <VideoIframe src="https://www.youtube.com/embed/GX_XsdNv1PY" />
        </VideoContainer>
        <ButtonWrapper>
          <Button>Find Jobs</Button>
          <Button>Resources</Button>
        </ButtonWrapper>

      </Container>
    </HeroSection>
  );
};

export default Hero;

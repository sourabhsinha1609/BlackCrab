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

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Slide direction="left" delay={1}>
          <MainHeading>Cybersecurity</MainHeading>
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
      </Container>
    </HeroSection>
  );
};

export default Hero;

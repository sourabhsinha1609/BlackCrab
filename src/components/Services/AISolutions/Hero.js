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

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Slide direction="left" delay={1}>
          <MainHeading>AI Solutions</MainHeading>
        </Slide>
        <HeroText>
          The journey from machine learning to deep learning encapsulates a
          powerful AI-driven process that catalyzes the conversion of raw data
          into actionable insights, resulting in the streamlined optimization of
          business operations. Machine learning functions as a versatile tool,
          employing algorithms to meticulously scrutinize historical data,
          thereby discerning patterns that enable accurate predictions and
          informed decision-making. Building upon this foundation, deep learning
          introduces a sophisticated dimension by utilizing intricate neural
          networks to extract nuanced patterns from diverse data formats such as
          images, audio, and text.
        </HeroText>
        <VideoContainer>
          <VideoIframe src="https://www.youtube.com/embed/nxpUvJxnzzw" />
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

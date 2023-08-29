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
          <MainHeading>Research And Development</MainHeading>
        </Slide>
        <HeroText>
          At the forefront of technological advancement, we proudly stand as
          pioneers in the realm of tech research, propelling innovation through
          a relentless pursuit of exploration and experimentation. Our
          commitment to pushing boundaries drives us to embark on groundbreaking
          journeys into uncharted territories, seeking new insights and
          possibilities. Through rigorous experimentation, we unravel the
          intricacies of emerging technologies, dissecting their potential
          applications and implications.
        </HeroText>
        <VideoContainer>
          <VideoIframe src="https://www.youtube.com/embed/gejmtrdeE4M" />
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

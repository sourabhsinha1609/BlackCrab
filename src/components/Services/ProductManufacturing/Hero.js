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
          <MainHeading>Product Manufacturing</MainHeading>
        </Slide>
        <HeroText>
          Our range of cutting-edge technology products is the result of a
          fusion of unwavering passion and deep-rooted expertise. Crafted with
          meticulous care, these products are poised to redefine the way you
          engage with technology. The synergy of our passion and proficiency
          drives the innovation behind each product, setting them apart as
          instruments of transformation. From intuitive user interfaces to
          groundbreaking functionalities, our products are meticulously designed
          to elevate and reshape your interactions with technology, ushering in
          a new era of seamless, enriched experiences that cater to your
          evolving needs and desires.
        </HeroText>
        <VideoContainer>
          <VideoIframe src="https://www.youtube.com/embed/sccOJuxxQM8" />
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

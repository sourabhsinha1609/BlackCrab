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
          <MainHeading>Training And Workshops</MainHeading>
        </Slide>
        <HeroText>
          Elevate your team's capabilities through our all-encompassing training
          programs meticulously curated to equip individuals with cutting-edge
          technological knowledge. Crafted with precision, our programs are
          designed to empower participants with the latest industry insights,
          trends, and skill sets. By immersing learners in a dynamic learning
          environment, we facilitate the acquisition of expertise that is
          directly applicable to real-world scenarios. From honing technical
          proficiencies to fostering a deep understanding of emerging
          technologies, our training initiatives provide a transformative
          experience that enables your team to stay ahead of the curve.
        </HeroText>
        <VideoContainer>
          <VideoIframe src="https://www.youtube.com/embed/4-RZRLdBpFc" />
        </VideoContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;

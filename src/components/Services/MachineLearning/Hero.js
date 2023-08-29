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
          <MainHeading>Machine Learning</MainHeading>
        </Slide>
        <HeroText>
          The integration of AI technologies, encompassing machine learning and
          deep learning, drives a profound shift in business operations by
          converting raw data into informed decisions. Machine learning
          algorithms adeptly decipher historical data to predict outcomes and
          enhance processes, while deep learning, fueled by intricate neural
          networks, excels in recognizing intricate patterns in diverse data
          types like images and text. Through data collection, preparation, and
          analysis, AI enables organizations to unearth hidden insights,
          optimize processes, and make strategic choices, ultimately
          revolutionizing the way businesses operate and respond to evolving
          market dynamics.
        </HeroText>
        <VideoContainer>
          <VideoIframe src="https://www.youtube.com/embed/NWONeJKn6kc" />
        </VideoContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;

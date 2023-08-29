import React from "react";
import services from "../../Data/services";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          Our <span className="green">services</span>
        </h4>
        <h1>What We Offer</h1>
      </Slide>
      <Cards>
        {services.map(service => (
          <Slide direction={service.dir}>
            <a href={service.link}>
            <Card
              Icon={service.icon}
              title={service.title}
              disc={service.disc}
            />
            </a>
          </Slide>
        ))}
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
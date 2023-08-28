import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPrecisionManufacturing, MdAndroid, MdSecurity } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { GiArchiveResearch } from "react-icons/gi";
import { AiOutlineCloudServer } from "react-icons/ai";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const services = [
  {
    icon: MdAndroid,
    title: "AI Solutions",
    disc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    dir: "left"
  },
  {
    icon: MdSecurity,
    title: "Cyber Security",
    disc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    dir: "left"
  },
  {
    icon: FiDatabase,
    title: "Database Management",
    disc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    dir: "right"
  },
  {
    icon: MdPrecisionManufacturing,
    title: "Product Manufacturing",
    disc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    dir: "right"
  },
  {
    icon: AiOutlineCloudServer,
    title: "Cloud Services",
    disc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    dir: "left"
  },
  {
    icon: FaChalkboardTeacher,
    title: "Training and Workshops",
    disc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    dir: "left"
  },
  {
    icon: GiArchiveResearch,
    title: "Research and Development",
    disc: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    dir: "left"
  }
];

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
            <Card
              Icon={service.icon}
              title={service.title}
              disc={service.disc}
            />
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

import styled from "styled-components";

export const HeroSection = styled.section`
  background-position: center;
  background-color: black;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 100px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.1);
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.8rem, 1.5vw, 0.9rem);
  line-height: 30px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 60%;
  height: 100px;
  flex-shrink: 0;
  flex-direction: column;
  padding: 0 1rem;
  order: 2;
  margin: 2rem auto;
  display: flex;
  justify-content: center; /* Center the video horizontally */

  @media (min-width: 1421px) {
    height: 25rem;
    max-width: 50rem;
    padding: 0 4rem;
  }

  @media (max-width: 480px) {
    max-width: 35rem;
    height: 20rem; /* Adjust the height for smaller mobile screens */
    margin-top: -2rem; /* Adjust the margin-top for smaller mobile screens */
    margin: auto;
  }

  @media (min-width: 480px) and (max-width: 1420px) {
    max-width: 40rem; /* Adjust the width for tablets */
    height: 25rem; /* Adjust the height for tablets */
    margin: auto; /* Center the video horizontally on tablets */
  }
`;

export const VideoIframe = styled.iframe`
  height: 100%;
  width: auto; /* Set the width to auto for small screens */
  max-width: 100%; /* Ensure the video doesn't exceed the container width */
  border-radius: 0.5rem;
  margin-bottom: 2rem;

  &:hover {
    transform: scale(1.05); /* Scale the container on hover */
    transition: transform 0.5s ease; /* Transition the scaling with a slow speed */
    box-shadow: 0 0 32px 2px #59256f; /* Apply the box shadow on hover */
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 1rem;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;

  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 500%;
  }

  &:hover {
    transform: scale(1.05); /* Scale the container on hover */
    transition: transform 0.5s ease; /* Transition the scaling with a slow speed */
    box-shadow: 0 0 32px 2px #59256f; /* Apply the box shadow on hover */
    color: black;
  }
`;

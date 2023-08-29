import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import {  AiFillLinkedin,AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {

  return (
    <>
    <Container id="footer">
      
      <Form>
        <Slide direction="right">
          <form>
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Fullname..." />
            </div>
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>
            <Button>Submit</Button>
          </form>
          
        </Slide>
      </Form>

      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Get in Touch</h1>
        </Slide>
        <div className="links">
          <Slide direction="left">
            <h1>Contact us directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+916207448507">+91 620 744 8507</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:connect@blackcrabit.com">connect@blackcrabit.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Visit our profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="/">
                  <AiFillInstagram />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
           
        
          </div>
        </div>
      </Profile>
    </Container>
    <Fade>
        </Fade>
    <Copyright>
      <p>©2023 Blackcrab. All Rights Reserved | Terms and Conditions | Privacy Policy</p>
    </Copyright>
    </>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  gap: 15rem;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column-reverse; /* Switched to column-reverse */
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  

  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;

    }

    

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: #993399;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 2rem 0;
    }

    .icons {
      display: flex;
      align-items: center;
      
      

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: #993399;
          
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

const Form = styled.div`
  flex: 1;
  width: 100%;

  
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #0c0c0c;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }


    }
  }
`;

const Copyright = styled.div`
background-color: #000;
height: 3rem;
position: relative;
display: flex;
align-items: center;
justify-content: center;


p {
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  /* Adjust styles for small screens */
  height: 2rem;
  p {
    font-size: 0.6rem;
  }
}
  
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 550;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
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
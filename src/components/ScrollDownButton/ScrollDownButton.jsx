import React from 'react';
import styled from 'styled-components';

const ScrollDownButton = () => {
  return (
    <Indicator>
      <span></span>
      <span></span>
      <span></span> 
      <span></span>
    </Indicator>
  );
};

export default ScrollDownButton;

const Indicator = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(45deg);
  margin-top:2rem;
cursor:pointer;
  span {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 3px solid #fff;
    border-right: 3px solid #fff;
    animation: animate 1s linear infinite;

    &:nth-child(1) {
      top: -30px;
      left: -30px;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      top: -15px;
      left: -15px;
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      top: 0;
      left: 0;
      animation-delay: 0.4s;
    }
    &:nth-child(4) {
      top: 15px;
      left: 15px;
      animation-delay: 0.6s;
    }
    &:nth-child(5) {
      top: 30px;
      left: 30px;
      animation-delay: 0.8s;
    }
  }

  @keyframes animate {
    0% {
      border-color: #fff;
      transform: translate(0, 0);
    }
    20% {
      border-color: #fff;
      transform: translate(15px, 15px);
    }
    20.1%, 100% {
      border-color: #993399;
    }
  }
`;

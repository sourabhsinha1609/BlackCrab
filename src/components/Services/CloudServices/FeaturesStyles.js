import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "140px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 30px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
  font-size: 2.5rem;
  color: #fff;
`;

export const FeatureTextWrapper = styled.div`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  grid-gap: 2rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureColumn = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #0c0c0c;
  padding: 20px;
  margin: 2rem;
  border-radius: 20px;

  &:hover {
    transform: scale(2); 
    transition: transform 0.5s ease; 
    box-shadow: 0 0 32px 2px #59256f; 
  }
`;

export const FeatureImageWrapper = styled.div`
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 2px solid #800080;
  padding: 30px;
`;
export const FeatureName = styled.h3`
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
export const FeatureText = styled.p`
  margin: 1rem 0 auto;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #bdbdbd;
`;

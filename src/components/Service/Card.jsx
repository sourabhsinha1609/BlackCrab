import React from 'react'
import styled from 'styled-components';

const Card = (props) => {
  const { Icon, disc, title } = props;
  return (
    <Container>
      <span className='green'><Icon /></span>
      <h1>{title.toUpperCase()}</h1>
      <p>{disc}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
    width: 100%;
    background-color: #0c0c0c;    
    padding: 2rem;
    text-align: center;
    line-height: 1.5rem;
    border-radius: 0.5rem;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 0.8rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.95rem;
        text-align: center;
    }
    transition:transform 0.4s ease-in-out,background-color 0.4s ease-in-out,box-shadow 0.4s ease-in-out;
    &:hover{
      transform : scale(1.05);
      background-color: #1a1a1a;
      box-shadow: 0px 0px 200px rgba(153, 51, 153, 0.6); 
    }
`

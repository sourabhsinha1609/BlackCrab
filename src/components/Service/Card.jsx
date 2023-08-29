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
`

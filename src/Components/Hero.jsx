import React from 'react'
import styled from 'styled-components'
import HeroImage from '../images/hero-image.jpg'

const HeroContainerStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: radial-gradient(rgba(1,1,1,0.1), rgba(1,1,1,0.9)), url(${HeroImage});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h1{
        font-size: 3rem;
    }

    p{
        font-size: 20px;
    }

    p,h1{
        color: #f1ecece2;
    }

    button{
        background-color: transparent;
        padding: 20px 40px;
        border: 1px solid white;
        color:white;
    }

`

const Hero = () => {
  return (
    <HeroContainerStyled>
        <div>
            <p>exclusive drink services</p>
            <h1>Cocktail stage evenings</h1>
        </div>
        <button>View more</button>
        

    </HeroContainerStyled>
  )
}

export default Hero
import React from 'react'
import styled from 'styled-components'
import BarImage from '../images/photo-bar.jpg'

const SectionContainerStyled = styled.section`
    width: 100%;
    display: flex;
    padding: 100px 0;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    .description{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    h2{
        color:#e8e1e1;
        font-size: 40px;
    }

    p{
        color: #e8e1e1;
        font-size: 18px;
    }

    div{
        display: flex;
        flex-direction: column;
    }

    .image-container{
      
        width: 400px;
    }

    img{
        object-fit: cover;
        object-position: center;
    }

    @media(max-width: 780px){
        flex-direction: column;

        .image-container{
            width: 100%;
        }

        .description{
            padding: 100px 0;
        }
    }
`

const SectionHorarios = () => {
  return (
    <SectionContainerStyled>
        <div className='description'>
            <div>
                <p>visit a bar</p>
                <h2>Open Hours</h2>
            </div>
            <div>
                <p>Monday-Friday:</p>
                <p>4:00pm-3:00am</p>
            </div>
            <div>
                <p>Saturday:</p>
                <p>4:00pm-3:00am</p>
            </div>
            <div>
                <p>Sunday:</p>
                <p>4:00pm-3:00am</p>
            </div>
            
        </div>
        <div className='image-container'>
            <img src={BarImage} alt="" />
        </div>
        <div className='description'>
            <p>The best offer</p>
            <h2>Happy Hour</h2>
            <div>
                <p>Monday-Friday</p>
                <p>4:00pm-3:00am</p>
            </div>
            <div>
                <p>Saturday</p>
                <p>4:00pm-3:00am</p>
            </div>
            <div>
                <p>Sunday</p>
                <p>4:00pm-3:00am</p>
            </div>
        </div>
    </SectionContainerStyled>
  )
}

export default SectionHorarios
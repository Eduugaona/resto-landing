import React from 'react'
import styled from 'styled-components'

const FooterStyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 25%));
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #e8e3e3;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #0e0d0d;

    p{
        width:100%;
        font-size: 15px;
        line-height: normal;
    }

    h3{
        font-size: 30px;
    }

    .footer-sections{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
       
    }

    .footer-sections div{
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
     
    }

    .schedule{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

   
`

const Footer = () => {
  return (
    <FooterStyledContainer>
        <div className='footer-sections'>
            <h3>Bridge</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloribus.</p>
            
                <div>
                    <p>Mon-Sun: 09am - 09pm</p>
                    <p>1611 Linden Avenue, London</p>
                    <p>301-382-4311,301-461-9671</p>
                </div>
                
            
        </div>

        <div className='footer-sections'>
            <h3>Pages</h3>
            <div>
                <p>Home</p>
                <p>Reservations</p>
                <p>Meny</p>
                <p>Contact</p>
            </div>
        </div>

        <div className='footer-sections'>
            <h3>Open hours</h3>
            <div className='schedule'>
                <div>
                    <p>Monday-Friday:</p>
                    <p>10:00am - 01:00am</p>
                </div>
                <div>
                    <p>Saturday-Sunday:</p>
                    <p>10:00am - 03:00am</p>
                </div>
            </div>
        </div>
        <div className='footer-sections'>
            Instagram
        </div>
    </FooterStyledContainer>
  )
}

export default Footer
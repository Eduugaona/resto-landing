import React from 'react'
import BannerBar from '../images/banner-bar.jpg'
import styled from 'styled-components'

const BannerSectionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0;


    img{
        max-width: 95%;
    }
`

const Banner = () => {
  return (
    <>
    <BannerSectionContainer>
        <img src={BannerBar} alt="" />
    </BannerSectionContainer>
    </>
  )
}

export default Banner
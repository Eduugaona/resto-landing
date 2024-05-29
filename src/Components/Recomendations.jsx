import React from 'react'
import styled from 'styled-components'
import BarmanPicture from '../images/barman-image.jpg'
import { dataMenu } from '../data/data'

const RecomendationsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    padding: 50px 0;

    .recomendations-tittle-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    p,h3{
        color: white;
        text-align: center;
    }

    h3{
        font-size: 50px;
    }

    img{
        width: minmax(100%, 400px);
        height: 400px;

    }

    .recomendations-menu-container{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        gap: 150px;
    }

    .menu-list-container{
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .menu-list-container div{
        width: 100%;
    }

    .menu-list-container button{
        padding: 15px 35px;
        background-color: transparent;
        border: 1px solid #f0eaea;
        color: #fafafa;
    }

    .menu-list{
        display: flex;
        flex-direction: column;
        padding-bottom: 10px ;
        width: 100%;
    }

    .menu-list div{
        display: flex;
        justify-content: space-between;
    }

    .description{
        font-size: 12px;
        text-align: justify;
    }

    .menu-name p{
        font-size: 20px;
    }

    @media(max-width: 780px){
        img{
            display: none;
        }

        .menu-list-container{
            width: 90%;
        }
    }
`

const Recomendations = () => {
  return (
    <RecomendationsContainer>
        <div className='recomendations-tittle-container'>
            <p>This week's specials </p>
            <h3>We recommend</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, error.</p>
        </div>


        <div className='recomendations-menu-container'>
            <div className='menu-list-container'>
                <div>
                    {dataMenu.map( item  => 
                    <div className='menu-list'>
                        <div className='menu-name'>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                        </div>
                        <p className='description'>{item.description}</p>
                    </div>
                    )}
                    
                        
                    

                    </div>
                <button> View more </button>
            </div>

            
                <img src={BarmanPicture} alt="" />
            
        </div>
    </RecomendationsContainer>
  )
}

export default Recomendations
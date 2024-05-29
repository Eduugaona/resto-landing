import Header from "./Components/Header";
import Hero from "./Components/Hero";
import GlobalStyle from "./GlobalStyles";
import SectionHorarios from "./Components/SectionHorarios";
import styled from "styled-components";
import Banner from "./Components/Banner";
import Recomendations from "./Components/Recomendations";
import Footer from "./Components/Footer";


const PrincipalContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <>
    <PrincipalContainer>
      <Header/>
      <Hero/>
      <SectionHorarios/>
      <Banner/>
      <Recomendations/>
      <Footer/>
    </PrincipalContainer> 
    <GlobalStyle />
    </>
  );
}

export default App;

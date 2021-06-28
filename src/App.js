//Module imports
import styled from "styled-components";

//Component imports
import Initiate from "./components/initiate"

const Container = styled.div`
  background-color:#f8f8ff;
  display:grid;
`

const Header = styled.h1`
  height:100%;
  margin-top:0;
  margin-bottom:0;

`

const Paragraph = styled.p`
  vertical-align:bottom;
  
  margin-top:auto;
  margin-bottom:0;
`

const InitiateContainer = styled.div`

`

const InfoContainer = styled.div`
  display:grid;
  grid-template-columns:repeat(1,1FR);
  /* height:3rem; */
`

function App() {
  return (
    <Container>
      <InfoContainer>
        <Header>Grade calculator</Header>
        <Paragraph>This website has been created to simplify the calculation of your grades, and predict what types of grades you need, and where you should focus your effort.</Paragraph>
      </InfoContainer>
      <InitiateContainer>
        <Initiate/>
      </InitiateContainer>
    </Container>
  );
}

export default App;

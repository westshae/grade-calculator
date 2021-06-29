//Module imports
import styled from "styled-components";

//Component imports
import Initiate from "./components/initiate"

const Container = styled.div`
  background-color:#2f3745;
  display:grid;
  height:100%;
  width:80%;
  margin-left:auto;
  margin-right:auto;
`

const Header = styled.h1`
  margin-top:0;
    margin-bottom:0;
    color:#f6f1f4;
    margin-left:0.1rem;

`

const Paragraph = styled.p`
  vertical-align:bottom;
  
  margin-top:auto;
  margin-bottom:0.25rem;
  font-size:1.1rem;
  margin-left:1rem;
  color:#f6f1f4;

`

const InfoContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 4fr;
  border-bottom:solid #1B6CA8 2px;

  background-color:#222831;
  margin-bottom:1rem;
`

function App() {
  return (
      <Container>
        <InfoContainer>
            <Header>Grade calculator</Header>
            <Paragraph>This website has been created to simplify the calculation of your grades, and predict what types of grades you need, and where you should focus your effort.</Paragraph>
        </InfoContainer>
        <Initiate/>
      </Container>
  );
}

export default App;

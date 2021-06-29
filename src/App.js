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
  height:100%;
  margin-top:0;
  margin-bottom:0;

`

const Paragraph = styled.p`
  vertical-align:bottom;
  
  margin-top:auto;
  margin-bottom:0.25rem;
  font-size:1.1rem;
  margin-left:0.2rem;
`

const InfoContainer = styled.div`
  display:flexbox;
  border-bottom:solid #222831;
  margin-bottom:1rem;
`

function App() {
  return (
    <div>
      <InfoContainer>
          <Header>Grade calculator</Header>
          <Paragraph>This website has been created to simplify the calculation of your grades, and predict what types of grades you need, and where you should focus your effort.</Paragraph>
      </InfoContainer>
      <Container>
        <Initiate/>
      </Container>
    </div>
  );
}

export default App;

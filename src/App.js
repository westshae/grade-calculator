//Module imports
import styled from "styled-components";

//Component imports
import Initiate from "./components/initiate"
import {Header, Paragraph} from "./components/styles"

const Container = styled.div`
  background-color:#f8f8ff;
  display:grid;
`

const InitiateContainer = styled.div`

`

const InfoContainer = styled.div`

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

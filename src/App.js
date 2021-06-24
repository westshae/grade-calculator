//Module imports
import styled from "styled-components";

//Component imports
import Initiate from "./components/initiate"

const Warning = styled.p`

`

function App() {
  return (
    <div>
      <header>Grade calculator</header>
      <p>This website has been created to simplify the calculation of your grades, and predict what types of grades you need, and where you should focus your effort.</p>
      <Warning>Please set the number of classes and papers for each before editing the values, as you might get the wrong totals if you don't.</Warning>
      <br/><br/>
      <Initiate/>
    </div>
  );
}

export default App;

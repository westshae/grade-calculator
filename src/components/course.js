import styled from "styled-components"
import React, {useState} from "react"

//Component import
import Paper from "./paper"

const Container = styled.div`
    display:flexbox;
`

const Label = styled.label`
    display:flexbox;
`

const Input = styled.input`
    display:flexbox;
`

const Course = () =>{
    const [numPapers, setNumPapers] = useState(1);

    const handleInputs = e => {
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = 1;}

        //Checks if the values fit the correct range, if not changes value
        let valueInt = parseInt(value);
        if(valueInt > 15){valueInt = 15;}
        if(valueInt <= 0){valueInt = 1;}


        setNumPapers(valueInt);
    }

    return(
        <div>
            <Container>
                <Label>Number of assignments/tests (Anything you're marked for) {this.props.id}</Label>
                <Input type="number" onChange={this.handleInputs.bind(this)} defaultValue={1} value={this.state.numPapers}/>
            </Container>

            <br/>


             <p>Total: {this.state.test}</p>
        </div>
    )
}

export default Course;
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
    const [total, setTotal] = useState(1);

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

    const getValue = (test) =>{
        alert(test)
    }

    return(
        <div>
            <Container>
                <Label>Number of assignments/tests (Anything you're marked for)</Label>
                <Input type="number" onChange={handleInputs} defaultValue={1} value={numPapers}/>
            </Container>

            <br/>

            {Array(numPapers).fill().map((item, index)=>{
                return <Paper getData={getValue} key={index}/>
            })}

            <p>Paper Total: {total}</p>
        </div>
    )
}

export default Course;
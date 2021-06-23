import styled from "styled-components";
import React, { useState } from "react";


const Label = styled.label`
    display:flexbox;
`

const Input = styled.input`
    display:flexbox;
`
const Container = styled.div`
    display:flexbox;
    flex-direction:row;
`

const Paper = () =>{
    const [gradePercent, setGradePercent] = useState(1);
    const [percentOfGrade, setPercentOfGrade] = useState(1);

    const handleGradePercent = e => {
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = 1;}

        //Checks if the values fit the correct range, if not changes value
        let valueInt = parseInt(value);
        if(valueInt > 15){valueInt = 15;}
        if(valueInt <= 0){valueInt = 1;}

        setGradePercent(valueInt)
    }

    const handlePercentOfGrade = e => {
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = 1;}

        //Checks if the values fit the correct range, if not changes value
        let valueInt = parseInt(value);
        if(valueInt > 15){valueInt = 15;}
        if(valueInt <= 0){valueInt = 1;}


        setPercentOfGrade(valueInt)
    }


        return(
             <Container>
                <p>Individual work</p>
                <Label>Work grade</Label>
                <p></p>
                <Input type="number" onChange={handleGradePercent} defaultValue={0} value={gradePercent}/>

                <Label>Percent of grade</Label>
                    <Input type="number" onChange={handlePercentOfGrade} defaultValue={0} value={gradePercent}/>
                <p>Total: {percentOfGrade * percentOfGrade}</p>
                <br/>
            </Container>
    )
}

export default Paper;
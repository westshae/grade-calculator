import styled from "styled-components";
import React, { useState } from "react";
import { useEffect } from "react";


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

const Paper = (props) =>{
    const [gradePercent, setGradePercent] = useState(1);
    const [percentOfGrade, setPercentOfGrade] = useState(1);
    const [total, setTotal] = useState(1);

    const handleGradePercent = e => {
        //Checks that the value passed in is a number, and checked that it isn't empty.
        let value = e.target.value;
        let valueInt = 0;
        switch(value){
            case (!Boolean(value)):
                break;
            case (isNaN(value)):
                break;
            default:
                valueInt = parseInt(value)
        }

        switch(valueInt){
            case (valueInt > 100):
                break;
            case (valueInt < 0):
                break;
        }

        setGradePercent(valueInt)
    }

    const handlePercentOfGrade = e => {
        //Checks that the value passed in is a number, and checked that it isn't empty.
        let value = e.target.value;
        let valueInt = 0;
        switch(value){
            case (!Boolean(value)):
                break;
            case (isNaN(value)):
                break;
            default:
                valueInt = parseInt(value)
        }

        switch(valueInt){
            case (valueInt > 100):
                break;
            case (valueInt < 0):
                break;
        }

        setPercentOfGrade(valueInt)
    }

    useEffect(()=>{
        setTotal((percentOfGrade*.1)*(gradePercent*0.1))
    }, [percentOfGrade, gradePercent])

        return(
             <Container>
                <p>Individual work</p>
                <Label>Work grade</Label>
                <p></p>
                <Input type="number" onChange={handleGradePercent} defaultValue={1} value={gradePercent}/>

                <Label>Percent of grade</Label>
                <Input type="number" onChange={handlePercentOfGrade} defaultValue={1} value={percentOfGrade}/>
                <button onClick={()=>props.getData((Math.round(total)))}>Button for alert</button>
                <p>Total: {Math.round(total)}%</p>
                <br/>
            </Container>
    )
}

export default Paper;
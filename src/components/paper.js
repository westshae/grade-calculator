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
    const [gradePercent, setGradePercent] = useState(0);
    const [percentOfGrade, setPercentOfGrade] = useState(0);
    const [paperTotal, setPaperTotal] = useState(0);

    const handleGradePercent = e => {
        let value = e.target.value;
        switch(value){
            case (!Boolean(value)):break;
            case (isNaN(value)):break;
            case (value > 100):break;
            case (value < 0):break;
        }

        setGradePercent(value)
    }

    const handlePercentOfGrade = e => {
        let value = e.target.value;
        switch(value){
            case (!Boolean(value)):break;
            case (isNaN(value)):break;
            case (value > 100):break;
            case (value < 0):break;
        }

        setPercentOfGrade(value)
    }

    useEffect(()=>{
        setPaperTotal((gradePercent*0.1)*(percentOfGrade*0.1));
    }, [gradePercent, percentOfGrade])

    useEffect(()=>{
        props.callback(props.index, paperTotal);
    }, [paperTotal])

    return(
         <Container>
            <p>Individual work {props.index}</p>
            <Label>Work grade</Label>
            <Input type="number" onChange={handleGradePercent} value={gradePercent}/>

            <Label>Percent of grade</Label>
            <Input type="number" onChange={handlePercentOfGrade} value={percentOfGrade}/>
            <p>Total: {paperTotal}%</p>
            <br/>
        </Container>
    )
}

export default Paper;
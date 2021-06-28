import styled from "styled-components";
import React, { useState, useEffect } from "react";


const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(6,1fr);
    grid-template-rows:1fr;
`

const Paragraph = styled.p`
    height:100%;
`

const Input = styled.input`
    height:100%;
`

const Paper = (props) =>{
    const [gradePercent, setGradePercent] = useState(null);
    const [percentOfGrade, setPercentOfGrade] = useState(null);
    const [paperTotal, setPaperTotal] = useState(null);

    //Handles input change of gradePercent
    const handleGradePercent = e => {
        let value = e.target.value;
        switch(value){
            case (!Boolean(value)):break;
            case (isNaN(value)):break;
            case (value > 100):break;
            case (value < 0):break;
            default://continue
        }

        setGradePercent(value)
    }

    //Handles input change of percentOfGrade
    const handlePercentOfGrade = e => {
        //Validates the entry received
        let value = e.target.value;
        switch(value){
            case (!Boolean(value)):break;
            case (isNaN(value)):break;
            case (value > 100):break;
            case (value < 0):break;
            default://continue
        }

        setPercentOfGrade(value)
    }

    //Detects change of gradePercent or percentOfgrade and sets paperTotal
    useEffect(()=>{
        setPaperTotal((gradePercent*0.1)*(percentOfGrade*0.1));
    }, [gradePercent, percentOfGrade])

    //Detects change of paperTotal then sends index and paper total to course.js
    //Seperate from above useEffect for syncing data
    useEffect(()=>{
        props.callback(props.index, paperTotal);
    }, [paperTotal])

    return(
         <Container>
            <p>Individual work {props.index}</p>
            <Paragraph>Work grade</Paragraph>
            <Input onChange={handleGradePercent} value={gradePercent}/>

            <Paragraph>Percent of grade</Paragraph>
            <Input onChange={handlePercentOfGrade} value={percentOfGrade}/>
            <p>Total: {paperTotal}%</p>
            <br/>
        </Container>
    )
}

export default Paper;
import styled from "styled-components";
import React, { useState, useEffect } from "react";


const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows:1fr;
    background-color:#222831;

    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Paragraph = styled.p`
    color:#F6F7F9;
    margin-top:auto;
    margin-bottom:auto;
    text-align:center;    
    padding-top:5%;
    padding-bottom:5%;
    font-size:1.5rem;
    margin-left:auto;
    margin-right:auto;

    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        text-align:left;
        margin-left:1rem;
    }

`

const ID = styled(Paragraph)`
    font-size:1.5rem;
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
    }
`
const Total = styled(Paragraph)`
    font-size:1.5rem;
`

const Input = styled.input`
    color:#F6F7F9;

    background-color:#393E46;
    border:none;
    height:100%;
    padding-top:0;
    padding-bottom:0;
    vertical-align:middle;

    width:5rem;
    text-align:center;
    font-size:2rem;

    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        margin-top:auto;
        margin-bottom:auto;
        height:4rem;
        text-align:none;
        vertical-align:baseline;
        width:80%;
        border-left: 2px solid #1B6CA8;
    }
`


const InputContainer = styled.div`
    display:flexbox;
    vertical-align:middle;
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        display:grid;
        grid-template-columns:1fr 2fr;
        align-items: center;
        justify-items: center;
    }
`

const HR = styled.hr`
    color:#1B6CA8;
    height:3px;
    border:none;
    background-color:#1B6CA8;
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
    }, [paperTotal, props])

    return(
        <div>
            <Container>
                <ID>ID:{props.id}</ID>
                <InputContainer>
                    <Paragraph>Work <br/> grade</Paragraph>
                    <Input onChange={handleGradePercent} value={gradePercent}/>
                </InputContainer>

                <InputContainer>
                    <Paragraph>Percent <br/> of grade</Paragraph>
                    <Input onChange={handlePercentOfGrade} value={percentOfGrade}/>
                </InputContainer>

                <Total>Total: {paperTotal}%</Total>

            </Container>
            <HR/>
        </div>
    )
}

export default Paper;
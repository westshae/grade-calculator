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
    useEffect(()=>{setPaperTotal((gradePercent*0.1)*(percentOfGrade*0.1))}, [gradePercent, percentOfGrade])

    const [previousPaperTotal, setPreviousPaperTotal] = useState(0);
    useEffect(()=>{setPreviousPaperTotal(paperTotal)}, [paperTotal])

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
            default:
                //Continue
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
            default:
                //Continue
        }

        setPercentOfGrade(valueInt)
    }

    useEffect(()=>{
        setPreviousPaperTotal(paperTotal);
        setPaperTotal((percentOfGrade*.1)*(gradePercent*0.1));
    }, [percentOfGrade, gradePercent])

    useEffect(()=>{
        props.getData(paperTotal, previousPaperTotal, props.index);
        console.log("paper total change")
    }, [paperTotal])

    useEffect(()=>{
        console.log("paper effects")
    })

        return(
             <Container>
                <p>Individual work</p>
                <Label>Work grade</Label>
                <p></p>
                <Input type="number" onChange={handleGradePercent} defaultValue={0} value={gradePercent}/>

                <Label>Percent of grade</Label>
                <Input type="number" onChange={handlePercentOfGrade} defaultValue={0} value={percentOfGrade}/>
                <p>Total: {paperTotal}%</p>
                <br/>
            </Container>
    )
}

export default Paper;
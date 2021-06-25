import styled from "styled-components"
import React, { useState, useRef, useEffect } from "react"

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

const Course = (props) =>{
    const [numPapers, setNumPapers] = useState(0);
    const [classTotal, setClassTotal] = useState(0);
    const [previousCourseTotal, setPreviousCourseTotal] = useState(0);
    useEffect(()=>{setPreviousCourseTotal(classTotal)}, [classTotal])

    const [paperList, setPaperList] = useState([])


    const prevPapersRef = useRef()

    useEffect(()=>{
        prevPapersRef.current = numPapers;
    })

    const prevPapers = prevPapersRef.current

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

    // const getValue = (paperTotal, previousTotal) =>{
    //     if(isNaN(paperTotal) || isNaN(previousTotal)){return;}
    //     if(numPapers === prevPapers){
    //         setClassTotal((classTotal-previousTotal) + paperTotal);
    //     }else{
    //         setClassTotal((classTotal) + paperTotal);
    //     }
    // }
    const getValue = (paperTotal, previousTotal, index) =>{
            // if(isNaN(paperTotal) || isNaN(previousTotal)){return;}

            const list = paperList

            console.log(prevPapers)
            console.log(numPapers)

            if(typeof list[index] === "undefined"){
                console.log("adding new")
                list.push(paperTotal)
            }else if(numPapers > prevPapers){
                console.log("removing ")
                list.pop();
            }
            console.log(list)
            setPaperList(list)
        }

    useEffect(()=>{
        console.log("getData call because numPapers changed")
        props.getData(classTotal, previousCourseTotal);
    }, [numPapers])



    return(
        <div>
            <Container>
                <Label>Number of assignments/tests (Anything you're marked for)</Label>
                <Input type="number" onChange={handleInputs} defaultValue={0} value={numPapers}/>
            </Container>

            <br/>

            {Array(numPapers).fill().map((item, index)=>{
                return <Paper getData={getValue} key={index }/>
            })}

            <p>Class Total: {classTotal}</p>
        </div>
    )
}

export default Course;
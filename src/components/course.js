import styled from "styled-components"
import React, { useState, useRef, useEffect } from "react"

//Component import
import Paper from "./paper"

const Container = styled.div`
    display:flexbox;
    flex-direction:column;
`

const PaperContainer = styled.div`
    display:grid;
    grid-template-rows:1fr;
`

const Label = styled.label`
    display:flexbox;
`

const Input = styled.input`
    display:flexbox;
`

const Course = (props) =>{
    const [numPapers, setNumPapers] = useState(0);
    const [paperComponentList, setPaperComponentList] = useState(Array(numPapers).fill());

    const [count, setCount] = useState(0);//Used to update component loading, very hacky.

    const previousNumPapersRef = useRef();
    useEffect(()=>{previousNumPapersRef.current = numPapers})
    const previousNumPapers = previousNumPapersRef.current;


    // const [classTotal, setClassTotal] = useState(0);
    // const [previousCourseTotal, setPreviousCourseTotal] = useState(0);
    // useEffect(()=>{setPreviousCourseTotal(classTotal)}, [classTotal])

    useEffect(()=>{
        const array = paperComponentList;
        if(numPapers < previousNumPapers){
            array.pop();
            setCount(count-1)//Updates state, which keeps displays up to date.
        }else if(numPapers > previousNumPapers){
            array.push(<Paper getData={getValue} key={array.length}/>);
            setCount(count+1)//Updates state, which keeps displays up to date.
        }
        setPaperComponentList(array);
    },[numPapers]);

    const handleInputs = e => {
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = parseInt(value);}
        if(value > 15){value = 15;}
        if(value <= 0){value = 1;}

        setNumPapers(value);
    }


    const getValue = (paperTotal, previousTotal, index) =>{
            // if(isNaN(paperTotal) || isNaN(previousTotal)){return;}

            // const list = paperList

            // console.log(prevPapers)
            // console.log(numPapers)

            // if(typeof list[index] === "undefined"){
            //     console.log("adding new")
            //     list.push(paperTotal)
            // }else if(numPapers > prevPapers){
            //     console.log("removing ")
            //     list.pop();
            // }
            // console.log(list)
            // setPaperList(list)
            console.log("papers/getValue")
        }

    // useEffect(()=>{
    //     console.log("getData call because numPapers changed")
    //     props.getData(classTotal, previousCourseTotal);
    // }, [numPapers])



    return(
        <div>
            <Container>
                <Label>Number of assignments/tests (Anything you're marked for)</Label>
                <Input type="number" onChange={handleInputs} defaultValue={0} value={numPapers}/>
            </Container>

            <br/>

            <PaperContainer>
                {paperComponentList}
            </PaperContainer>

            {/* <p>Class Total: {classTotal}</p> */}
        </div>
    )
}

export default Course;
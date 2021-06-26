import styled from "styled-components"
import React, { useState, useEffect} from "react"

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


const Course = (props) =>{
    const [numPapers, setNumPapers] = useState(0);
    const [paperComponentList, setPaperComponentList] = useState(Array(numPapers).fill());
    const [paperTotalList, setPaperTotalList] = useState(Array(numPapers).fill());
    const [courseTotal, setCourseTotal] = useState(0);
    const [count, setCount] = useState(0);

    const handleButton = (change) =>{
        //change true = increase, false = decrease
        const componentList = paperComponentList;
        const totalList = paperTotalList;
    
        if(change === true && numPapers < 15){
            setNumPapers(numPapers + 1);
            componentList.push(<Paper key={count} index={count} callback = {updatePaperTotals}/>);
            setCount(count + 1);
            totalList.push(0);
        }else if (change===false && numPapers > 1){
            setNumPapers(numPapers - 1);
            componentList.pop();
        totalList.pop();
        }
    
        setPaperComponentList(componentList)
        setPaperTotalList(totalList);
    }

    const updatePaperTotals = (index, paperTotal) =>{
        const totalList = paperTotalList.slice();
        totalList.splice(index, 1, paperTotal)
        setPaperTotalList(totalList);
    }

    useEffect(()=>{
        const totalList = paperTotalList.slice();
        const sum = totalList.reduce((total, n) => total + n, 0);
        console.log("NFAJAHGJH: " + sum)
        setCourseTotal(sum)
    },[paperTotalList])

    // useEffect(()=>{
    //     console.log("4")
    //     console.log("send course total to initiate 1/2")
    //     props.callback(props.index, courseTotal);
    // }, [courseTotal])

    return(
        <div>
            <Container>
                <Label>Number of assignments/tests (Anything you're marked for)</Label>
                <p>{numPapers}</p>
                <button onClick={()=>handleButton(true)}>Increase courses</button>
                <button onClick={()=>handleButton(false)}>Decrease courses</button>
            </Container>

            <br/>

            <PaperContainer>
                {paperComponentList}
            </PaperContainer>

            <p>Course Total: {courseTotal}</p>
        </div>
    )
}

export default Course;
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
    const [paperComponentList, setPaperComponentList] = useState(Array(1).fill());
    const [paperTotalList, setPaperTotalList] = useState([]);
    const [courseTotal, setCourseTotal] = useState();
    const [count, setCount] = useState(0);

    const handleButton = (change) =>{
        //change true = increase, false = decrease

        const componentList = paperComponentList;
    
        if(change === true && numPapers < 15){
            setNumPapers(numPapers + 1);
            componentList.push(<Paper key={count} index={count} callback = {updatePaperTotals}/>);
            setCount(count + 1);
        }else if (change===false && numPapers > 1){
            setNumPapers(numPapers - 1);
            componentList.pop();
        }
    
        setPaperComponentList(componentList)
    }

    const updatePaperTotals = (index, paperTotal) =>{
        let totalList = paperTotalList;
        totalList.splice(index, 1, paperTotal)

        setPaperTotalList(totalList);

        const reducer = (sum, add)=> sum + add;
        const total = totalList.reduce(reducer, 0)
        setCourseTotal(total);

        props.callback(props.index, total);

    }

    return(
        <div>
            <Container>
                <Label>Number of assignments/tests (Anything you're marked for)</Label>
                <p>{numPapers}</p>
                <button onClick={()=>handleButton(true)}>Increase courses</button>
                <button onClick={()=>handleButton(false)}>Decrease courses</button>
                <p>{paperTotalList}</p>
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
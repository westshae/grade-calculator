import styled from "styled-components"
import React, { useState} from "react"

//Component import
import Paper from "./paper"

const Container = styled.div`
    display:flexbox;
    flex-direction:column;
`

const ButtonContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
`

const Button = styled.button`

`

const PaperContainer = styled.div`
    display:grid;
    grid-template-rows:1fr;
    grid-row-gap:1rem;
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

    //Handles increase/decrease button
    const handleButton = (change) =>{
        const componentList = paperComponentList;

        //true == increase
        if(change === true && numPapers < 15){
            //Increases the numCourses value and adds a course to the componentList to be rendered
            setNumPapers(numPapers + 1);
            componentList.push(<Paper key={count} index={count} callback = {updatePaperTotals} id={numPapers}/>);
            setCount(count + 1); 
        }
        //false == decrease
        else if (change===false && numPapers > 1){
            //Decreases the numCourses value and removes the last course in the componentList to be rendered
            setNumPapers(numPapers - 1);
            componentList.pop();
        }
    
        setPaperComponentList(componentList)
    }

    //Callback function that is called by paper component
    const updatePaperTotals = (index, paperTotal) =>{
        //Replaces the value at the index with the new course total
        let totalList = paperTotalList;
        totalList.splice(index, 1, paperTotal)


        //Sets the courseTotalList state, as well as updates the year total value
        const total = totalList.reduce((sum, add)=> sum + add, 0);
        setCourseTotal(total);
        setPaperTotalList(totalList);

        //Sends total and index to initiate.js
        props.callback(props.index, total);
    }

    return(
        <div>
            <Container>
                <Label>Number of assignments/tests (Anything you're marked for)</Label>
                <p>{numPapers}</p>
                <ButtonContainer>
                    <Button onClick={()=>handleButton(true)}>Increase courses</Button>
                    <Button onClick={()=>handleButton(false)}>Decrease courses</Button>
                </ButtonContainer>
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
import styled from "styled-components"
import React, { useState} from "react"

//Component import
import Paper from "./paper"

const Container = styled.div`
    background-color:yellow;
`

const GUI = styled.div`
    display:grid;
    grid-template-columns:3fr 1fr 1fr;
    grid-template-rows:1fr;
    background-color:lightblue;
`

const ButtonContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
`

const Button = styled.button`

`

const Header = styled.h1`
    height:100%;
    margin-top:0;
    margin-bottom:0;
`

const Num = styled.h1`
    text-align:center;    
    margin-top:auto;
    margin-bottom:auto;
    font-size:2rem;
`

const Paragraph = styled.p`
    text-align:center;    
    font-size:1.5rem;
    margin-left:auto;
    margin-right:auto;

    margin-top:auto;
    margin-bottom:0;
`

const TextContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(1,1FR);
`

const PaperContainer = styled.div`
    display:grid;
    grid-template-rows:1fr;
    grid-row-gap:1rem;
`

const Total = styled(Header)`
    font-size:2rem;
    
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
        <Container>
            <GUI>
                <TextContainer>
                    <Header>Number of assignments/tests</Header>
                    <Paragraph> (Anything you're marked for)</Paragraph>
                </TextContainer>
                <Num>{numPapers}</Num>

                <ButtonContainer>
                    <Button onClick={()=>handleButton(true)}>Increase courses</Button>
                    <Button onClick={()=>handleButton(false)}>Decrease courses</Button>
                </ButtonContainer>
            </GUI>

            <br/>

            <PaperContainer>
                {paperComponentList}
            </PaperContainer>

            <Total>Course Total: {courseTotal}</Total>
        </Container>
    )
}

export default Course;
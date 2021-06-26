import styled from "styled-components"
import React, { useState} from "react"

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

    const [classTotal, setClassTotal] = useState(0);

    //Saves the previous number of papers via refs
    // const previousNumPapersRef = useRef();
    // useEffect(()=>{previousNumPapersRef.current = numPapers})
    // const previousNumPapers = previousNumPapersRef.current;

    const getValue = (paperTotal, previousTotal, index) =>{

        }

        const handleButton = (change) =>{
            //change true = increase, false = decrease
            const componentList = paperComponentList;
            const totalList = paperTotalList;
    
            if(change === true && numPapers < 15){
                setNumPapers(numPapers + 1);
                componentList.push(<Paper key={componentList.length} index={componentList.length}/>);
                totalList.push(0);
            }else if (change===false && numPapers > 1){
                setNumPapers(numPapers - 1);
                componentList.pop();
            totalList.pop();
            }
    
        setPaperComponentList(componentList)
        setPaperTotalList(totalList);
    }



    return(
        <div>
            <Container>
                <Label>Number of assignments/tests (Anything you're marked for)</Label>
                <p>{numPapers}</p>
                <button onClick={()=>handleButton(true)}>Increase courses</button>
                <button onClick={()=>handleButton(false)}>Decrease courses</button>
                <button>Calculate class results</button>
            </Container>

            <br/>

            <PaperContainer>
                {paperComponentList}
            </PaperContainer>

            <p>Class Total: {classTotal}</p>
        </div>
    )
}

export default Course;
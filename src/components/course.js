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
    const [paperTotalList, setPaperTotalList] = useState(Array(numPapers).fill());

    const [classTotal, setClassTotal] = useState(0);
    const [count, setCount] = useState(0);//Used to update component loading, very hacky.

    //Saves the previous number of papers via refs
    const previousNumPapersRef = useRef();
    useEffect(()=>{previousNumPapersRef.current = numPapers})
    const previousNumPapers = previousNumPapersRef.current;

    //Saves the previous class total to previousClassTotal via refs
    const previousClassTotalRef = useRef();
    useEffect(()=>{previousClassTotalRef.current = classTotal})
    const previousClassTotal = previousClassTotalRef.current;

    //When the number of paper changes, it will either add or remove a paper from the list
    useEffect(()=>{
        console.log("numPaper useeffecet")
        const array = paperComponentList;
        const totalArray = paperTotalList;
        if(numPapers < previousNumPapers){
            array.pop();
            totalArray.pop();
            setCount(count-1)//Updates state, which keeps displays up to date.
        }else if(numPapers > previousNumPapers){
            array.push(<Paper getData={getValue} key={array.length} index={array.length}/>);
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
            if(isNaN(index)){
                console.log("INDEX ISNAN")
                // setPaperTotalList(Array(numPapers).fill())

                return;
            }
            if(isNaN(paperTotal) || isNaN(previousTotal)){return;}

            const array = paperTotalList

            //Removes the total from the list
            if(numPapers < previousNumPapers){
                console.log("SPLICE INDEX:" + index)
                array.splice(index);
                setCount(count + 1);
            }
            //Adds the total to the list
            else if(numPapers > previousNumPapers){
                console.log("PUSH" + paperTotal)

                const indexToRemove = array.indexOf(previousTotal)
                if(indexToRemove !== -1){
                    array.splice(indexToRemove);
                }
                array.push(paperTotal)
            }

            console.log(array)

            setPaperTotalList(array)


            // console.log("papers/getValue")
        }

    useEffect(()=>{
        console.log("getData call because numPapers changed")
        props.getData(classTotal, previousClassTotal);
    }, [numPapers])



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

            <p>Class Total: {classTotal}</p>
        </div>
    )
}

export default Course;
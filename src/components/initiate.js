import styled from "styled-components";

//Component imports
import Course from "./course"
import React, {useState, useRef, useEffect} from "react"

const Container = styled.div`
    display:flexbox;
    flex-direction:column;
    background-color:cyan;
    
    //To change to grid, easier to prototype in flex
`


const Label = styled.label`
    display:flexbox;
`

const Input = styled.input`
    display:flexbox;
`

const Initiate = () =>{
    const [numCourses, setNumCourses] = useState(0);
    const [totalResults, setTotalResults] = useState(0);

    const prevCoursesRef = useRef()

    useEffect(()=>{
        prevCoursesRef.current = numCourses;
    })

    const prevCourses = prevCoursesRef.current

    const handleNumCoursesChange = e =>{
        console.log("handle course")
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = 1;}

        //Checks if the values fit the correct range, if not changes value
        let valueInt = parseInt(value);
        if(valueInt > 10){valueInt = 10;}
        if(valueInt <= 0){valueInt = 1;}

        setNumCourses(valueInt)
    }

    const getValue = (courseTotal, previousCourseTotal) =>{
        console.log("handle get value")
        if(numCourses === prevCourses){
            setTotalResults((totalResults-previousCourseTotal) + courseTotal);
        }else{
            setTotalResults((totalResults) + courseTotal);
        }
    }

    return(
        <div>
            <Container>
                <Label>Number of classes to calculate</Label>
                <Input type="number" defaultValue={0}/>
                <button onClick={handleNumCoursesChange}>Submit</button>
            </Container>

            <br/><br/>

            <Container>
                {Array(numCourses).fill().map((item, index)=>{
                    console.log("array loop")
                    return <Course getData={getValue} key={index}/>
                })}
            </Container>
            <p>Total result: {totalResults}</p>
        </div>
    )
    
}

export default Initiate;
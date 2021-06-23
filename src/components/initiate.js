import styled from "styled-components";

//Component imports
import Course from "./course"
import React, {useState} from "react"

const Container = styled.div`
    display:flexbox;
    flex-direction:column;
    
    //To change to grid, easier to prototype in flex
`


const Label = styled.label`
    display:flexbox;
`

const Input = styled.input`
    display:flexbox;
`

const Initiate = () =>{
    const [numCourses, setNumCourses] = useState(1);

    const handleNumCoursesChange = e =>{
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

    //IDEA
    //try out a system where you add each element (component) to a list, then go through that list and search for certain element (p tag eg) that has id
    //Add all of those values together.

        return(
            <div>
                <Container>
                    <Label>Number of classes to calculate</Label>
                    <Input type="number" onChange={handleNumCoursesChange} defaultValue={1} value={numCourses}/>
                </Container>

                <br/><br/>

                <Container>
                    {Array(numCourses).fill().map((item, index)=>{
                    return <Course key={index}/>
                    })}
                </Container>
            </div>

        )
    
}

export default Initiate;
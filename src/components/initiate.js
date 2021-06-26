import styled from "styled-components";

//Component imports
import Course from "./course"
import React, {useState, useRef, useEffect} from "react"

const Container = styled.div`
    display:flexbox;
    flex-direction:column;
    
    //To change to grid, easier to prototype in flex
`

const Initiate = () =>{
    const [numCourses, setNumCourses] = useState(0);
    const [courseTotalList, setCourseTotalList] = useState(Array(numCourses).fill());
    const [courseComponentList, setCourseComponentList] = useState(Array(numCourses).fill())

    const handleButton = (change) =>{
        //change true = increase, false = decrease
        const componentList = courseComponentList;
        const totalList = courseTotalList;
        if(change == true && numCourses < 15){
            setNumCourses(numCourses + 1);
            componentList.push(<Course key={courseComponentList.length} index={courseComponentList.length}/>);
            totalList.push(0);
        }else if (change==false && numCourses > 1){
            setNumCourses(numCourses - 1);
            componentList.pop();
            totalList.pop();
        }

        setCourseComponentList(componentList)
    }

    return(
        <div>
            <Container>
                <label>Number of classes to calculate</label>
                <p>{numCourses}</p>
                <button onClick={()=>handleButton(true)}>Increase courses</button>
                <button onClick={()=>handleButton(false)}>Decrease courses</button>
            </Container>

            <br/><br/>

            <Container>
                {courseComponentList}
            </Container>
        </div>
    )
    
}


export default Initiate;
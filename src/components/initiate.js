import styled from "styled-components";

//Component imports
import Course from "./course"
import React, {useState} from "react"

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

        if(change === true && numCourses < 15){
            setNumCourses(numCourses + 1);
            componentList.push(<Course key={componentList.length} index={componentList.length} callback={updateCourseResults}/>);
            totalList.push(0);
        }else if (change===false && numCourses > 1){
            setNumCourses(numCourses - 1);
            componentList.pop();
            totalList.pop();
        }

        setCourseComponentList(componentList)
        setCourseTotalList(totalList);
    }

    const updateCourseResults = (index, courseTotal) =>{
        console.log("5")
        console.log("handled course total 2/2")
        const totalList = courseTotalList;
        totalList.splice(index, 1, courseTotal);
        setCourseTotalList(totalList);

        console.log(totalList);
        console.log("updated Total List")
    }

    return(
        <div>
            <Container>
                <label>Number of classes to calculate</label>
                <p>{numCourses}</p>
                <button onClick={()=>handleButton(true)}>Increase courses</button>
                <button onClick={()=>handleButton(false)}>Decrease courses</button>
                <br/>
                {/* <button onClick={()=>updateCourseResults}>Update Course Results</button> */}

            </Container>

            <br/><br/>

            <Container>
                {courseComponentList}
            </Container>
            <p>Year total:{}</p>
        </div>
    )
    
}


export default Initiate;
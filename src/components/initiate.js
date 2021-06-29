import styled from "styled-components";
import React, {useState} from "react"

//Component imports
import Course from "./course"

const Header = styled.h1`
    height:100%;
    margin-top:0;
    margin-bottom:0;
`

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(1, 1fr);       
`

const GUI = styled.div`
    display:grid;
    text-align:center;
    grid-template-columns:2fr 1fr 1fr;
    grid-template-rows:1fr;
    width:50%;

`

const CourseContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);   
    grid-column-gap:1rem;
    grid-row-gap:1rem;

`

const ButtonContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(2,1fr);
`

const Button = styled.button`
    /* width:80%;
    height:100%;
    margin:auto; */
`

const Initiate = () =>{
    const [numCourses, setNumCourses] = useState(0);
    const [courseTotalList, setCourseTotalList] = useState(Array(0).fill());
    const [courseComponentList, setCourseComponentList] = useState(Array(0).fill())
    const [yearTotal, setYearTotal] = useState();

    //Handles increase/decrease buttons
    const handleButton = (change) =>{
        const componentList = courseComponentList;

        //true == increase
        if(change === true && numCourses < 15){
            //Increases the numCourses value and adds a course to the componentList to be rendered
            setNumCourses(numCourses + 1);
            componentList.push(<Course key={componentList.length} index={componentList.length} callback={updateCourseResults}/>);
        }
        //false == decrease
        else if (change===false && numCourses > 1){
            //Decreases the numCourses value and removes the last course in the componentList to be rendered
            setNumCourses(numCourses - 1);
            componentList.pop();
        }

        setCourseComponentList(componentList)
    }

    //Callback function that is called by course component
    const updateCourseResults = (index, courseTotal) =>{
        //Replaces the value at the index with the new course total
        let totalList = courseTotalList;
        totalList.splice(index, 1, courseTotal)

        //Sets the courseTotalList state, as well as updates the year total value
        setCourseTotalList(totalList);
        setYearTotal(totalList.reduce((sum, add)=> sum + add, 0));
    }

    return(
        <Container>
            <GUI>
                <Header>Number of classes <br/> to calculate: {numCourses}</Header>

                <ButtonContainer>
                    <Button onClick={()=>handleButton(true)}>Increase courses</Button>
                    <Button onClick={()=>handleButton(false)}>Decrease courses</Button>
                </ButtonContainer>
                
                <Header>Year total: {yearTotal}</Header>

                
            </GUI>

            <CourseContainer>
                {courseComponentList}
            </CourseContainer>
        </Container>
    )
    
}


export default Initiate;
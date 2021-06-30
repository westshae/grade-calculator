import styled from "styled-components";
import React, {useState} from "react"

//Component imports
import Course from "./course"

const Header = styled.h1`
    margin-top:0;
    margin-bottom:0;
    color:#f6f1f4;
    margin-left:0.1rem;
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(1, 1fr);    
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
    }   
`

const GUI = styled.div`
    display:grid;
    grid-template-columns:3fr 1fr;
    background-color:#222831;

    /* margin:0.75rem; */

    border-bottom:solid 2px;
    border-color:#1B6CA8;

    margin-bottom:2rem;

    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const CourseContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);   
    grid-column-gap:1rem;
    grid-row-gap:3rem;

    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
    }

`

const ButtonContainer = styled.div`
    margin:0.5rem;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-column-gap:0.35rem;

    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap:0.35rem;
    }
    
`

const Button = styled.button`
    background-color:#393E46;
    border:none;
    color:#f6f1f4;
    height:2rem;
    border-radius:0.4rem;
    
    @media only screen 
    and (max-device-width: 480px)
    and (orientation: portrait) {
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap:0.35rem;
    }
`

const Total = styled(Header)`
    font-size:2rem;
    background-color:#222831;
    margin:0;

    border-bottom:solid 2px;
    border-color:#1B6CA8;
    margin-top:2rem;
    
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
        setYearTotal(totalList.reduce((sum, add)=> sum + add, 0));
    }

    return(
        <Container>
            <GUI>
                <Header>Number of classes to calculate: {numCourses}</Header>

                <ButtonContainer>
                    <Button onClick={()=>handleButton(true)}>Increase courses</Button>
                    <Button onClick={()=>handleButton(false)}>Decrease courses</Button>
                </ButtonContainer>
                

                
            </GUI>

            

            <CourseContainer>
                {courseComponentList}
            </CourseContainer>

            <Total>Year total: {parseFloat(yearTotal).toFixed(2)}%</Total>
            <p/>

        </Container>
    )
    
}


export default Initiate;
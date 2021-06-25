import styled from "styled-components";

//Component imports
import Course from "./course"
import React, {useState, useRef, useEffect, Fragment} from "react"

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
    const [numCourses, setNumCourses] = useState(0);
    // const [courseTotalList, setCourseTotalList] = useState(Array(numCourses).fill());
    const [courseComponentList, setCourseComponentList] = useState(Array(numCourses).fill())
    const [count, setCount] = useState(0);

    //Saves previous number of courses
    const previousNumCoursesRef = useRef();
    useEffect(()=>{previousNumCoursesRef.current = numCourses})
    const previousNumCourses = previousNumCoursesRef.current;

    //When the number of courses change, it adds or removes a course component from the list that is rendered
    useEffect(()=>{
        const array = courseComponentList;
        console.log(numCourses + ":::" + previousNumCourses)

        if(numCourses < previousNumCourses){
            console.log("option 2")
            array.pop();
            setCount(count-1)

        }else if(numCourses > previousNumCourses){
            console.log("option 3")
            array.push(<p>test</p>);
            setCount(count+1)

        }
        console.log(array)
        setCourseComponentList(array);
    },[numCourses]);


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

    //Runs when the child calls it, which allows setting of parent (initate) state
    const getValue = (courseTotal, previousCourseTotal) =>{
        // if(numCourses === prevCourses){
        //     setTotalResults((totalResults-previousCourseTotal) + courseTotal);
        // }else{
        //     setTotalResults((totalResults) + courseTotal);
        // }
        console.log("getValueCalled");
    }

    //Returns a list of papers based on numCourses
    // useEffect(()=>{
    //     if(showCourses == true){
    //         Array(numCourses).fill().map((item, index)=>{
    //             return <Course getData={getValue} key={index}/>
    //         })
    //     }
    // },[showCourses])

    return(
        <div>
            <Container>
                <Label>Number of classes to calculate</Label>
                <Input type="number" onChange={handleNumCoursesChange} value={numCourses} defaultValue={0}/>
            </Container>

            <br/><br/>

            <Container>
                {courseComponentList}
            </Container>

            {/* <p>Total result: {totalResults}</p> */}
        </div>
    )
    
}


export default Initiate;
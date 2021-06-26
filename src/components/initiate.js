import styled from "styled-components";

//Component imports
import Course from "./course"
import React, {useState, useRef, useEffect} from "react"

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
    // const [courseTotalList, setCourseTotalList] = useState(Array(numCourses).fill());
    const [courseComponentList, setCourseComponentList] = useState(Array(numCourses).fill())
    

    const [count, setCount] = useState(0); //Used to update component loading, very hacky.

    //Saves previous number of courses
    const previousNumCoursesRef = useRef();
    useEffect(()=>{previousNumCoursesRef.current = numCourses})
    const previousNumCourses = previousNumCoursesRef.current;

    //When the number of courses change, it adds or removes a course component from the list that is rendered
    useEffect(()=>{
        const array = courseComponentList;
        if(numCourses < previousNumCourses){
            array.pop();
            setCount(count-1)//Updates state, which keeps displays up to date.
        }else if(numCourses > previousNumCourses){
            array.push(<Course getData={getValue} key={array.length} index={array.length}/>);
            setCount(count+1)//Updates state, which keeps displays up to date.
        }
        setCourseComponentList(array);
    },[numCourses]);


    //Handles number of course changes, validates input field data
    const handleNumCoursesChange = e =>{
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = parseInt(value);}
        if(value > 10){value = 10;}
        if(value <= 0){value = 1;}

        setNumCourses(value)
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

    const handleButton = (change) =>{
        //increasedecrease, true=inc, false=dec
        const check = numCourses;
        console.log(check)
        if(change == true && check < 15){
            setNumCourses(numCourses + 1);
        }else if (change==false && check > 1){
            setNumCourses(numCourses - 1);
        }
    }

    return(
        <div>
            <Container>
                <Label>Number of classes to calculate</Label>
                {/* <Input type="number" onChange={handleNumCoursesChange} value={numCourses} defaultValue={0}/> */}
                <p>{numCourses}</p>
                <button onClick={()=>handleButton(true)}>Increase courses</button>
                <button onClick={()=>handleButton(false)}>Decrease courses</button>

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
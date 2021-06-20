import styled from "styled-components";
import {Component} from "react"

//Component imports
import Course from "../components/courseContainer"

const Container = styled.div`
    display:flexbox;
    flex-direction:column;
    
    //To change to grid, easier to prototype in flex
`


const InputLabel = styled.label`
    display:flexbox;
`

const Input = styled.input`
    display:flexbox;
`

class initiate extends Component{
    constructor(props){
        super(props);
        this.state = {
            numCourses: 1,
        }
    }

    handleNumCoursesChange(e) {
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = 1;}

        //Checks if the values fit the correct range, if not changes value
        let valueInt = parseInt(value);
        if(valueInt > 10){valueInt = 10;}
        if(valueInt <= 0){valueInt = 1;}

        this.setState({
          numCourses: valueInt
        })
    }

    render(){
        return(
            <div>
                <Container>
                    <InputLabel>Number of classes to calculate</InputLabel>
                    <Input type="number" onChange={this.handleNumCoursesChange.bind(this)} value={this.state.numCourses} defaultValue={1}/>
                </Container>

                <Container>
                    {Array(this.state.numCourses).fill(
                        <Course/>
                        )}
                </Container>
            </div>

        )
    }
}

export default initiate;
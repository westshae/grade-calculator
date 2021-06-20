import styled from "styled-components"
import { Component } from "react"

//Component import
import Paper from "./paper"

const Container = styled.div`
    display:flexbox;
`

const Label = styled.label`
    display:flexbox;
`

const Input = styled.input`
    display:flexbox;
`

class Course extends Component {
    constructor(props){
        super(props);
        this.state = {
            numPapers: 1,
        }
    }

    handleNumCoursesChange(e) {
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = 1;}

        //Checks if the values fit the correct range, if not changes value
        let valueInt = parseInt(value);
        if(valueInt > 15){valueInt = 15;}
        if(valueInt <= 0){valueInt = 1;}

        this.setState({
          numCourses: valueInt
        })
    }

    render(){
        return(
            <div>
                <Container>
                    <Label>Number of assignments/tests (Anything you're marked for)</Label>
                    <Input type="number" onChange={this.handleNumCoursesChange.bind(this)} value={this.state.numCourses} defaultValue={1}/>
                </Container>

                {Array(this.state.numCourses).fill(
                    <Paper/>
                )}
            </div>
        )
    }
}

export default Course;
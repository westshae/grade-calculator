import styled from "styled-components"
import { Component } from "react"

const Container = styled.div`
    display:flexbox;
`

const InputLabel = styled.label`
    display:flexbox;
`

const Input = styled.input`
    display:flexbox;
`
const PaperContainer = styled.div`
    display:flexbox;
    flex-direction:row;
    
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
                    <InputLabel>Number of assignments/tests (Anything you're marked for)</InputLabel>
                    <Input type="number" onChange={this.handleNumCoursesChange.bind(this)} value={this.state.numCourses} defaultValue={1}/>
                </Container>
                {Array(this.state.numCourses).fill(
                    <div>
                        <p>Individual work</p>

                        <PaperContainer>
                            <InputLabel>Work grade percentage</InputLabel>
                            <Input/>
                            <InputLabel>Work mark</InputLabel>
                            <Input/>
                            <br/>
                        </PaperContainer>
                    </div>
                    )}

            </div>
        )
    }
}

export default Course;
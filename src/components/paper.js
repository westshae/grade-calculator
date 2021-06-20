import styled from "styled-components";
import { Component } from "react";


const InputLabel = styled.label`
    display:flexbox;
`

const Input = styled.input`
    display:flexbox;
`
const Container = styled.div`
    display:flexbox;
    flex-direction:row;
`

class Paper extends Component{
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
            <Container>
                <p>Individual work</p>
                <InputLabel>Work grade percentage</InputLabel>
                <Input type="number" onChange={this.handleNumCoursesChange.bind(this)} value={this.state.numCourses + "%"} defaultValue={1}/>
                <InputLabel>Work mark</InputLabel>
                <Input/>
                <br/>
            </Container>
        )
    }
}

export default Paper;
import styled from "styled-components"
import React, { Component } from "react"

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

    handleCallback = (childData) =>{
        this.setState({
            test: {childData}
        })
    }


    handleInputs = e => {
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = 1;}

        //Checks if the values fit the correct range, if not changes value
        let valueInt = parseInt(value);
        if(valueInt > 15){valueInt = 15;}
        if(valueInt <= 0){valueInt = 1;}


        this.setState({
          numPapers: valueInt,
        })
    }

    render(){
        return(
            <div>
                <div>
                    <Container>
                        <Label>Number of assignments/tests (Anything you're marked for) {this.props.id}</Label>
                        <Input type="number" onChange={this.handleInputs.bind(this)} value={this.state.numPapers} defaultValue={1}/>
                    </Container>

                    <br/>

                    {Array(this.state.numPapers).fill(
                        <Paper id={"paper"}/>
                    )}
                    <p>Total: </p>
                </div>
            </div>
        )
    }
}

export default Course;
import styled from "styled-components";
import React, { Component } from "react";


const Label = styled.label`
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
            gradePercent: 1,
            percentOfGrade: 1
            
        }
    }

    handleGradePercent = e => {
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = 1;}

        //Checks if the values fit the correct range, if not changes value
        let valueInt = parseInt(value);
        if(valueInt > 15){valueInt = 15;}
        if(valueInt <= 0){valueInt = 1;}

        this.setState({
          gradePercent: valueInt,
        })
    }

    handlePercentOfGrade = e => {
        //Checks if the value isn't a string, if it isn't changes value to 1
        let value = e.target.value;
        if(!Boolean(value)){value = 1;}
        if(isNaN(value)){value = 1;}

        //Checks if the values fit the correct range, if not changes value
        let valueInt = parseInt(value);
        if(valueInt > 15){valueInt = 15;}
        if(valueInt <= 0){valueInt = 1;}


        this.setState({
          percentOfGrade: valueInt,
        })
    }

    render(){
        return(
                <Container onChange={this.onTrigger}>
                    <p>Individual work</p>
                    <Label>Work grade</Label>
                    <Input type="number" onChange={this.handleGradePercent.bind(this)} defaultValue={0} value={this.state.gradePercent}/>

                    <Label>Percent of grade</Label>
                    <Input type="number" onChange={this.handlePercentOfGrade.bind(this)} defaultValue={0} value={this.state.percentOfGrade}/>

                    <p>Total: {this.state.gradePercent * this.state.percentOfGrade}</p>
                    <br/>
                </Container>
        )
    }
}

export default Paper;
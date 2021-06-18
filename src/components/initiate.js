import styled from "styled-components";
import {Component} from "react"

const Container = styled.div`
    display:flexbox;
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
            firstInput: "",
        }
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState({
          firstInput: value
        })
    }

    render(){
        return(
            <Container>
                <InputLabel>{this.state.firstInput}</InputLabel>
                <Input type="text" onChange={this.handleInputChange.bind(this)} value={this.state.firstInput}/>
            </Container>
        )
    }
}

export default initiate;
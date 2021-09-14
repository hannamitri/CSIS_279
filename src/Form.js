import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: "",
            bool: true,
            data: [],
         }

    }
    txt_changeHandler = (event) =>{
        
        this.setState({firstName: event.target.value});
    }
    render() { 
        return (  
            <div>
                <hr />
                <h3>This is the form component</h3>
                <p>{this.props.name}</p>
                <p>{this.state.firstName}</p>
                <input type="text" onChange={this.txt_changeHandler} placeholder="Type anything here" />

            </div>
        );
    }
}
 
export default Form;
import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <hr />
                <h3>This is the form component</h3>
                <p>{this.props.name}</p>
            </div>
        );
    }
}
 
export default Form;
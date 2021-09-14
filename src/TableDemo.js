import { Component } from "react";
import Form from "./Form";

class TableDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
         }
    }

    componentDidMount(){
        
        this.setState({name: "Test name"});
    }

    btn_clickHandler = (e) => {
        this.setState({name: "name was changed"});
    }


    render() { 
        return (  
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>col1</p>
                    </div>
                    <div className="col">
                        <p>col1</p>
                    </div>
                    <div className="col">
                        <p>col1</p>
                    </div>
                </div>
                <h3>Hello <span style={{color: 'red'}}><b>{this.state.name}</b></span></h3>
                <button className="btn-primary" onClick={this.btn_clickHandler}>Click me</button>
                <Form name={this.state.name}/>
            </div>
        );
    }
}
 
export default TableDemo;
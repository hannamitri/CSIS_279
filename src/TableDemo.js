import { Component } from "react";
import { getAll } from "./api/api";
import Form from "./Form";

class TableDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
         }
    }

    /**
     * This is the first method to be called.
     */
    componentDidMount(){
        
        this.setState({name: "Test name"});

        this.loadUsers();
    }

    loadUsers = async() =>{
        
        const data = await getAll();
        console.log(data);
        console.log("after the await.")
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
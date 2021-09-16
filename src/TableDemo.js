import { Component } from "react";
import { getAll } from "./api/api";
import Form from "./Form";

class TableDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            data: [],
         }
    }

    /**
     * This is the first method to be called.
     */
    componentDidMount(){
        
        this.setState({name: "Test name"});

        this.loadUsers();
    }

    /**
     * to get all the users from the db.
     */
    loadUsers = async() =>{
        
        /**
         * to make sure that the data will come.
         */
        const response = await getAll();
        /**
         * to make the data global.
         */
        this.setState({data: response?.data});
    }

    btn_clickHandler = (e) => {
        this.setState({name: "name was changed"});
    }


    render() { 
        return (  
            <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Occupation</th>
                            <th>Age</th>
                            <th>Hobby</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.user_name}</td>
                                        <td>{item.user_username}</td>
                                        <td>{item.user_password}</td>
                                        <td>{item.user_occupation}</td>
                                        <td>{item.user_age}</td>
                                        <td>{item.user_hobby}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

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
import React, { useState, useEffect, useRef } from 'react';
import { deleteUser, getAll } from './api/api';
 
const TableFunc = () => {

  const [greeting, setGreeting] = useState("Hello functional component");
  const [data, setData] = useState([]);

  useEffect(()=>{
    loadUsers();
  }, [])
  

  const handleChange = event => setGreeting(event.target.value);

  const deleteHandler = (item) => (event) =>{
    deleteUser(item).then(res=>{
      loadUsers();
    });
  }
  
  const loadUsers = async () => {

    /**
     * to make sure that the data will come.
     */
    const response = await getAll();
    /**
     * to make the data global.
     */
    try{
      setData(response?.data);
    }catch(error){
      console.log(error);
    }
    finally{

    }
  }

  const test = () => {
    console.log("hey")
  }
 
  return (
    <div>
      <h1>{greeting}</h1>
      <Input value={greeting} handleChange={handleChange} />
      <table className="table">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Username
            </th>
            <th>
              Password
            </th>
            <th>Occupation</th>
            <th>Hobby</th>
            <th>Age</th>
            <th>Del.</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index)=>{
              return(
                <tr key={index}>
                  <td>{item.user_name}</td>
                  <td>{item.user_username}</td>
                  <td>{item.user_password}</td>
                  <td>{item.user_occupation}</td>
                  <td>{item.user_hobby}</td>
                  <td>{item.user_age}</td>
                  <td><button className="btn-sm btn-danger" onClick={deleteHandler(item)}>Del.</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

const Input = ({value, handleChange})=>{
  const ref = useRef();
  useEffect (() => ref.current.focus(), []);
  return(
    <input type="text" value={value} onChange={handleChange} ref={ref} />
  );
};
 

 
export default TableFunc;
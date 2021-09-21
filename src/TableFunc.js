import React, { useState, useEffect, useRef } from 'react';
 
const TableFunc = () => {

  const [greeting, setGreeting] = useState("Hello functional component");
  const [data, setData] = useState([]);

  useEffect(()=>{
    
  }, [])
  

  const handleChange = event => setGreeting(event.target.value);
  
 
  return (
    <div>
      <h1>{greeting}</h1>
      <Input value={greeting} handleChange={handleChange} />
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
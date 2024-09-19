import React,{useEffect, useState } from'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import http from '../http';


export default function Edit(props) {
  const [inputs,setInputs] = useState({});
  // const [users,setUsers] = useState({});
  const {id} = useParams();

  useEffect(() => {
    http.get("users/"+id+"/edit")
   .then(response => {
      setInputs({
        name: response.data.name,
        email: response.data.email
      })
      })
   .catch(error => {
      console.log(error);
    })
  },[]);

  const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}));
       }

       const submitForm = () => {
        //console.log(inputs); return false;
        http.put('/users/'+id,inputs)
       .then(response => {
          console.log(response.data);
          alert('User Updated Successfully');
          window.location.href = '/';
        })
       .catch(error => {
          console.log(error);
          alert('Error Updating User');
        });
      }

  return (
  <div>
    <h2>Edit User</h2>
    <div className="row">
      <div className="col-md-6 justify-content-center">
        <div className="card p-4">
         <label>Name</label>
         <input type="text" name="name" className="form-control mb-2" placeholder="Enter Name" value={inputs.name || ''} onChange={handleChange}/>
         <label>Email</label>
         <input type="email" name="email" className="form-control mb-2" placeholder="Enter Email" value={inputs.email || ''} onChange={handleChange} />
        
  
         <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
      </div>
    </div>
    </div>
    </div>
)
}
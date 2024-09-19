import React,{useState } from'react';
import axios from 'axios';
import http from '../http';

export default function Create() {
  const [inputs,setInputs] = useState({});
  const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}));
       }

       const submitForm = () => {
        //console.log(inputs); return false;
        http.post('/users',inputs)
       .then(response => {
          console.log(response.data);
          alert('User Created Successfully');
          window.location.href = '/';
        })
       .catch(error => {
          console.log(error);
          alert('Error Creating User');
        });
      }

  return (
  <div>
    <h2>New User</h2>
    <div className="row">
      <div className="col-md-6 justify-content-center">
        <div className="card p-4">
         <label>Name</label>
         <input type="text" name="name" className="form-control mb-2" placeholder="Enter Name" value={inputs.name || ''} onChange={handleChange}/>
         <label>Email</label>
         <input type="email" name="email" className="form-control mb-2" placeholder="Enter Email" value={inputs.email || ''} onChange={handleChange} />
         <label>Password</label>
         <input type="password" name="password" className="form-control mb-2" placeholder="Enter Password" value={inputs.password || ''} onChange={handleChange} />
         <button type="button" onClick={submitForm} className="btn btn-info mt-2">Create</button>
      </div>
    </div>
    </div>
    </div>
)
}
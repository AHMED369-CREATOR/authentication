import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/actionTypes";

import { Redirect } from "react-router-dom"

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const dispatch = useDispatch() 
  const {loading,users} = useSelector(state => state)
  const addUser = (e) =>{
    e.preventDefault()
    dispatch(registerUser({fullName,email,password,phone}))

  }
  return (
         <div>
          { loading ? (
          <h1>Loading ....</h1> ) : users ? 
          (<Redirect to ="/login"/>):
          <div className="col-md-5-m-auto">
          <h1>signUp</h1>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicFullName">
    <Form.Label>FullName</Form.Label>
    <Form.Control type="FullName" 
    placeholder="Enter FullName"
    onChange={(e)=>setFullName(e.target.value)} 
    value={fullName}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="Email" 
    placeholder="Email" 
    onChange={(e)=>setEmail(e.target.value)} 
    value={email}/> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="Password" 
    placeholder="Enter Password" 
    onChange={(e)=>setPassword(e.target.value)} 
    value={password}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="Phone" 
    placeholder="Phone"
    onChange={(e)=>setPhone(e.target.value)} 
    value={phone}/> 
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={addUser}>
    Submit
  </Button>
</Form>
         </div>
};
           </div>
  );
          };
export default Register;

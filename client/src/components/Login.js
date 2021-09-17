import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { logUser } from '../redux/actionTypes';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const loggin = (e) => {
      e.preventDefault()
      dispatch(logUser({email,password}))
    }   
    return (
        <div className="col-md-5-m-auto">
            <h1>signIn</h1>
             <Form>
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
  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={loggin}>
    Submit
  </Button>
    </Form>
        </div>
    )
}

export default Login

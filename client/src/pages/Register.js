import React, { useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword, getUser, setEmail, registerUser } from "../redux/actions/userActions";
import axios from 'axios';




function Register() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  
  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])

 

  return (
    <div>
      <h1>Register Page</h1>
      <Form onSubmit={registerUser(user.user.username,user.user.email,user.user.password)}>
        <Form.Input
          label="Username"
          placeholder="Username"
          name="username"
          type="text"
          value={user.username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />
        <Form.Input
          label="Email"
          placeholder="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <Form.Input
          label="Password"
          placeholder="Password"
          name="password"
          type="password"
          value={user.password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <Form.Input
          label="Confirm Password"
          placeholder="Confirm Password"
          name="confirmPassword"
          type="password"
          //   value={values.confirmPassword}
          //   error={errors.confirmPassword ? true : false}
          //   onChange={onChange}
        />
        <Button type="submit" primary>
          Register
        </Button>
      </Form>
    </div>
  );
}
export default Register;

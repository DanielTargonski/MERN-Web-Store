import React, { useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword, getUser,loginUser } from "../redux/actions/userActions";

function Login(props) {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  
  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])

  return (
    <div>
      <h1>Login Page</h1>
      <Form onSubmit = {loginUser(user.user.username, user.user.password)}>
        <Form.Input
          label="Username"
          placeholder="Username"
          name="username"
          type="text"
          value={user.username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
        />
        <Form.Input
          label="Password"
          placeholder="Password"
          name="password"
          type="password"
          value={user.password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
               
        />
        <Button type="submit" primary>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default Login;

import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

const userLogin = (props) => {
  return (
    <form>
      <FormGroup>
        <FormControl
          type="text"
          placeholder="username"
          onChange={props.usernameChanged}
        />
        <br />
        <FormControl
          type="password"
          placeholder="password"
          onChange={props.passwordChanged}
        />
        <FormControl.Feedback />
        <br />
        <Button className="btn btn-success btn-lg button" onClick={props.login}>Login</Button>
      </FormGroup>
    </form>
  );
}
export default userLogin;
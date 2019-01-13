import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
const userLogin = (props) => {
  return (
    <Form>
      <Form.Field>
      <label>Username</label>
      <input placeholder='First Name' onChange={props.usernameChanged} />
      </Form.Field>
      <Form.Field>
      <label>Last Name</label>
      <input type="password" placeholder='Last Name' onChange={props.passwordChanged} />
      </Form.Field>
      <Button type='submit' onClick={props.login}>Submit</Button>
      {/* <FormGroup>
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
      </FormGroup> */}
    </Form>
  );
}
export default userLogin;
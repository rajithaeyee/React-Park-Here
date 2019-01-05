import React from 'react';
import {FormGroup,FormControl, ControlLabel,HelpBlock} from 'react-bootstrap';

const userLogin = (props)=>{
    return(
        <form>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="user name"
          />
          <br/>
                <FormControl
                    type="password"
                    placeholder="password"
                />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
}
export default userLogin;
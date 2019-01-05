import React from 'react';
import './LoginForm.css';
import { Grid, Col, Row } from 'react-bootstrap';
//import logo from '../../assets/images/img-01.png'
import LoginImage from './LoginImage/LoginImage';
import UserLogin from './UserLogin/UserLogin';

const loginForm = (props) => {
    return (
        <div className="wrap-login">
            <Grid>
                <Row className="show-grid">
                    <Col md={6} mdPush={1}>
                        <LoginImage />
                    </Col>
                    <Col md={6} mdPush={0}>
                        <h1>Member Login</h1>
                        <UserLogin username={props.username}
                            password={props.password}
                            login={props.login}
                            usernameChanged={props.usernameChanged}
                            passwordChanged={props.passwordChanged} />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default loginForm;
import React from 'react';
import './LoginForm.css';
//import { Grid, Col, Row } from 'react-bootstrap';
//import logo from '../../assets/images/img-01.png'
import LoginImage from './LoginImage/LoginImage';
import UserLogin from './UserLogin/UserLogin';
import { Grid, Container } from 'semantic-ui-react';

const loginForm = (props) => {
    return (
        <div className="wrap-login">
        <Container>
        <Grid columns={2} divided>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
            <Grid.Row>
            <Grid.Column>
                <LoginImage />
            </Grid.Column>
            <Grid.Column>
            <UserLogin username={props.username}
                            password={props.password}
                            login={props.login}
                            usernameChanged={props.usernameChanged}
                            passwordChanged={props.passwordChanged} />
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
            {/* <Grid>
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
            </Grid> */}
        </div>
    );
}

export default loginForm;
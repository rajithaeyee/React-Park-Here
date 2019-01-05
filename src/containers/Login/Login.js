import React, { Component } from 'react';
import './Login.css';
import LoginForm from './../../components/LoginForm/LoginForm';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginError: false
        };
    }


    loginHandler = (event) => {
        const username = this.state.username;
        const password = this.state.password;

        if (username === "admin" && password === "admin") {
            console.log("Login Success");
        } else {
            console.error("Login Failed");
            this.setState({
                loginError: true
            });
        }
    }

    usernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    passwordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="login-wrapper">
                <LoginForm username={this.state.username}
                    password={this.state.password}
                    login={this.loginHandler}
                    usernameChanged={this.usernameHandler}
                    passwordChanged={this.passwordHandler} />
            </div>
        );
    }
}
export default Login;
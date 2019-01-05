import React, { Component } from 'react';
import'./Login.css';
import LoginForm from './../../components/LoginForm/LoginForm';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div className="login-wrapper">
                <LoginForm />
            </div>
        );
    }
}
export default Login;
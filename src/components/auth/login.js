import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actions from '../../actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errorText: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const { email, password } = this.state;

        this.props.login( email, password );

        this.setState({
            email: '',
            password: ''
        })

        setTimeout(() => {
            if (this.props.isAuthenticated) {
                this.props.history.push("/")
            } else if (!this.props.isAuthenticated) {
                this.setState({
                    errorText: "Invalid Credentials!"
                })
            }
        }, 1500);
    }

    render() {
        return (
            <div className="login-wrapper">
                <h1>Login to access your dashboard</h1>

                <div className="login-error-text">
                    {this.state.errorText}
                </div>

                <form onSubmit={this.handleSubmit} className="auth-form-wrapper">
                    
                    
                    <div className='form-group'>
                        <FontAwesomeIcon icon="envelope" />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Your Username"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <FontAwesomeIcon icon="lock" />
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Your Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button className="btn" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
} 

Login = connect(mapStateToProps, actions)(Login);

export default withRouter(Login);
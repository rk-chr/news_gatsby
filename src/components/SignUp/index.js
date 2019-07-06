/* eslint-disable */
import React from 'react';
import Input from '../Input';
import styles from './index.module.css';
import axios from '../../../axios';

class SignUp extends React.Component {
    state = {
        username: '',
        userError: false,
        password: '',
        passwordError: false,
        message: ''
    };

    handleUser = e => (e.target.value.length >= 6 && e.target.value.length <= 14
        ? this.setState({
            userError: false,
            username: e.target.value,
        })
        : this.setState({
            userError: true,
        }));

    handlePassword = e => (e.target.value.length >= 8 && e.target.value.length <= 16
        ? this.setState({
            passwordError: false,
            password: e.target.value,
        })
        : this.setState({
            passwordError: true,
        }));

    handleSubmit = event => {
        event.preventDefault();
        const { username, password, passwordError, userError } = this.state;
        if (!passwordError && !userError) {
            axios.post('/signup', { username: `${username}`, password: `${password}` })
                .then(res => {
                    if (!res.data.err) {
                        this.setState({
                            message: res.data.msg
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    render() {
        const { username, password, userError, passwordError, message } = this.state;
        return (
            <form className={styles.SignUp} onSubmit={this.handleSubmit}>
                <Input
                    label="Username"
                    htmlFor="email"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    change={this.handleUser}
                    error={userError ? 'User must be 6 to 14 characters' : ''}
                />
                <Input
                    label="Password"
                    htmlFor="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    change={this.handlePassword}
                    error={passwordError ? 'Password must be 8 to 10 characters' : ''}
                />
                <button type="submit" className="btn btn-success">
                    SignUp
                </button>
                {message ? (
                    <div className="alert alert-success" role="alert">
                        {message}
                    </div>
                ) : null}
            </form>
        );
    }
}

export default SignUp;

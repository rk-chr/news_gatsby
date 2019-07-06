/* eslint-disable */
import React from 'react';
import Input from '../Input';
import styles from './index.module.css';

class SignUp extends React.Component {
    state = {
        username: '',
        userError: false,
        password: '',
        passwordError: false,
    };

    handleUser = e => (e.target.value.length >= 6 && e.target.value.length <= 14
        ? this.setState({
            userError: false,
            user: e.target.value,
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

    render() {
        const { username, password, userError, passwordError } = this.state;
        return (
            <form className={styles.Login}>
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
                <button type="button" className="btn btn-success">
                    Login
                </button>
            </form>
        );
    }
}

export default SignUp;

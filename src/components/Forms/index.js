import React from 'react';
import styles from './index.module.css';
import Login from '../Login';
import SignUp from '../SignUp';

class Forms extends React.Component {
    state = {
      com: <SignUp />
    }

    handleLogin = () => {
      this.setState({
        com: <Login />
      });
    }

    handleSignUp = () => {
      this.setState({
        com: <SignUp />
      });
    }

    render() {
      const { com } = this.state;
      return (
        <div className="container">
          <div className={styles.forms}>
            <div className={styles.butNs}>
              <button type="button" onClick={this.handleSignUp}>SignUp</button>
              <button type="button" onClick={this.handleLogin}>Login</button>
            </div>
            {com}
          </div>
        </div>
      );
    }
}

export default Forms;

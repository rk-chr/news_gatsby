/* eslint-disable */
import React from 'react';
import styles from './index.module.css';
import axios from '../../../axios';


class Posts extends React.Component {
    state = {
        text: '',
        message: ''
    }

    handleChange = e => {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { text } = this.state;
        const token = localStorage.getItem('token');
        axios.post('/comments', { comment: text }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                this.setState({
                    message: 'Your comment posted succesfully..'
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { message } = this.state;
        return (
            <div className="container">
                <div className={styles.Posts}>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Type a comment..."
                                onChange={this.handleChange}>
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-danger">
                            Post Comment
                        </button>
                        {message ? (
                            <div className="alert alert-success" role="alert">
                                {message}
                            </div>
                        ) : null}
                    </form>
                </div>
            </div>
        );
    }
}

export default Posts;

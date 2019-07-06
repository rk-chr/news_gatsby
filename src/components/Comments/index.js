/* eslint-disable  */
import React from 'react';
import styles from './index.module.css';
import axios from '../../../axios';

class Comments extends React.Component {

    state = {
        comments: [],
        message: ''
    }

    componentDidMount() {
        axios.get('/comments')
            .then(res => {
                this.setState({
                    comments: res.data.comments
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidUpdate() {
        axios.get('/comments')
            .then(res => {
                this.setState({
                    comments: res.data.comments
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    UPvote = id => {
        const token = localStorage.getItem('token');
        axios.post('/comments/vote', { id: id, up: 1 }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                if (res.data.id !== id) {
                    this.setState({
                        message: 'You voted up!'
                    })
                } else {
                    this.setState({
                        message: 'You cannot down vote your own post!'
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    DOWNvote = id => {
        const token = localStorage.getItem('token');
        axios.post('/comments/vote', { id: id, down: 1 }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(res => {
                if (res.data.id !== id) {
                    this.setState({
                        message: 'You voted down!'
                    })
                } else {
                    this.setState({
                        message: 'You cannot down vote your own post!'
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const { comments, message } = this.state;
        return (
            <div className="container">
                <div className={styles.Comments}>
                    {
                        comments.map(com => (
                            <React.Fragment key={com.id}>
                                <div className={styles.comment}>
                                    <div className={styles.user}>
                                        <h3>{com.id}. {com.by}</h3>
                                        <p>
                                            {com.comment}
                                        </p>
                                    </div>
                                    <div className={styles.voting}>
                                        <p onClick={() => this.UPvote(com.id)}><i className={`fas fa-thumbs-up ${styles.up}`}></i> {com.up.length} Upvotes</p>
                                        <p onClick={() => this.DOWNvote(com.id)}><i className={`fas fa-thumbs-down ${styles.down}`}></i> {com.down.length} downvotes</p>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Comments;

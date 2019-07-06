/* eslint-disable  */
import React from 'react';
import styles from './index.module.css';
import axios from '../../../axios';

class Comments extends React.Component {

    state = {
        comments: []
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

    render() {
        const { comments } = this.state;
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
                                        <p><i className={`fas fa-thumbs-up ${styles.up}`}></i> {com.up.length} Upvotes</p>
                                        <p><i className={`fas fa-thumbs-down ${styles.down}`}></i> {com.down.length} downvotes</p>
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

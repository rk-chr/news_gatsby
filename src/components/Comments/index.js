/* eslint-disable  */
import React from 'react';
import styles from './index.module.css';

class Comments extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={styles.Comments}>
                    <div className={styles.user}>
                        <h3>1. kishore</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                    </div>
                    <div className={styles.voting}>
                        <p><i className="fas fa-thumbs-up"></i> 9 Upvotes</p>
                        <p><i className="fas fa-thumbs-down"></i> 10 downvotes</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comments;

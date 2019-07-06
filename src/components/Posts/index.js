/* eslint-disable */
import React from 'react';
import styles from './index.module.css';


class Posts extends React.Component {
    render() {
        return (
            <div className="container">
                <div className={styles.Posts}>
                    <form>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Type a comment...">
                            </textarea>
                        </div>
                        <button type="button" className="btn btn-danger">
                            Post Comment
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Posts;

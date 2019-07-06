import React from 'react';
import ComMents from '../components/Comments';
import Posts from '../components/Posts';

class Comments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Posts />
        <ComMents />
      </React.Fragment>
    );
  }
}

export default Comments;

import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

function CommentList(props) {
  var CommentListStyles = {
    border: '5px solid gray',
    padding: '10px',
    margin: '10px 5px 10px 5px',
    backgroundColor: '#e6f2ff'
  };

  return (
    <div style={CommentListStyles}>
      <h3>Comments:</h3>
      {props.commentList.map((comment) =>
        <Comment time={comment.time + ' ' + 'ago'}
          name={comment.name}
          comment={comment.comment}
          key={comment.id}/>
      )}

    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.array
};

export default CommentList;

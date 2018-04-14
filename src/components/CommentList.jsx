import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

function CommentList(props) {
  var CommentListStyles = {
    border: '2px solid gray',
    padding: '10px',
    backgroundColor: '#e6f2ff'
  };

  return (
    <div style={CommentListStyles}>
      <h3>Comments:</h3>
      {props.commentList.map((comment) =>
        <Comment formattedElapsedTime={comment.formattedElapsedTime}
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

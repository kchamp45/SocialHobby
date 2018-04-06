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
      {props.commentList.map((comment, index) =>
        <Comment time={comment.time}
          name={comment.name}
          comment={comment.comment}
          key={index}/>
      )}

    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.array
};

export default CommentList;

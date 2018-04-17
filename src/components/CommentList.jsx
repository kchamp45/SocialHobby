import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

function CommentList(props) {
  var CommentListStyles = {
    padding: '10px'
  };

  return (
    <div style={CommentListStyles}>
      <h3>Comments:</h3>
      {props.commentList.map((comment) =>
        <Comment formattedElapsedTime={comment.formattedElapsedTime}
          name={comment.name}
          comment={comment.comment}
          likeCount={props.likeCount}
          updateLikeVote={props.updateLikeVote}
          dislikeCount={props.dislikeCount}
          updateDislikeVote={props.updateDislikeVote}
          key={comment.id}/>
      )}
    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.array,
  likeCount: PropTypes.number,
  dislikeCount: PropTypes.number,
  updateLikeVote: PropTypes.func,
  updateDislikeVote: PropTypes.func
};

export default CommentList;

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
          selectedCommentLike={props.selectedCommentLike}
          onLikeVote={props.onLikeVote}
          dislikeCount={props.dislikeCount}
          onDislikeVote={props.onDislikeVote}
          key={comment.id}/>
      )}
    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.array,
  selectedCommentLike: PropTypes.number,
  dislikeCount: PropTypes.number,
  onLikeVote: PropTypes.func,
  onDislikeVote: PropTypes.func
};

export default CommentList;

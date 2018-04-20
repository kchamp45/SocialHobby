import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {

  return(
    <div>
      <style jsx>{`
        h3 {
          color: blue;
        }
        div {
          background-color: #e6f2ff;
          padding: 10px;
        }
        button {
          background-color: pink;
        }
      `}
      </style>
      <h4>{props.formattedElapsedTime}</h4>
      <h3>{props.name}</h3>
      <p><em>{props.comment}</em></p>
      <p><button onClick={() =>{props.onLikeVote({formattedElapsedTime: props.formattedElapsedTime, name: props.name, comment: props.comment});}}>Like</button>&nbsp;&nbsp;
      <span>{props.selectedCommentLike}</span></p>
      <p><button onClick={props.onDislikeVote}>DisLike</button>&nbsp;&nbsp;
      <span>{props.dislikeCount}</span></p>
      <hr/>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string,
  formattedElapsedTime: PropTypes.string.isRequired,
  likeCount: PropTypes.number,
  dislikeCount: PropTypes.number,
  onLikeVote: PropTypes.func,
  onDislikeVote: PropTypes.func
};

export default Comment;

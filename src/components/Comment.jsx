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
      <button onClick={props.updateLikeVote}>Like</button>&nbsp;
      <p>{props.likeCount}</p>
      <button onClick={props.updateDislikeVote}>Dislike</button>&nbsp;
      <p>{props.dislikeCount}</p>
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
  updateLikeVote: PropTypes.func,
  updateDislikeVote: PropTypes.func
};

export default Comment;

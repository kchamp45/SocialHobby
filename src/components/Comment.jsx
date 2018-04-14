import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Comment(props) {

  var CommentStyles = {
    color: 'blue'
  };

  let count = 0;
  let dislike = 0;
  function handleLike() {
    count++;
    console.log(count);
  }

  function handleDislike() {
    dislike++;
    console.log(dislike);
  }

  return(
    <div>
      <h4>{props.formattedElapsedTime}</h4>
      <h3 style={CommentStyles}>{props.name}</h3>
      <p><em>{props.comment}</em></p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleDislike}>Dislike</button>
      <p>{count}</p>
      <hr/>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  comment: PropTypes.string,
  formattedElapsedTime: PropTypes.string.isRequired
};

export default Comment;

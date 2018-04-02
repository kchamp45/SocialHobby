import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  var CommentStyles = {
    color: 'blue'
  };

  return(
    <div>
      <h4>{props.time}</h4>
      <h3 style={CommentStyles}>{props.name}</h3>
      <p><em>{props.comment}</em></p>
      <hr/>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  comment: PropTypes.string
};

export default Comment;

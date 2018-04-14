import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Comment(props) {

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
      <button onClick={handleLike}>Like</button>&nbsp;
      <button onClick={handleDislike}>Dislike</button>
      <p>{count}</p>
      <hr/>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string,
  formattedElapsedTime: PropTypes.string.isRequired
};

export default Comment;

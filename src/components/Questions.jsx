import React from 'react';
import PropTypes from 'prop-types';

function Questions(props){
  return (
    <div>
      <p>Please keep your comment respectful.</p>
      <button onClick={props.onAddNewComment}>Agree</button>
    </div>
  );
}

Questions.propTypes = {
  onAddNewComment: PropTypes.func
};

export default Questions;

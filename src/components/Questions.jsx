import React from 'react';
import PropTypes from 'prop-types';

function Questions(props){
  return (
    <div>
      <p>Do you agree to be respectful with your comments?</p>
      <button onClick={props.onAddNewComment}>Yes</button>
    </div>
  );
}

Questions.propTypes = {
  onAddNewComment: PropTypes.func
};

export default Questions;

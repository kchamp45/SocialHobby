import React from 'react';
import PropTypes from 'prop-types';

function NewCommentForm(props){
  let _time = null;
  let _name = null;
  let _comment = null;

  function handleNewCommentFormSubmission(event){
    event.preventDefault();
    props.onNewCommentCreation({time: _time.value, name: _name.value, comment: _comment.value});
    _time.value = '';
    _name.value = '';
    _comment.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewCommentFormSubmission}>
        <input
          type='text'
          id='time'
          placeholder='time'
          ref={(input) => {_time = input;}}/>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => {_name = input;}}/>
        <textarea
          id='comment'
          placeholder='Add your comment.'
          ref={(input) => {_comment = input;}}/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentForm;

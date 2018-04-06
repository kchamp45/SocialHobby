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
      <style jsx>{`
        input {
          width: 30%;
          height: 25px;
          border: 2px solid green;
          margin-top: 20px;
        }
        textarea {
          width: 61%;
          height: 35px;
          border: 2px solid green;
          margin-top: 10px;
        }
        button {
          background-color: #1a75ff;
          width: 55px;
          height: 30px;
          color: white;
        }
      `}</style>
      <form onSubmit={handleNewCommentFormSubmission}>
        <input
          type='text'
          id='time'
          placeholder='time'
          ref={(input) => {_time = input;}}/>&nbsp;
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => {_name = input;}}/><br/>
        <textarea
          id='comment'
          placeholder='Add your comment.'
          ref={(input) => {_comment = input;}}/><br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentForm;

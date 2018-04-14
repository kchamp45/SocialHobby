import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewCommentForm(props){
  let _time = null;
  let _name = null;
  let _comment = null;
  let vote = null;

  function handleNewCommentFormSubmission(event){
    event.preventDefault();
    props.onNewCommentCreation({name: _name.value, comment: _comment.value, id: v4(), timePost: new Moment(), vote: 'like'});
    _name.value = '';
    _comment.value = '';
  }

  return (
    <div>
      <style jsx>{`
        input {
          width: auto;
          height: 25px;
          border: 2px solid green;
          margin-top: 20px;
        }
        textarea {
          width: auto;
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

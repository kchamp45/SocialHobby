import React from 'react';

function NewCommentForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='time'
          placeholder='time'/>
        <input
          type='text'
          id='name'
          placeholder='name'/>
        <textarea
          id='comment'
          placeholder='Add your comment.'/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default NewCommentForm;

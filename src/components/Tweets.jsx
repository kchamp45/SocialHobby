import React from 'react';

function Tweets (){
  let _tweet = null;

  function handleEnterKeyPress(event) {
    if(event.key == 'Enter') {
      if(_tweet.value == 'hobby'){
        alert(_tweet.value);
      }else {
        alert('Sorry no result match your term.  Try again.');
      }
      _tweet.value = '';
    }
  }

  var TweetStyles = {
    borderRadius: '25px',
    border: '2px solid #0080ff',
    height: '25px',
    width: '300px'
  };

  return (
    <div>
      <form onKeyPress={handleEnterKeyPress}>
        <input
          style={TweetStyles}
          type='text'
          id='tweet'
          placeholder='Tweet'
          ref={(input) => {_tweet = input;}}/>
      </form>
    </div>
  );
}

export default Tweets;

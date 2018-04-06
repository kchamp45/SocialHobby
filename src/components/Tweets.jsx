import React from 'react';

function Tweets (){
  var TweetStyles = {
    float: 'right',
    borderRadius: '25px',
    border: '2px solid #0080ff',
    height: '25px',
    width: '20%',
    marginBottom: '20%'
  };
  return (
    <div>
      <form>
        <label>
          <input style={TweetStyles} type="text" name="tweet" placeholder="Tweet"/>
        </label>
      </form>
    </div>
  );
}

export default Tweets;

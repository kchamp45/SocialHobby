import React from 'react';
import Follower from './Follower';

var followers = [
  {
    name: 'Kate Hudson',
    since: '1/15/18'
  },
  {
    name: 'Justin Bieber',
    since: '2/16/18'
  },
  {
    name: 'Selena Gomez',
    since: '3/10/18'
  }
];

function FollowerList() {
  var FollowerListStyles = {
    border: '5px solid gray',
    padding: '10px',
    margin: '10px 5px 10px 5px',
    backgroundColor: '#ffccff'
  };

  return (
    <div style={FollowerListStyles}>
      <h3>Followers:</h3>
      {followers.map((follower, index) =>
        <Follower
          name={follower.name}
          since={follower.since}
          key={index}/>
      )}
    </div>
  );
}

export default FollowerList;

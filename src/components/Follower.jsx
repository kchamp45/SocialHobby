import React from 'react';
import PropTypes from 'prop-types';

function Follower(props) {
  var followerStyles = {
    color: 'black'
  };

  return(
    <div style={followerStyles}>
      <h3>{props.name}</h3>
      <h3>{props.since}</h3>
      <style jsx>{`
          button {
            background-color: #1a75ff;
            color: white;
          }
      `}</style>
      <hr/>
    </div>
  );
}

Follower.propTypes = {
  name: PropTypes.string.isRequired,
  since: PropTypes.string
};

export default Follower;

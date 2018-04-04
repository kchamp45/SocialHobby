import React from 'react';
import PropTypes from 'prop-types';

function OtherUser(props) {
  var UserStyles = {
    color: 'black'
  };

  return(
    <div style={UserStyles}>
      <h4>{props.image}</h4>
      <h3>{props.name}</h3>
      <button>{props.button}</button>
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

OtherUser.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  button: PropTypes.string
};

export default OtherUser;

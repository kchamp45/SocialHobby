import React from 'react';
import PropTypes from 'prop-types';

function Craft(props) {
  var CraftStyles = {
    color: 'green'
  };

  return(
    <div>
      <h3>{props.title}</h3>
      <h4 style={CraftStyles}>{props.poster}</h4>
      <h4>{props.date}</h4>
      <p><em>{props.instructions}</em></p>
      <hr/>
    </div>
  );
}

Craft.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  date: PropTypes.string,
  instructions: PropTypes.string
};

export default Craft;

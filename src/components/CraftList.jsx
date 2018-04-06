import React from 'react';
import Craft from './Craft';
import PropTypes from 'prop-types';

function CraftList() {
  var CraftListStyles = {
    border: '5px solid gray',
    padding: '10px',
    margin: '10px 5px 10px 5px',
    backgroundColor: '#e6f2ff'
  };

  var masterCraftList = [
    {
      title: 'SnapChat Ghost',
      poster: 'Kimberly Lu',
      date: 'April 5, 2018',
      instructions: 'With white yarn, 6 Single crochet (sc) in magic ring.  Increase to 12sc. Increase to 18.  Increase to 24. Increase to 30.  Sc around for 4 rounds.  Embroider the eyes and mouth with black and red yarn, respectively.'
    },
    {
      title: 'Cake-In-A-Mug',
      poster: 'Emma Lu',
      date: 'January 19, 2018',
      instructions: 'Melt 2TB of butter in a mug.  Add 1/4c of all-purpose flour, 1 large egg, 2TB sugar, 1TB milk, 1tsp vanila, 1/2tsp baking powerder.  Mix together.  Stir in 1tsp sprinkles.  Microwave 60-90 seconds.  Serve with ice cream or whipped cream.'
    }
  ];

  return (
    <div style={CraftListStyles}>
      <h1>Craft Ideas</h1>
      {masterCraftList.map((idea, index) =>
        <Craft title={idea.title}
          poster={idea.poster}
          date={idea.date}
          instructions={idea.instructions}
          key={index}/>
      )}
    </div>
  );
}

CraftList.propTypes = {
  masterCraftList: PropTypes.array
};

export default CraftList;

import React from 'react';

function Search (){
  var SearchStyles = {
    float: 'right',
    marginRight: '5px',
    borderRadius: '25px',
    border: '2px solid #0080ff'

  };
  return (
    <div>
      <form>
        <label>
          <input style={SearchStyles} type="text" name="search" placeholder="Search"/>
        </label>
      </form>
    </div>
  );
}

export default Search;

import React from 'react';

function Search () {

  let _search = null;

  function handleEnterKeyPress(event) {
    if(event.key == 'Enter') {
      if(_search.value == 'snapchat'){
        alert(_search.value);
      }else {
        alert('Sorry no result match your search term.  Try again.');
      }
      _search.value = '';
    }
  }

  var SearchStyles = {
    borderRadius: '25px',
    border: '2px solid #0080ff',
    height: '25px',
    width: '300px',
    marginLeft: '575px',
    marginRight: '50px',
  };

  return (
    <div>
      <style jsx>{`
        div {
          margin-bottom: 40px;
        }
      `}</style>

      <form onKeyPress={handleEnterKeyPress}>
        <input style={SearchStyles}
          type='text'
          id='search'
          placeholder='Search'
          ref={(input) => {_search = input;}}/>
      </form>
    </div>
  );
}

export default Search;

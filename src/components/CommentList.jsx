import React from 'react';
import Comment from './Comment';

var userComments = [
  {
    time: '1 min ago',
    name: 'Cindy Crawford',
    comment: 'Crochet your favorite SnapChat ghost in 1 hour!'
  },
  {
    time: '5 mins ago',
    name: 'Martha Stewart',
    comment: 'Coat your Easter eggs in color foils!'
  },
  {
    time: '1 hr ago',
    name: 'Rachel Ray',
    comment: 'Drop baby marshmallows in your root beer floats!'
  }
];

function CommentList() {
  var CommentListStyles = {
    border: '5px solid gray',
    padding: '10px',
    margin: '10px 5px 10px 5px',
    backgroundColor: '#e6f2ff'
  };

  return (
    <div style={CommentListStyles}>
      {userComments.map((comment, index) =>
        <Comment time={comment.time}
          name={comment.name}
          comment={comment.comment}
          key={index}/>
      )}
    </div>
  );
}

export default CommentList;

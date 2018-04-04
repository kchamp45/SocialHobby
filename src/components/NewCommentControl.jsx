import React from 'react';
import NewCommentForm from './NewCommentForm';
import CommentList from './CommentList';

class NewCommentControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleAddNewComment = this.handleAddNewComment.bind(this);
  }

  handleAddNewComment(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleContent = <NewCommentForm/>;
    } else {
      currentVisibleContent = <CommentList onAddCommentClick={this.handleAddNewComment}/>;
    }
    return (
      <div>
        {currentVisibleContent}
      </div>
    );
  }
}

export default NewCommentControl;

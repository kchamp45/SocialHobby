import React from 'react';
import NewCommentForm from './NewCommentForm';
import Questions from './Questions';
import PropTypes from 'prop-types';

class NewCommentControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true
    };
    this.handleAddNewComment = this.handleAddNewComment.bind(this);
  }

  handleAddNewComment(){
    this.setState({formVisibleOnPage: false});
  }

  render(){
    let currentVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentVisibleContent = <NewCommentForm onNewCommentCreation={this.props.onNewCommentCreation}/>;
    } else {
      currentVisibleContent = <NewCommentForm onAddNewComment={this.handleAddNewComment}/>;
    }
    return (
      <div>
        {currentVisibleContent}
      </div>
    );
  }
}

NewCommentControl.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentControl;

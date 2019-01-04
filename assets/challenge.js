import React from 'react';
const Loading = require('react-loading-animation');
const ReactMarkdown = require('react-markdown');
import $ from 'jquery';
class Challenge extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      post: '',
      error: false
    }
    this.renderView = this.renderView.bind(this);
    this.loadChallenge = this.loadChallenge.bind(this);
  }
  componentDidMount() {
    this.loadChallenge();
  }
  loadChallenge() {
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: this.props.url,
      success: function (data) {
        if (data !== null) {
          let postTextString = data.text;
          this.setState({ title: data.title }, () => {
            this.setState({ post: postTextString });
          });
        }
        else {
          this.setState({ error: true })
        }
      }.bind(this),
      error: function (xhr, status, err) {
        console.warn(xhr.responseText);
        console.error("please check your console for errors " + status + ' ' + err);
      }.bind(this)
    });
  }
  renderView() {
    let v;
    let noContent = this.state.post === null || this.state.post === undefined ||
      this.state.post === "" ? true : false;
    if (this.state.error) {
      const errorView = (<p>could not get data from reddit api</p>);
      return errorView
    }
    else if (noContent) {
      v = (<Loading />);
    }
    else {
      let postText = <ReactMarkdown source={this.state.post} />
      v = (<div className="content">
        <h2>Title</h2>
        <div className="title">{this.state.title}</div>
        <h2>Challenge details</h2>
        {postText}
      </div>);
    }
    return v;
  }
  render() {
    return(
      this.renderView()
    )
  }
};

export default Challenge;

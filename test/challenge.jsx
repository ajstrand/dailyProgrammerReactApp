import React from 'react';
import TextItem from './TextItem.jsx';
const Loading = require('react-loading-animation');
import $ from 'jquery';
class Challenge extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title:'',
      post:'',
    }
    this.loadChallenge = this.loadChallenge.bind(this);
  }
  componentDidMount(nextProps){
    this.loadChallenge();
  }
  loadChallenge() {
      $.ajax({
          type: 'GET',
          dataType: 'json',
          url: this.props.url,
          success: function(data) {
            if(data !== null){
              var postTextString = data.text;
              var arr = $(postTextString.split("."));
              this.setState({title:data.title});
              this.setState({post:arr});
              }
              else {
                $('body').append('<p>could not get data from reddit api</p>');
              }
          }.bind(this),
          error: function(xhr, status, err) {
            console.warn(xhr.responseText);
            console.error("please check your console for errors " + status + ' ' + err);
          }.bind(this)
      });
  }
    render() {
      if(this.state.post === null || this.state.post === undefined ||
      this.state.post === ""){
        var postArray = <Loading/>
      }
      else {
        var postArray = this.state.post.map(function(index, item){
           return <TextItem key={index} item={item}/>
        });

      }
        return(
          <div>
            <div className="title">{this.state.title}</div>
            {postArray}
          </div>
      );
    }
};

export default Challenge;

import React from 'react';
import $ from 'jquery';
import Challenge from './challenge.jsx';

class App extends React.Component {
    constructor() {
   super();
   this.state= {
       title:'',
       post:''
   }
   this.loadChallenge = this.loadChallenge.bind(this);
    }
    componentDidMount(){
      this.loadChallenge();
    }
    loadChallenge() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.props.url,
            success: function(data) {
              if(data !== null){
                this.setState({title:data.title});
                this.setState({post:data.text});
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
        return (
            <div className="container">
                <Challenge title={this.state.title} post={this.state.post}></Challenge>
            </div>
        );
    }
};

export default App;

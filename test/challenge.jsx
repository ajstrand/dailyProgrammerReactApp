import React from 'react';
class Challenge extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title:'',
      post:'',
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({title:nextProps.title});
    this.setState({post:nextProps.post});
  }
    render() {
        return(
          <div>
            <div className="title">{this.state.title}</div>
            <div className="post">{this.state.post}</div>
          </div>
      );
    }
};

export default Challenge;

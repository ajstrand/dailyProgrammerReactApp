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
    }
    componentDidMount (){
      document.title="Random r/daily programmer challenge"
    }
    render() {
        return (
            <div className="container">
                <Challenge url="api/challenge"></Challenge>
            </div>
        );
    }
};

export default App;

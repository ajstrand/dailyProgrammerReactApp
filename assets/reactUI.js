import React from 'react';
import Challenge from './challenge.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:"api/challenge"
        }
    }
    componentDidMount() {
        document.title = "Random r/daily programmer challenge"
    }
    render() {
        return (
            <div className="container">
                <Challenge url={this.state.url}></Challenge>
            </div>
        );
    }
};

export default App;

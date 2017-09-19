/*
 * https://facebook.github.io/react/docs/state-and-lifecycle.html
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }
    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return (
            <div>
                <h1>Hello world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

function App(){
    return (
        <div>
            <Clock/>
            <Clock/>
            <Clock/>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

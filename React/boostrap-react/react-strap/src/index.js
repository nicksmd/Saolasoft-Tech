import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import App from './App'

const TestButton = ()=>(
    <Button color="danger">
        Hi!
    </Button>
);
ReactDOM.render(<App />, document.getElementById('root'));

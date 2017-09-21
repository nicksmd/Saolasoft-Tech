import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav'
import MainArea from './MainArea'
import styled from 'styled-components'
import {Button, Badge} from 'reactstrap'
import Table from './Table'

const Input = styled.input`
    padding: 0.5em;
    margin: 10em;
    color: red;
    border: none;
    border-radius: 3px;
    background: yellow;
`;

// .attrs is for define additional props

const StyledBadge = styled(Badge).attrs({
    color:"primary"
})`    
    
`;

const StyledButton = styled(Button).attrs({
    outline: 'true'
})`
    background: ${props => props.primary ? 'yellow' : 'white'};
`;

const Test = ()=>(
    <div>
        <Badge>Quang</Badge>
        <StyledBadge>Haha</StyledBadge>
        <StyledButton primary>Primary Button</StyledButton>
        <StyledButton>Normal Button</StyledButton>
    </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<Nav/>*/}
          {/*<Input type="text" value="hello"/>*/}
          {/*<Test/>*/}
          <Table/>
      </div>
    );
  }
}

export default App;
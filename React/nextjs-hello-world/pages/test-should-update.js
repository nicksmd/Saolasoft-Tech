/**
 * Created by quangh on 9/22/2017.
 */
import React from 'react'

const Child = (props)=>{
    console.log(props.name);
    return(
        <p>{props.name}</p>
    )
};

class Todo extends React.Component {

    constructor(){
        super();
        this.state= {
            unseen: "quang"
        }
    }
    componentDidMount() {
        let x=1;
        setInterval(() => {
            x+=1;
            this.setState(() => {
                return { unseen: x }
            });
        }, 1000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        //return this.state.unseen !== nextState.unseen;
        //return true;
        return false;
    }

    render() {
        console.log('render called');
        return (<Child name={this.state.unseen}/>);
    }
}

export default Todo

/*
    - render() is called whenever the setState() is called, even if it in fact does not change the value
    of state.

    - shouldComponentUpdate() help us in this case, this function will be call right before render() is called,
    if it return true (as default), React will call render() whenever state is updated. We can modify this functin
    to return false in case the value of state is unchanged.

    - If shouldComponentUpdate return false => children components still re-render if their state change
    but if only their props change, they will not be updated, because the function render(){} in parent
    component is not called.

    - Stateless (functional) components are no faster than the stateful (class)

    - Rendering in React 15 is roughly 25% faster compared to 0.14

    - Pure components are the fastest. Use shouldComponentUpdate

    - Rendering in development mode is 2-8x slower than rendering in production
 */
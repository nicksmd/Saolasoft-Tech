/**
 * Created by quangh on 9/18/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        if (!this.props.user){
            return(
                <h4>Select a user...</h4>
            )
        }
        return (
            <div>
                <h2>Name: {this.props.user.name}</h2>
                <h3>Age: {this.props.user.age}</h3>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        // just take what this component need: list of users
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);

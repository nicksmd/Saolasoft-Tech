/**
 * Created by quangh on 9/18/2017.
 */
import React from 'react';
import UserList from '../containers/user-list';
import ActiveUser from '../containers/user-detail';

require('../../scss/style.scss');

const app = ()=>(
    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr/>
        <h2>User Detail:</h2>
        <ActiveUser/>
    </div>
);

export default app;

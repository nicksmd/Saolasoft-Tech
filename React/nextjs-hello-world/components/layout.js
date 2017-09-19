/**
 * Created by quangh on 9/19/2017.
 */
import Header from './header'
import * as React from "react";

const layoutStyle = {
    margin:20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = (props)=>(
    <div style={layoutStyle}>
        <Header/>
        {props.children}
    </div>
);

export default Layout
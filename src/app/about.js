import  React from 'react';
import createReactClass from 'create-react-class';
import  { BrowserRouter, Link, Route } from 'react-router-dom';

var About = createReactClass({
    render:function(){
        return(
            <div>
                <Link to={'/'}> Home </Link>
                <Link to={'/about'}> About </Link>
                <h1>About Component</h1>
            </div>
        );
    },
})
module.exports = About;

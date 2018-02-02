
import  React from 'react';
import  ReactDOM from 'react-dom';
import  createReactClass from 'create-react-class';
import  {BrowserRouter, Link, Route,Switch } from 'react-router-dom';
import  TodoItem from './todoitem';
import  Additem from './additem';

import  About from './about';
import TodoComponent from './app';


var Index = createReactClass({
    render:function(){
        return(
                <BrowserRouter>
                <Switch>
                    <Route path= "/" exact component={TodoComponent}/>
                    <Route path= "/about" exact component={About}/>
                </Switch>
                </BrowserRouter>
        );
    },
})

// put component into html page
ReactDOM.render( <Index/>  , document.getElementById('todo-wrapper'));

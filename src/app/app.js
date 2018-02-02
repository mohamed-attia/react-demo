import  React from 'react';
import  createReactClass from 'create-react-class';
import  { BrowserRouter, Link, Route } from 'react-router-dom';
import  TodoItem from './todoitem';
import  Additem from './additem';
import  About from './about';

require('../css/index.css')

// create component
var TodoComponent = createReactClass({

    //initial data
    getInitialState:function(){
        return{
            todos:['1st','2nd','3rd','4th'],
            age:30
        }
    },

    //rendering the data
    render:function(){
        
        //make the list dynamic
        var todos = this.state.todos;
        todos = todos.map(function(item,index){
            return(
                <TodoItem childitem={item} key={index} onChildDelete={this.onDelete} />
            )
        }.bind(this))

        //change the age in runtime 
        var setager = setTimeout(function(){
            this.setState({
                age:55
            })
        }.bind(this),5000)

        return(
            <div id="todo">
            <Link to={'/'}> Home </Link>
            <Link to={'/about'}> About </Link>
                <ul>
                    {todos}
                </ul>
                <p>{this.state.age}</p>
                <Additem onAdd={this.onAdd}/>
            </div>
        );//render
    },

    //some functions
    onDelete:function(item){
        var update = this.state.todos.filter(function(val,index){
            return item !== val;
        });
        this.setState({
            todos:update
        });
    },

    onAdd:function(item){
        var update = this.state.todos;
         update.push(item);
        this.setState({
            todos:update
        });
    }
})

var myDetails={
    name:'mohamed',
    age:28
}

module.exports = TodoComponent;
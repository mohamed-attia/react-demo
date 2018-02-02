import  React from 'react';
import createReactClass from 'create-react-class';

require('../css/todoitem.css');

//create todoitem child component
var TodoItem = createReactClass({
    render:function(){
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.childitem}</span>
                    <span className="item-delete" onClick={this.deleteItem}> x </span>
                </div>
            </li>
        )
    },

    //delete function here
    deleteItem:function(){
        this.props.onChildDelete(this.props.childitem)
    }
})

module.exports = TodoItem;
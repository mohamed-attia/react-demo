import  React from 'react';
import createReactClass from 'create-react-class';

require('../css/additem.css');

var AddItem = createReactClass({
    render:function(){
        return(
            
            <form id="add-todo" onSubmit={this.handlesubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Add Item"/>
            </form>
        );
    },
    handlesubmit:function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value)
    }
})
module.exports = AddItem;

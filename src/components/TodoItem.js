import React from 'react';

class TodoItem extends React.Component {
    render(){
        return(
             <li >
          {/* returns list of name that has been entered by the user to update the list state in the parent component */}
        {this.props.name} 
             </li>
        );
    }
}
export default TodoItem;
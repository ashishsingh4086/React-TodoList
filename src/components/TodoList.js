import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor (){
        super();
        this.state={
            item:[]
        };
    }
    handleAddItem=(name)=>{
        const newItems=this.state.item.concat({name:name});
        this.setState({
            item:newItems
        });
    }
    render()
    {
        return(
            <div>
                <ul>
                    {this.state.item.map(item=><TodoItem name={item.name}/>)}
                    </ul>
                    <TodoInput onAddItem ={this.handleAddItem}/>
                </div>
                
        );
    }
}
export default TodoList;
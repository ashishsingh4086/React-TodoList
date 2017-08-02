/*
* React Parent Component. Recives state changes from different child components
*/
import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

//class to initializ state 
class TodoList extends React.Component {
    constructor (){
        super();
        this.state={
            item:[]
        };
    }
//function to perform updating the list by concatinating user entry 
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
                <ul  >
                    {this.state.item.map(item=><TodoItem key={item.name} name={item.name}/>)}  
                    </ul>
                    <TodoInput onAddItem ={this.handleAddItem}/>
                </div>
                
        );
    }
}
export default TodoList;




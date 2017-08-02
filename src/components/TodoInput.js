import React from 'react';

class TodoInput extends React.Component{
  
    //utilizes arrow functions to call an event that recieves the input value 
    //returns the input value to the parent component updating the state
        handleSubmit=(event)=>{
            event.preventDefault();
            this.props.onAddItem(this.refs.input.value);
            this.refs.input.value=""; //value is set to empty initially to avoid last use entry to be the updated input value
    }
    render()
    {
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <input type="text" ref="input"/>
                    <button type="submit"> Add </button>
                    </form>
                </div>
                
        )
    }
}
export default TodoInput;
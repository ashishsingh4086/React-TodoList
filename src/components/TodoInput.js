import React from 'react';

class TodoInput extends React.Component{
  
    handleSubmit=(event)=>{
            event.preventDefault();
            this.props.onAddItem(this.refs.input.value);
            this.refs.input.value="";
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
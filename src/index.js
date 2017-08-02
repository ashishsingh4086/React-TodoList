/*
* React  
**/

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';

class App extends React.Component {
    render()
    {
        return(
            //returns the parent component to the DOM 
            <TodoList /> 
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


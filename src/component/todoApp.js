import React from 'react';
import {Component} from 'react';

let todoCounter = 0;

class TodoApp extends Component {

    render() {
        const {
            addTodoEvent,
            todos
        } = this.props;
        return (
            <div>
                <input 
                    type="text"
                    ref ={ node => {
                        this.inputText=node
                    }}/>
                <button onClick={() => {
                        addTodoEvent({
                            text : this.inputText.value,
                            id : todoCounter
                        });
                        todoCounter++;
                    }} >
                    Add Todo
                </button>
                <ul>
                {todos.map( (todo) => {
                    return (
                        <li key={todo.id}
                            > 
                            {todo.text} 
                        </li>
                    )
                })}
                </ul>
            </div>
        );
    };
}

export default TodoApp;
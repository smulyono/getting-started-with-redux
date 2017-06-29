import React from 'react';
import {Component} from 'react';

let todoCounter = 0;

class TodoApp extends Component {
    render() {
        const {
            addTodoEvent,
            toggleTodoEvent,
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
                        this.inputText.focus();
                        this.inputText.value='';
                    }} >
                    Add Todo
                </button>
                <ul>
                {todos.map( (todo) => {
                    return (
                        <li key={todo.id}
                            onClick={() => {
                                toggleTodoEvent(todo)
                            }}
                            style= {{
                                textDecoration : todo.completed ? "line-through" : "none",
                                fontWeight : todo.completed ? "normal" : "bold",
                                color : todo.completed ? 'red' : 'black',
                                cursor : "pointer",
                            }}
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
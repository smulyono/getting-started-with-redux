import React from 'react';
import {Component} from 'react';
import FilterDisplay from './filterDisplay';

let todoCounter = 0;

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.renderTodoBasedOnVisibility = this.renderTodoBasedOnVisibility.bind(this);
    }

    renderTodoBasedOnVisibility(todos, visibility) {
        console.info('Receiving ', todos, visibility);
        var outputTodo = [];
        todos.map( (todo) => {
            switch (visibility) {
                case "completed" :
                    if (todo.completed) {
                        outputTodo.push(todo);
                    } 
                break;
                case "progress" : 
                    if (!todo.completed) {
                        outputTodo.push(todo);
                    }
                break;
                default : 
                    outputTodo.push(todo);
                break;
            }
            return todo;
        });
        return outputTodo;
    }

    render() {
        const {
            addTodoEvent,
            toggleTodoEvent,
            toggleVisibility,
            todos,
            visibility
        } = this.props;
        // determine todos to display
        const drawTodos = this.renderTodoBasedOnVisibility(todos, visibility);
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
                {drawTodos.map( (todo) => {
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
                <hr />
                <FilterDisplay 
                    display="All"
                    filtertype="all"
                    clickEventCallback={toggleVisibility}
                    visibility={visibility}
                />
                <FilterDisplay 
                    display="Completed"
                    filtertype="completed"
                    clickEventCallback={toggleVisibility}
                    visibility={visibility}
                />
                <FilterDisplay 
                    display="In Progress"
                    filtertype="progress"
                    clickEventCallback={toggleVisibility}
                    visibility={visibility}
                />
            </div>
        );
    };
}

export default TodoApp;
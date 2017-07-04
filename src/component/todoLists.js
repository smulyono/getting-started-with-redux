import React from 'react';
import PropTypes from 'prop-types';


const TodoItem = ({
    todo
}, {
    store
}) => (
    <li style= {{
            cursor : "pointer",
        }}
        > 
        <span 
        onClick={() => {
            store.dispatch({
                ...todo,
                type : "TOGGLE_TODO"
            })
        }}                            
        style={{
            textDecoration : todo.completed ? "line-through" : "none",
            fontWeight : todo.completed ? "normal" : "bold",
            color : todo.completed ? 'red' : 'black',
        }}>
        {todo.text} 
        </span>
        {todo.completed ? 
            <button 
                style={{
                    borderStyle:"none",
                    backgroundColor:"transparent",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontWeight:"bold",
                    color: "red",
                    outline:"none"
                }}
                onClick={ () => {
                    store.dispatch( {
                        id : todo.id,
                        text : todo.text,
                        type : "REMOVE_TODO"
                    });
                }}
            >
                Remove
            </button> 
            : 
            ""  
        }
    </li>    
)
TodoItem.contextTypes = {
    store : PropTypes.object
}

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.renderTodoBasedOnVisibility = this.renderTodoBasedOnVisibility.bind(this);
    }

    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    renderTodoBasedOnVisibility(todos, visibility) {
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
        const {store} = this.context;    
        const {todos, visibility}  = store.getState();  
        // determine todos to display
        const drawTodos = this.renderTodoBasedOnVisibility(todos, visibility);
         
        return (
            <ul>
            {drawTodos.map((todo) => {
                return (
                    <TodoItem 
                        key={todo.id}
                        todo={todo}
                    />
                )
            })}
            </ul>
        )
    }
}

TodoList.contextTypes = {
    store : PropTypes.object
}

export default TodoList;
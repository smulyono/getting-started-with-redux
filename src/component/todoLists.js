import React from 'react';
import { connect } from 'react-redux';

const renderTodoBasedOnVisibility= (todos, visibility) => {
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


const TodoItem = ({
    todos,
    toggleTodoClick, 
    removeTodoClick
}) => (
    <ul>
        {todos.map((todo) => {
            return (
                <li key={todo.id}
                    style= {{
                        cursor : "pointer",
                    }}
                    > 
                    <span 
                    onClick={() => {
                        toggleTodoClick(todo)
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
                                removeTodoClick(todo);
                            }}
                        >
                            Remove
                        </button> 
                        : 
                        ""  
                    }
                </li>  
            )
        })}
    </ul>  
)

const mapStateIntoProps = (state) => {
    return {
        todos : renderTodoBasedOnVisibility(state.todos, state.visibility)
    }
};
const mapDispatchIntoProps = (dispatch) => {
    return {
        toggleTodoClick : (todo) => {
            dispatch({
                ...todo,
                type : "TOGGLE_TODO"
            })
        },
        removeTodoClick : (todo) => {
            dispatch( {
                id : todo.id,
                text : todo.text,
                type : "REMOVE_TODO"
            });
        }
    }
};

// Use react-redux connect to remove all scaffold to subscribe/unsubscribe context
const TodoList = connect(mapStateIntoProps, mapDispatchIntoProps)(TodoItem);

// class TodoList extends React.Component {
//     constructor(props){
//         super(props);
//         this.renderTodoBasedOnVisibility = this.renderTodoBasedOnVisibility.bind(this);
//     }

//     componentDidMount() {
//         const { store } = this.context;
//         this.unsubscribe = store.subscribe(() => this.forceUpdate());
//     }
//     componentWillUnmount() {
//         this.unsubscribe();
//     }

    
//     render() {
//         const {store} = this.context;    
//         const {todos, visibility}  = store.getState();  
//         // determine todos to display
//         const drawTodos = this.renderTodoBasedOnVisibility(todos, visibility);
         
//         return (
//             <TodoItem 
//                 todos = {drawT}
//             />
//         )
//     }
// }

// TodoList.contextTypes = {
//     store : PropTypes.object
// }

export default TodoList;
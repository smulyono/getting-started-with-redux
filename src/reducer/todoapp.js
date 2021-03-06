import { combineReducers } from 'redux';
const todo = (state={}, action) => {
    switch (action.type) {
        case 'ADD_TODO' : 
            return {
                    id : action.id,
                    text: action.text,
                    completed : false
            }
        case 'TOGGLE_TODO' : 
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed : !state.completed
            }
        default :
            return state;
    }
}

// reducer to manipulate the todo
const todos = (state=[],action) => {
    if (action.type && action.text) {
        switch (action.type) {
            case 'ADD_TODO' : 
                return [
                    ...state,
                    todo(undefined, action)
                ]
            case 'TOGGLE_TODO' : 
                return state.map((item) => {
                    return todo(item, action)
                });
            case 'REMOVE_TODO' : 
                let updatedTodo = [];
                state.map(item => {
                    if (item.id !== action.id) {
                        updatedTodo.push(item);
                    }
                    return item;
                });
                return updatedTodo;
            default : 
                return state;
        }
    } else {
        return state;
    }
};

// Reducer to change visibility mode
const visibility = (state='all', action) => {
    switch (action.type) {
        case 'SET_FILTER' : 
            return action.filter;
        default : 
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibility
});


export default todoApp;
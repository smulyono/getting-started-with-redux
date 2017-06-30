import React from 'react';
import ReactDOM from 'react-dom';
import todoAppReducer from './reducer/todoapp';
import {createStore} from 'redux';
import TodoApp from './component/todoApp';

const store = createStore(todoAppReducer);

const render = () => {
    ReactDOM.render(
        <TodoApp 
            addTodoEvent={(input) => {
                store.dispatch({
                    ...input,
                    type : "ADD_TODO"
                })
            }}
            toggleTodoEvent={(input) => {
                store.dispatch({
                    ...input,
                    type : "TOGGLE_TODO"
                })
            }}
            removeTodoEvent={(input) => {
                store.dispatch( {
                    ...input,
                    type : "REMOVE_TODO"
                })
            }}
            toggleVisibility={(input) => {
                console.info("visibility");
                store.dispatch({
                    ...input,
                    type : "SET_FILTER"
                })
            }}
            {...store.getState()}
            />
        ,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);


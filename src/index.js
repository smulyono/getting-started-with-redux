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
            {...store.getState()}
            />
        ,
        document.getElementById('root')
    );
}

render();
store.subscribe(render);


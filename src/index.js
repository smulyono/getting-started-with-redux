import React from 'react';
import ReactDOM from 'react-dom';
import todoAppReducer from './reducer/todoapp';
import {createStore} from 'redux';
import TodoApp from './component/todoApp';
import Provider from './component/Provider';

const render = () => {
    ReactDOM.render(
        <Provider 
            store={ createStore(todoAppReducer)}
            >
            <TodoApp />
        </Provider>,
        document.getElementById('root')
    );
}

render();


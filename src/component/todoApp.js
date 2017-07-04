import React from 'react';
import {Component} from 'react';
import Header from './Header';
import TodoList from './todoLists';
import Footer from './Footer';

class TodoApp extends Component {
    render() {
        return (
            <div>
                <Header
                    label="Add Todo"
                     />
                <TodoList />
                <Footer />
            </div>
        );
    };
}

export default TodoApp;
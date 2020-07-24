import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './styles.css';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }];

};

const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        console.log(todoId);
        
        const action = {
            type: 'DELETE',
            payload: todoId,
        };

        dispatch(action);

    };

    const handleToggle = (todoId) => {

        const action = {
            type: 'TOGGLE',
            payload: todoId,
        };
        dispatch(action);

    };

    const handleAddTodo = (newTodo) => {

        const action = {
            type: 'ADD',
            payload: newTodo,
        };

        dispatch(action);

    };

    return (
        <div className="container">
            <h1>TodoApp ({todos.length}) </h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                    handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoApp;

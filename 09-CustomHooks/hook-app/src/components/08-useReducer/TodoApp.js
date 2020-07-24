import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import useForm from './../../hooks/useForm';
import { TodoList } from './TodoList';
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
    
    const [{description}, handleInputChange, reset] = useForm({
        description: '',
    });

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

    const handleSubmit = (e) => {

        e.preventDefault();

        if(description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: 'ADD',
            payload: newTodo,
        };

        dispatch(action);
        reset();

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
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <form
                        onSubmit={ handleSubmit }
                    >
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary mt-2 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;

import React from 'react';
import '@testing-library/jest-dom';
import { shallow, mount } from 'enzyme';
import TodoApp from '../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoApp />', () => {

    Storage.prototype.setItem = jest.fn(() => {});

    const wrapper = shallow( <TodoApp /> );

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de agregar un TODO', () => {
        
        const wrapper = mount( <TodoApp /> );

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);

    });

    test('Debe de eliminar un TODO', () => {
       
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');

    });
    
});
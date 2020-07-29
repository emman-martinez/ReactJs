import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo = { handleAddTodo }
        />
    );

    test('Debe de mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('NO debe de llamar el handleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
        
    });

    test('Debe de llamar la función handleAddTodo', () => {

        const value = 'Aprender React';
        const input = wrapper.find('input');
        input.simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); // { }
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false,
        });
        expect(input.prop('value')).toBe('');
    });
    
});

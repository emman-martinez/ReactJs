import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { MemoryRouter, Router } from 'react-router-dom';
import { types } from '../../../types/types';
import '@testing-library/jest-dom';

describe('Pruebas en <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Casandra'
        }
    };

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history={ historyMock }>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });
   
    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Casandra');

    });

    test('Debe de llamar el logout y usar el history', () => {
        
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout,
            payload: ''
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');

    });
    
    
});

import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount( 
            <UserContext.Provider value={{
                setUser
            }}>
                <LoginScreen /> 
            </UserContext.Provider>
        );

    test('Debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('Debe de ejecutarse el setUser con el argumento esperado', () => {

        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'Emmanuel',
        });
        
    });
    
    
});
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import RealExampleRef from '../../../components/04-UseRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {

    const wrapper = shallow(<RealExampleRef />);

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);

    });

    test('Debe de mostrar el componente <MultipleCustomHooks />', () => {

        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
        
    });
    

});
import React from 'react';
import '@testing-library/jest-dom';
import GifExpertApp from '../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    }); 

});
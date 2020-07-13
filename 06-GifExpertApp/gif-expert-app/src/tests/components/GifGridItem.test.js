import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    let wrapper = shallow( < GifGridItem / > );

    beforeEach(() => {
        wrapper = shallow( < GifGridItem / > );
    });

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

});
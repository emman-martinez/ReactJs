import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';

    let wrapper = shallow( <GifGridItem title={title} url={url}/> );

    beforeEach(() => {
        wrapper = shallow( <GifGridItem title={title} url={url}/> );
    });

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

}); 
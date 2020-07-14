import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('Debe de mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de tener un párrafo con el title', () => {

        const h2 = wrapper.find('h2');
        expect( h2.text().trim() ).toBe(title);  

    });

    test('Deber de tener la imagen igual al url y alt de las props', () => {

        const img = wrapper.find('img');
        // console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe de tener animate_fadeIn', () => {

        const div = wrapper.find('div');
        // console.log(div.prop('className').includes('animate__fadeIn') ? 'animate__fadeIn' : '');
        const className = div.prop('className').includes('animate__fadeIn');
        expect(className).toBe(true); 

    });

}); 
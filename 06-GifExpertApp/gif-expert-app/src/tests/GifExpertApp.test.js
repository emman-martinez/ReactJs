import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifExpertApp from './../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball', 'Black Clover'];
        const wrapper = shallow( <GifExpertApp defaultCategories={categories}/> );

        expect(wrapper).toMatchSnapshot();
        const GifGrid = wrapper.find('GifGrid');
        expect(GifGrid.length).toBe(categories.length);
    });

});
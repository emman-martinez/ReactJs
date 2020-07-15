import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from './../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Puebas en <GifGrid />', () => {

    const category = 'Goku';

    test('Debe de mostrar el componente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        const wrapper = shallow( <GifGrid category={category}/> );
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquiercosa/cosa.jpg',
                title: 'Cualquier cosa',
            },
            {
                id: '123',
                url: 'https://localhost/cualquiercosa/cosa.jpg',
                title: 'Cualquier cosa',
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow( <GifGrid category={category}/> );
        const ChaseComponent = wrapper.find('Chase').exists();
        const GifGridItemComponent = wrapper.find('GifGridItem');

        expect(wrapper).toMatchSnapshot();
        expect(ChaseComponent).toBe(false);
        expect(GifGridItemComponent.length).toBe(gifs.length); 

    });

});
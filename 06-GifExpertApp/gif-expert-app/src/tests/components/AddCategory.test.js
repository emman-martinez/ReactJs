import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from './../../components/AddCategory';

describe('Puebas en <AddCategory />', () => {

    const setCategories = () => {};

    test('Debe de mostrarse correctamente', () => {
        const wrapper = shallow( <AddCategory setCategories={setCategories}/> );

        expect(wrapper).toMatchSnapshot();
    });

});
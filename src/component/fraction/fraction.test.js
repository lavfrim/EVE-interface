import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Fraction from './index';

const info = {
    name: 'name',
    description: 'description',
    faction_id: 500001,
    corporation_id:1000035,
    solar_system_id: 30000145,
};

describe('Fraction should render correctly', () => {
    it('with moch info, isOpen=false', () => {
        const wrapper = mount(
            <Fraction info={info} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with moch info, isOpen=true', () => {
        const wrapper = mount(
            <Fraction info={info} />
        );
        wrapper.setState({ isOpen: true });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    
});

describe('Fraction should have correctly reaction on click', () => {
    it('not clicked', () => {
        const wrapper = mount(
            <Fraction info={info} />
        );
        expect(wrapper.state().isOpen).toBe(false);
    });

    it('clicked', () => {
        const wrapper = mount(
            <Fraction info={info} />
        );
        wrapper.find('.fraction-card').simulate('click');
        expect(wrapper.state().isOpen).toBe(true);
    });
});


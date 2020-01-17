import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import PopupLink from './index';

const corporation = {
    name: 'corp name',
}
describe('PopupLink should render correctly', () => {
    it('with isOpen = false', () => {
        const wrapper = mount(
            <PopupLink corporation={corporation} />
        );
        wrapper.setState({  isOpen: false, stage: 0 });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with stage = basic', () => {
        const wrapper = mount(
            <PopupLink corporation={corporation} />
        );
        wrapper.setState({  isOpen: true, stage: 0 });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with stage = clicked', () => {
        const wrapper = mount(
            <PopupLink corporation={corporation} />
        );
        wrapper.setState({  isOpen: true, stage: 1 });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with stage = returned', () => {
        const wrapper = mount(
            <PopupLink corporation={corporation} />
        );
        wrapper.setState({ isOpen: true, stage: -1 });
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});

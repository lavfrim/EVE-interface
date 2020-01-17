import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import PopupCard from './index';

const corporation = {
    name: 'corp name',
}

describe('PopupCard should render correctly', () => {
    it('with stage = basic', () => {
        const wrapper = mount(
            <PopupCard stage={0} corporation={corporation} />
        );
        wrapper.setState({ ceoInfo: {
            name: 'ceo Name',
        } });
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with stage = clicked', () => {
        const wrapper = mount(
            <PopupCard stage={1} corporation={corporation} />
        );
        wrapper.setState({ ceoInfo: {
            name: 'ceo Name',
        } });
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import PopUp from './index';

function Component() {
    return (
        <p>
            {'smth'}
        </p>
    );
}

describe('PopUp should render correctly', () => {
    it('with stage = basic', () => {
        const wrapper = mount(
            <PopUp stage={0}>
                <Component />
            </PopUp>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with stage = clicked', () => {
        const wrapper = mount(
            <PopUp stage={1}>
                <Component />
            </PopUp>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('with stage = returned', () => {
        const wrapper = mount(
            <PopUp stage={-1}>
                <Component />
            </PopUp>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


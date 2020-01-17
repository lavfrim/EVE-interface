import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Loading from './index';

describe('Loading', () => {
    it('should render correctly', () => {
        const wrapper = mount(
            <Loading />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


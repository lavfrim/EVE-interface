import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import CEOCard from './index';

const ceoInfo = {
    name: 'name',
    birthday: "2003-03-27T13:27:00Z",
    race_id: 2,
};


describe('CEOCard should render correctly', () => {
    it('with moch ceoInfo', () => {
        const wrapper = mount(
            <CEOCard ceoInfo={ceoInfo} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


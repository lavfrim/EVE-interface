import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import CorporationCard from './index';

const corporation = {
    name: 'corp name',
    member_count: 143,
    description: 'corp description',
};

const ceoInfo = {
    name: 'ceo name',
};

describe('CorporationCard should render correctly', () => {
    it('with moch corporation ceoInfo', () => {
        const wrapper = mount(
            <CorporationCard corporation={corporation} ceoInfo={ceoInfo} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';

import Header from './index';

const mockStore = configureMockStore();
const storeWithMessage = mockStore({
    errorMessage: 'error message',
});
const storeWithoutMessage = mockStore({
    errorMessage: '',
});

describe('header should render correctly', () => {
    it('with error mesage', () => {
        const wrapper = mount(
            <Header store={storeWithMessage} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('without error mesage', () => {
        const wrapper = mount(
            <Header store={storeWithoutMessage} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


// it('CHANGE_TEST', () => {
//     expect(1).toEqual(1);
// })

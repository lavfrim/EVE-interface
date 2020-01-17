import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';

import Main from './index';

function Component() {
    return (
        <p>
            {'smth'}
        </p>
    );
}

const ArrayOfComponent = [
    <Component key={1}/>,
    <Component key={2} />,
    <Component key={3}/>
];

const mockStore = configureMockStore();
const store = mockStore({
    fractionsComponentArray: ArrayOfComponent,
});

describe('Main should render correctly', () => {
    it('with moch store', () => {
        const wrapper = mount(
            <Main store={store} />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


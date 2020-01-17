import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Carousel from './index';

function Component() {
    return (
        <p>
            {'smth'}
        </p>
    );
}

const fractionsComponentArray = [
    <Component key={1}/>,
    <Component key={2} />,
    <Component key={3}/>
];


describe('Carousel should render correctly', () => {
    it('with mock array of components', () => {
        const wrapper = mount(
            <Carousel
                fractionsComponentArray={fractionsComponentArray}
                amountCards={3}
            />
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});


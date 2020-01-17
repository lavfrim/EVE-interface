import reducer, { setFractionsArray, setErrorMessage } from './index';

const state = {
    fractionsComponentArray: [],
    errorMessage: '',
    test: 'test',
};

const array = [1, 2, 3, 4, 5];
const message = 'error';

describe('reducer', () => {
    it('set fractions array', () => {
        const action = setFractionsArray(array);

        const result = reducer(state, action);
        expect(result.fractionsComponentArray).toEqual(array);
    });

    it('set error message', () => {
        const action = setErrorMessage(message);

        const result = reducer(state, action);
        expect(result.errorMessage).toBe(message);
    });

    it('set error message', () => {
        const action = { type: 'NOTHING', payload: 'smth' };

        const result = reducer(state, action);
        expect(result.test).toBe(state.test);
    });
});


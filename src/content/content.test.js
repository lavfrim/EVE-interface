import getURL, { url } from './index';

const withoutID = `${url.sourseURL}${url.universe}/${url.factions}/`;
const withID = `${url.sourseURL}${url.characters}/`;

describe('getURL', () => {
    it('without id', () => {
        const result = getURL('universe/factions');
        expect(result).toBe(withoutID);
    });

    it('with id', () => {
        const id = 1215225
        const result = getURL('characters', id);
        expect(result).toBe(`${withID}${id}`);
    });
});


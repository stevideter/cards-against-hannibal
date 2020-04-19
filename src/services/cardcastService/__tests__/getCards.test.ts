jest.mock('isomorphic-unfetch');

import fetch from 'isomorphic-unfetch';
import mockConsole from 'jest-mock-console';
import { getCards } from '../getCards';

const mockFetch = fetch as jest.Mock;

describe('getCards', () => {
    beforeEach(() => {
        mockConsole();
    });
    it('gets the cardcast deck', async () => {
        const setId = 'abc';
        const set = {
            calls: [
                {
                    text: ['a', 'b', 'c'],
                    id: 'a',
                },
            ],
            responses: [
                {
                    text: ['a', 'b', 'c'],
                    id: 'a',
                },
            ],
        };
        const response = {
            json: jest.fn().mockResolvedValue(set),
        };
        mockFetch.mockResolvedValue(response);
        const result = await getCards(setId);
        expect(result).toBeDefined();
    });
    it('handles upstream error', async () => {
        const setId = 'abc';
        mockFetch.mockRejectedValue(new Error('oops'));
        await expect(getCards(setId)).rejects.toEqual(
            Error('unable to get cards')
        );
    });
});

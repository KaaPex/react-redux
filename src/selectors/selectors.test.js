/**
 * Created on 03.08.16.
 * selectors.tes of react-redux project
 */
import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Authors Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in dropdown', () => {
      const authors = [
          {
            id: 'cory-house',
            firstName: 'Cory',
            lastName: 'House'
          },
          {
            id: 'scott-allen',
            firstName: 'Scott',
            lastName: 'Allen'
          }
        ];

      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);

    });
  });
});

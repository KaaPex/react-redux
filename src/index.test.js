import expect from 'expect';
import reducers from './reducers';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).toEqual(true);
  });
});

// describe('reducers', () => {
//   it('should handle actions', () => {
//     expect(reducers({"courses":[]}, {"type":"CREATE_COURSE","course":{"title":"123"}})).toEqual({"courses":[{title: "123"}]});
//   });
// });

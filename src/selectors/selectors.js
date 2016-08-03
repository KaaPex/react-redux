/**
 * Created on 03.08.16.
 * selectors of react-redux project
 */

export function authorsFormattedForDropdown (authors) {
  return authors  .map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

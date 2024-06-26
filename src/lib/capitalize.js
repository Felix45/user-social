/**
 *
 * @param {*} str A string to capitalize
 * @returns A capitalized string
 */
export const capitalize = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;

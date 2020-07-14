const convertJsonToDot = require('./convertJsonToDot');

const convertNestedQuery = (query, target = {}, source = {}) => {
  let result;

  Object.keys(query).forEach((key) => {
    if (key !== null && key === 'location') {
      target[key] = { ...query[key] };
    } else {
      source[key] = query[key];
    }
    result = Object.assign(convertJsonToDot(target), source);
  });
  return result;
};

module.exports = convertNestedQuery;

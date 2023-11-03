const { validate, increment, invalidate } = require('./utils'),
  { change } = require('./change'),
  { forgot } = require('./forgot'),
  { reset } = require('./reset');

module.exports = {
  invalidate,
  increment,
  validate,
  change,
  forgot,
  reset,
};

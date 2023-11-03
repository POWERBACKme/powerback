const { getBill, getPol } = require('./get'),
  { fetchUpdatedPols } = require('./put'),
  { } = require('./delete'),
  { } = require('./post');

module.exports = {
  fetchUpdatedPols,
  getBill,
  getPol,
};

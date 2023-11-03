const { confirm, generate } = require('./hash'),
  { activate } = require('./activate'),
  { transfer } = require('./transfer'),
  { accrue } = require('./accrue'),
  { attest } = require('./attest'),
  { rattle } = require('./rattle'),
  { verify } = require('./verify'),
  { prune } = require('./prune'),
  { lock } = require('./lock'),
  { open } = require('./open');

module.exports = {
  activate,
  generate,
  transfer,
  confirm,
  accrue,
  attest,
  rattle,
  verify,
  prune,
  lock,
  open,
};

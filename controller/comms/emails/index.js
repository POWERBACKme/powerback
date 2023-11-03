const {
    Locked,
    Quitter,
    Promoted,
    SignedUp,
    SigningUp,
  } = require('./account'),
  { Image } = require('./error'),
  { New, Update } = require('./info'),
  { Reset, Change, Forgot } = require('./password');

module.exports = {
  emails: {
    SigningUp,
    Promoted,
    SignedUp,
    Quitter,
    Change,
    Forgot,
    Locked,
    Update,
    Image,
    Reset,
    New,
  },
};

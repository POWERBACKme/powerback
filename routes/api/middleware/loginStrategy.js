const Tokenizer = require('../../../auth/tokenizer');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../../../models/User');

const loginStrategy = new LocalStrategy((username, password, done) => {
  db.findOne({ username: username }, async (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, {
        message: 'Incorrect username or password.',
      });
    }
    if (!user.comparePassword(password)) {
      return done(null, false, {
        message: 'Incorrect username or password.',
      });
    }
    const accessToken = await Tokenizer.createAccessToken.call(Tokenizer, {
      user,
    }); // create access
    const refreshToken = await Tokenizer.createRefreshToken.call(
      Tokenizer,
      {
        user,
      }
    ); // create refresh
    Tokenizer.saveRefreshToken(refreshToken);
    return done(null, {
      ...user,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  });
});

module.exports = loginStrategy;

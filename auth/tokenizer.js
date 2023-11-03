const { AuthBase, NotAuthorized, UserNotFound } = require('./authbase');
const REFRESH_CACHE = new Set();

class Tokenizer extends AuthBase {
  saveRefreshToken(token) {
    REFRESH_CACHE.add(token);
  }
  async findAndRemoveRefreshToken(refreshToken) {
    const exists = REFRESH_CACHE.has(refreshToken);
    if (!exists) {
      return null;
    }

    REFRESH_CACHE.delete(refreshToken);
    return true;
  }
  async authErrorHandler(err, req, res, next) {
    if (err instanceof UserNotFound) {
      return res
        .status(404)
        .json(new Error('Username/Password not found.'));
    }
    return res
      .status(400)
      .json(new Error('Username/Password fields missing.'));
  }

  async guardErrorHandler(err, req, res, next) {
    if (err instanceof NotAuthorized) {
      return res.status(401).json(new Error('Not Authorized.'));
    }
  }
}

module.exports = new Tokenizer();

const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');
const { User } = require('../models');
const { promisify } = require('util');
const { contact, prune } = require('../controller/users');

class AuthBase {
  /**
   *  create a new instance of auth
   * @param {Object}
   * @param {number}.accessTokenExp ttl in seconds
   * @param {number}.refreshTokenExp ttl in days
   * @param {string}.secret secret to use for encoding
   * @param {string}.audience audience claim
   * @param {string}.issuer issuer claim
   * @param {string}.jwtid jwtid claim
   * @param {string}.subject subject claim
   */
  constructor({
    accessTokenExp = 7200,
    refreshTokenExp = 180,
    secret = nanoid(),
    audience = nanoid(),
    issuer = nanoid(),
    jwtid = nanoid(),
    subject = nanoid(),
  } = {}) {
    this.accessTokenExp = accessTokenExp;
    this.refreshTokenExp = refreshTokenExp;
    this.secret = secret;
    this.audience = audience;
    this.issuer = issuer;
    this.jwtid = jwtid;
    this.subject = subject;
  }

  authenticate() {
    return async (req, res, next) => {
      const { password, email } = req.body;
      if (!password || !email) {
        return this.authErrorHandler(new BadRequest(), req, res, next);
      }

      const user = await this.findUser(email, password);
      if (!user) {
        return this.authErrorHandler(new UserNotFound(), req, res, next);
      }

      const accessToken = await this.createAccessToken({ user }); // create access
      const refreshToken = await this.createRefreshToken({ user }); // create refresh

      await this.saveRefreshToken(refreshToken);

      const response = {
        user,
        access_token: accessToken,
        refresh_token: refreshToken,
      };

      return res.json(response);
    };
  }

  refresh() {
    return async (req, res, next) => {
      const authenticated = await this.authorizeRequest(req, res, next);
      if (!Array.isArray(authenticated) || authenticated.length !== 2) {
        return;
      }
      const [jwt, token] = authenticated;
      const valid = await this.findAndRemoveRefreshToken(jwt);
      let latestUser;
      if (!token) {
        latestUser = await contact(req.user._doc._id, User);
      }
      const {
        payload: { isRefresh },
      } = token;
      if (!req.user && !token.payload) {
        return;
      }
      if (!token.payload.user) {
        latestUser = await contact(token.payload.latestUser._id, User);
      } else latestUser = await contact(token.payload.user._id, User);

      if (!valid || !latestUser || !isRefresh) {
        return this.guardErrorHandler(new NotAuthorized(), req, res, next);
      }

      const accessToken = await this.createAccessToken({ latestUser }); // create access
      const refreshToken = await this.createRefreshToken({ latestUser }); // create refresh

      this.saveRefreshToken(refreshToken);

      const response = {
        user: prune(latestUser),
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
      return res.json(response);
    };
  }
  async authorizeRequest(req, res, next) {
    const [scheme, jwt] = String(req.header('Authorization')).split(' ');
    if (scheme !== 'Bearer' || !jwt) {
      return this.guardErrorHandler(new NotAuthorized(), req, res, next);
    }
    let token;
    try {
      token = await this.verify(jwt);
    } catch (err) {
      return this.guardErrorHandler(new NotAuthorized(), req, res, next);
    }
    return [jwt, token];
  }

  guard() {
    return async (req, res, next) => {
      try {
        const [, token] = await this.authorizeRequest(req, res, next);
        req.jwt = token;
      } catch (e) {
        return;
      }
      return next();
    };
  }

  createRefreshToken(payload = {}) {
    return promisify(jwt.sign)(
      { isRefresh: true, ...payload },
      this.secret,
      {
        expiresIn: this.refreshTokenExp + 'd',
        issuer: this.issuer,
        audience: this.audience,
        jwtid: this.jwtid,
        subject: this.subject,
      }
    );
  }

  createAccessToken(payload = {}) {
    return promisify(jwt.sign)(payload, this.secret, {
      expiresIn: this.accessTokenExp,
      issuer: this.issuer,
      audience: this.audience,
      jwtid: this.jwtid,
      subject: this.subject,
    });
  }

  verify(token) {
    return promisify(jwt.verify)(token, this.secret, {
      audience: this.audience,
      issuer: this.issuer,
      subject: this.subject,
      complete: true,
    });
  }

  async findUser(email, password) {
    console.warn('Not Implemented!');
  }

  async saveRefreshToken(refreshToken) {
    console.warn('Not Implemented!');
  }

  async findAndRemoveRefreshToken(refreshToken) {
    console.warn('Not Implemented!');
  }

  authErrorHandler(err, req, res, next) {
    console.warn('Not Implemented!');
  }

  guardErrorHandler(err, req, res, next) {
    console.log('Not Implemented!');
  }
}

class UserNotFound extends Error {}

class BadRequest extends Error {}

class NotAuthorized extends Error {}

module.exports = {
  AuthBase,
  BadRequest,
  UserNotFound,
  NotAuthorized,
};

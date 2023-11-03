const router = require('express').Router(),
  passport = require('./middleware/passport'),
  tokenizer = require('../../auth/tokenizer'),
  Controller = require('../../controller/users'),
  { User, ExUser, Applicant } = require('../../models');

// All routes prefixed with '/api/users'
// refresh token
router.route('/refresh').get(tokenizer.refresh());
router // get a user document
  .route('/get/:userId')
  .get(tokenizer.guard(), (req, res) => Controller.find(req, res, User));
router // get a user's front-end data
  .route('/data/:userId')
  .get(tokenizer.guard(), async (req, res) => {
    res.json(await Controller.contact(req.params.userId, User));
  });
router // confirm user's permission to start donating (eligibility)
  .route('/privilege/:userId')
  .get(tokenizer.guard(), async (req, res) =>
    res.json(await Controller.certify(req.params.userId, User))
  );
router // give user permission to start donating (eligibility)
  .route('/privilege/:userId')
  .patch(tokenizer.guard(), (req, res) =>
    res.json(Controller.empower(req.params.userId, User))
  );
router // check user permission to donate full amount (has filled out profile)
  .route('/promote/:userId')
  .get(tokenizer.guard(), async (req, res) =>
    res.json(await Controller.deem(req.params.userId, User))
  );
router // give user permission to donate full amount (has filled out profile)
  .route('/promote/:userId')
  .patch(tokenizer.guard(), (req, res) =>
    res.json(Controller.promote(req.params.userId, User))
  );
router // update account
  .route('/update/:userId')
  .put(tokenizer.guard(), (req, res) => Controller.update(req, res, User));

// create new user account
router.route('/').post(async (req, res) => {
  const fail = {
    isSignupHashConfirmed: false,
    isLinkExpired: false,
  };
  let anyUser = await Controller.verify(
    req.body.username,
    'username',
    User
  );
  // if (!!anyUser)
  //   anysuer = await Controller.verify(
  //     req.body.username,
  //     'username',
  //     Applicant
  //   );
  if (!!anyUser)
    anysuer = await Controller.verify(
      req.body.username,
      'username',
      ExUser
    );
  if (!!anyUser) {
    res.json(fail); // send warning email to existing User?
  } else {
    const newAccount = await Controller.create(
      req.body,
      Applicant,
      ExUser
    );
    if (newAccount === 'undefined') {
      res.json(fail);
    } else {
      res.json(newAccount);
    }
  }
});
router
  .route('/activate/:hash')
  .get(async (req, res) =>
    res.json(
      await Controller.activate(req.params.hash, Applicant, User, ExUser)
    )
  );

router // give user permission to donate full amount (if filled out account profile)
  .route('/promote/:userId')
  .patch(tokenizer.guard(), (req, res) =>
    res.json(Controller.promote(req.params.userId, User))
  );

// change password
router.route('/change/:userId').put(tokenizer.guard(), (req, res) => {
  res.json(Controller.change(req, res, User));
});

// reset password
router.route('/forgot').put(async (req, res) => {
  res.json(await Controller.forgot(req.body.email, User));
  // what about accounts not yet activated?
});
router.route('/reset/:hash').get(async (req, res) => {
  if (await Controller.rattle('resetPasswordHash', req.params.hash, User))
    res.json({
      isHashConfirmed: false,
      isLinkExpired: false,
    });
  else res.json(await Controller.confirm(req.params.hash, User));
});
router.route('/reset').put(async (req, res) => {
  const args = {
    ...req.body,
    model: User,
    emailTemplate: 'Reset',
  };
  const validation = await Controller.validate(args);
  if (typeof validation === 'number') {
    if (validation < 3) {
      res.json(validation); // define?
    } else {
      req.logout();
      res.json('This account has been locked.');
    }
  } else if (validation === true) {
    const reset = await Controller.reset(req, res, User);
    if (reset) {
      req.logout();
    } else {
      // return err
    }
  }
});

// delete account
router
  .route('/delete/:userId')
  .delete(tokenizer.guard(), async (req, res) => {
    res.json(await Controller.remove(req.params.userId, User, ExUser));
  });

// login and out
router
  .route('/login')
  .post(passport.authenticate('local-login'), async (req, res) => {
    if (await Controller.rattle('username', req.body.username, User))
      res.sendStatus(401).json();
    else
      res.json({
        id: req.user._doc._id,
        zip: req.user._doc.zip ?? '',
        city: req.user._doc.city ?? '',
        email: req.user._doc.email ?? '', // ?? req.user._doc.username,
        state: req.user._doc.state ?? '',
        username: req.user._doc.username,
        accessToken: req.user.accessToken,
        payment: req.user._doc.payment ?? {
          payment_method: '',
          customer_id: '',
        },
        refreshToken: req.user.refreshToken,
        address: req.user._doc.address ?? '',
        country: req.user._doc.country ?? '',
        credits: req.user._doc.credits ?? {},
        isEmployed: req.user._doc.isEmployed,
        settings: req.user._doc.settings ?? {
          showLoginLogout: true,
          emailReceipts: true,
          showToolTips: true,
          autoTweet: false,
        },
        employer: req.user._doc.employer ?? '',
        lastName: req.user._doc.lastName ?? '',
        passport: req.user._doc.passport ?? '',
        firstName: req.user._doc.firstName ?? '',
        occupation: req.user._doc.occupation ?? '',
        phoneNumber: req.user._doc.phoneNumber ?? '',
        isCompliant: req.user._doc.isCompliant ?? false,
        understands: req.user._doc.understands ?? false,
      });
  });
router.route('/logout').get(tokenizer.guard(), (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  res.json(
    (req.jwt.payload &&
      req.jwt.payload.user &&
      req.jwt.payload.user.settings &&
      req.jwt.payload.user.settings.showLoginLogout) ??
      {}
  );
});

// route for retrieving info of current signed in user and for isAuth component
router.route('/currentuser').get(tokenizer.guard(), (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({
      username: '',
      id: '',
    });
  } else {
    // Otherwise send back the user's email and id
    res.json({
      username: req.user.username,
      id: req.user._id,
    });
  }
});

module.exports = router;

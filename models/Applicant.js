const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcryptjs'),
  SALT_WORK_FACTOR = 10;

const ApplicantSchema = new Schema(
  {
    // login
    username: {
      type: String,
      required: true,
      lowercase: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
    locked: {
      type: Boolean,
      default: false,
      required: true,
    },
    // confirm signup pass
    signupHash: {
      type: String,
    },
    signupHashIssueDate: {
      type: Date,
    },
    signupHashExpires: {
      type: Date,
    },
    // confirm reset pass
    resetPasswordHash: {
      type: String,
    },
    resetPasswordHashIssueDate: {
      type: Date,
    },
    resetPasswordHashExpires: {
      type: Date,
    },
    tryPasswordAttempts: {
      type: Number,
      default: 0,
      required: true,
    },
    lastTimeUpdatedPassword: {
      type: Date,
    },
    // profile
    email: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    passport: {
      type: String,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    country: {
      type: String,
      default: 'United States',
    },
    isEmployed: {
      type: Boolean,
    },
    occupation: {
      type: String,
    },
    employer: {
      type: String,
    },
    isCompliant: {
      type: Boolean,
      default: false,
    },
    understands: {
      // "understands" eligibility requirements
      type: Boolean,
      default: false,
    },
    // ** stripe
    payment: {
      customer_id: {
        type: String,
      },
      payment_method: {
        type: String,
      },
      type: Object,
    },
    // settings
    settings: {
      emailReceipts: {
        type: Boolean,
        default: true,
      },
      autoTweet: {
        type: Boolean,
        default: false,
      },
      showToolTips: {
        type: Boolean,
        default: true,
      },
      showLoginLogout: {
        type: Boolean,
        default: true,
      },
      type: Object,
    },
    // meta
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

ApplicantSchema.pre('save', function (next) {
  const applicant = this;

  // only hash the password if it has been modified (or is new)
  if (!applicant.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return next(err);
    }

    // hash the password using our new salt
    bcrypt.hash(applicant.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      applicant.password = hash;
      next();
    });
  });
});

const Applicant = mongoose.model('Applicant', ApplicantSchema);

module.exports = Applicant;

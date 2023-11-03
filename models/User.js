const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  bcrypt = require('bcryptjs');

const UserSchema = new Schema(
  {
    // ** ACCOUNT
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
    // ** PROFILE
    email: {
      type: String,
      default: '',
    },
    firstName: {
      type: String,
      default: '',
    },
    lastName: {
      type: String,
      default: '',
    },
    phoneNumber: {
      type: String,
      default: '',
    },
    passport: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
    zip: {
      type: String,
      default: '',
    },
    country: {
      type: String,
      default: 'United States',
    },
    isEmployed: {
      type: Boolean,
      default: true,
    },
    occupation: {
      type: String,
      default: '',
    },
    employer: {
      type: String,
      default: '',
    },
    // ** STATUS
    isCompliant: {
      // with FEC standards for higher donation limit
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
    // ** meta
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;

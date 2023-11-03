const { ObjectId } = require('mongodb');

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const ExUserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      index: { unique: true },
    },
    exId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: { unique: true },
    },
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
    },
    understands: {
      // "understands" eligibility requirements
      type: Boolean,
      default: false,
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const ExUser = mongoose.model('ExUser', ExUserSchema);

module.exports = ExUser;

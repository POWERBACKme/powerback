const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const celebrationSchema = new Schema(
  {
    defunct: {
      type: Boolean,
      default: false,
    },
    fee: {
      type: Number,
      required: true,
    },
    payment_intent: {
      type: String,
    },
    resolved: {
      type: Boolean,
      default: false,
    },
    twitter: { type: String },
    tip: { type: Number, required: true },
    FEC_id: { type: String, required: true },
    pol_id: { type: String, required: true },
    bill_id: { type: String, required: true },
    donation: { type: Number, required: true },
    pol_name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    idempotencyKey: { type: String, required: true },
    donatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Celebration = mongoose.model('Celebration', celebrationSchema);

module.exports = Celebration;

const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const keySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      index: { unique: true },
    },
    value: {
      type: String,
      require: true,
      lowercase: false,
      index: { unique: true },
    },
    hitCounts: {
      type: Array,
      hitCount: [
        {
          hits: { type: Number },
          user: { type: Schema.Types.ObjectId, ref: 'User' },
        },
      ],
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Key = mongoose.model('Key', keySchema);

module.exports = Key;

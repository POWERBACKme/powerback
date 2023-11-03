const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const polSchema = new Schema(
  {
    id: { type: 'object', properties: [Object] },
    member_id: {
      type: 'object',
      properties: [Object],
      index: { unique: true },
    },
    first_name: { type: 'object', properties: [Object] },
    middle_name: { type: 'object', properties: [Object] },
    last_name: { type: 'object', properties: [Object] },
    suffix: { type: 'object', properties: [Object] },
    date_of_birth: { type: 'object', properties: [Object] },
    gender: { type: 'object', properties: [Object] },
    url: { type: 'object', properties: [Object] },
    times_topics_url: { type: 'object', properties: [Object] },
    times_tag: { type: 'object', properties: [Object] },
    govtrack_id: { type: 'object', properties: [Object] },
    cspan_id: { type: 'object', properties: [Object] },
    votesmart_id: { type: 'object', properties: [Object] },
    icpsr_id: { type: 'object', properties: [Object] },
    twitter_account: { type: 'object', properties: [Object] },
    facebook_account: { type: 'object', properties: [Object] },
    youtube_account: { type: 'object', properties: [Object] },
    crp_id: { type: 'object', properties: [Object] },
    google_entity_id: { type: 'object', properties: [Object] },
    rss_url: { type: 'object', properties: [Object] },
    in_office: { type: 'object', properties: [Object] },
    current_party: { type: 'object', properties: [Object] },
    most_recent_vote: { type: 'object', properties: [Object] },
    last_updated: { type: 'object', properties: [Object] },
    roles: { type: 'object', properties: [Object] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Pol = mongoose.model('Pol', polSchema);

module.exports = Pol;

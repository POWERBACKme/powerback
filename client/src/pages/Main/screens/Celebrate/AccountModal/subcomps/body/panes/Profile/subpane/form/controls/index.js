const { EMPLOYMENT } = require('./employment'),
  { DISTRICT } = require('./district'),
  { CONTACT } = require('./contact');

module.exports = {
  CONTROLS: [
    {
      key: 'account-profile-form-1',
      eventKey: 'contact',
      label: 'Contact',
      controls: CONTACT,
    },
    {
      key: 'account-profile-form-2',
      eventKey: 'district',
      label: 'District',
      controls: DISTRICT,
    },
    {
      key: 'account-profile-form-3',
      eventKey: 'employment',
      label: 'Employment',
      controls: EMPLOYMENT,
    },
  ],
};

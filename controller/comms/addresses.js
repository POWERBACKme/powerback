const L = 'POWERBACK.me <',
  R = '@powerback.me>',
  addresses = [
    'account-security-noreply',
    'error-reporter',
    'info-noreply',
    'jonathan',
    'outreach',
    'support',
    'legal'  // this email address doesn't exist yet!
  ];

module.exports = {
  getAddress: (idx) => {
    return L + addresses[idx] + R;
  },
};

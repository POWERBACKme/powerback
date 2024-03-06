const tooltip = {
  infoPlacement: 'auto',
  icon: 'question-circle settings-tooltip',
}, CUSTOM_SETTINGS = [
  {
    cls: 'my-2 mt-lg-3',
    label: 'Email me celebration receipts',
    tooltip: {
      ...tooltip,
      toolTipId: 'emailReceipts',
      message:
        "Auto-emails you when you've made a new celebration. (You can always get a freshly emailed receipt from the Celebrations panel timeline.)",
    },
  },
  {
    cls: 'my-2',
    label: 'Auto-tweet celebrations',
    tooltip: {
      ...tooltip,
      toolTipId: 'autoTweet',
      message:
        "Auto-tweets after your edits/approval when you've made a new celebration. (You can always do this manually with an extra button click.)",
    },
  },
  {
    cls: 'my-2',
    label: 'Show tooltips',
    tooltip: {
      ...tooltip,
      toolTipId: 'showToolTips',
      message:
        'Controls if tooltips (like this one) display throughout the app.',
    },
  },
  {
    cls: 'mt-2 mb-3',
    label: 'Show login notifications',
    tooltip: {
      ...tooltip,
      toolTipId: 'showLoginLogout',
      message: 'Controls if notifications for logging in and out display.',
    },
  },
  // remove all "naming post office bills" from choices would be a fun one for the future =)
];

export default CUSTOM_SETTINGS;

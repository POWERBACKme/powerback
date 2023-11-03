module.exports = {
  SignedUp: (firstName) => {
    return [
      3,
      'Your POWERBACK Account is now Active!',
      `Dear ${firstName ? firstName : 'Newest Powerbacker'},<br/><br/>
      Great news! Your POWERBACK account is now active and ready to make a difference. Thank you for confirming your email address.<br/><br/>
      You are a special part of our community, and your actions have a meaningful impact on the causes we support. Your involvement brings the power back to the people every day.<br/><br/>
      Feel free to log in and explore the POWERBACK platform, create Celebrations, and be part of something extraordinary. We have a lot in store.<br/><br/>
        Please forward this email to a friend or, better yet, a neighbor. Together we can ensure that those who are given the honor of representing the American people will never take one of your hard-earned dollars for granted ever again.<br/><br/>
        I look forward to the positive change we'll create together.<br/><br/>
        Your Friend and Countryman,<br/>
        Jonathan from <a href="https://powerback.me">POWERBACK.me</a>`,
    ];
  },
};

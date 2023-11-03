export const SUPPORT_EMAIL = 'support@powerback.me',
  BTC_ADDRESS = '1Q1HmBh9Wiqg5Kv12aY2zqhAnfz1CDz7Wr',
  PATREON_URI = 'https://www.patreon.com/join/powerback/',
  NEEDS = (
    <p>
      ...a nonprofit that fully depends on{' '}
      <a href={PATREON_URI} target={'__blank'}>
        direct support
      </a>{' '}
      from you and our users.
      <br />
      <br />
      In addition to server and IT maintainence costs and civil liberties
      attorney's fees, developing new features to improve our service and
      grow our community requires the paid work of valued professionals.
    </p>
  ),
  LIFEBLOOD = (
    <p id='patron-ask'>
      Regularly occuring gifts are the lifeblood of our service. Become a{' '}
      <a className='natural-link' href={PATREON_URI}>
        patron
      </a>{' '}
      or inquire about{' '}
      <a className='natural-link' href='mailto:volunteer@powerback.me'>
        volunteering
      </a>
      . Questions? Contact us at{' '}
      <a href={'mailto:' + SUPPORT_EMAIL}>{SUPPORT_EMAIL}</a> with your
      name, billing Zip code, and your time of donation.
    </p>
  );

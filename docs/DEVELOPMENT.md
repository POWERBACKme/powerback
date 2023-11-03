# POWERBACK Development Setup Guide

We greatly appreciate your interest in contributing to our project. This guide will help you set up your development environment and run a local instance of **POWERBACK** for testing and development.

- [Prerequisites](#prerequisites)
- [Installation](#installation-guide)
  - [Environment Variables](#environment-variables)
  - [Backend Constants](#backend-constants)
  - [Development Server](#start-the-development-server)
- [Making Contributions](#making-contributions)
- [Questions and Support](#questions-and-support)

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your development machine:

- [Node.js](https://nodejs.org/) (recommended version: Node v18.12.0)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the Repository:**

   Start by cloning the **POWERBACK** repository to your local machine. Run the following command in your terminal:

     ```bash
     git clone https://github.com/yourusername/powerback.git
     ```

2. **Install Dependencies:**

   Navigate to the project directory and install the project dependencies using npm:
  
     ```bash
     cd powerback && npm install
     ```

3. **Customize aliases**

   Copy `webpack.config.js` and `jquery-stub.js` from the root folder of your project into `/client/node_modules/react-scripts/config/`. Overwrite any files of the same name in the folder with these copies.

4. ## Environment Variables:

   **POWERBACK** relies on environment variables for configuration. Create an `.env` file in the project root and define the necessary variables. You can start with the following template:

   ```env
   REACT_APP_BRANDED_URI=POWERBACK.me
   REACT_APP_PHONE_NUMBER=123.456.7890
   REACT_APP_STRIPE_PROCESSING_ADDEND=0.3
   REACT_APP_DEV_URI=http://localhost:3000
   REACT_APP_PROD_URI=https://powerback.me
   REACT_APP_EMAIL_USER=myname@[EMAIL SERVICE].me
   REACT_APP_STRIPE_PROCESSING_PERCENTAGE=0.029
   REACT_APP_EMAIL_SUPPORT=support@[EMAIL SERVICE].me
   REACT_APP_API_URI=https://api.powerback.me/api/
   REACT_APP_PROPUBLICA_CONGRESS_SUBDIR=congress/v1/
   REACT_APP_TWITTER_URI=https://twitter.com/intent/tweet?
   REACT_APP_PROPUBLICA_BASEURI=https://api.propublica.org/
   REACT_APP_BTC_ADDRESS=1Q1HmBh9Wiqg5Kv12aY2zqhAnfz1CDz7Wr
   REACT_APP_PATREON_URI=https://www.patreon.com/join/powerback/1
   REACT_APP_CIVICS_API_URI=https://civicinfo.googleapis.com/civicinfo/v2/representatives
   REACT_APP_TWITTER_HASHTAGS=NoDonationWithoutRepresentation,NoRepGetStepped,TakeThePowerBack
   REACT_APP_FEC_INDIVIDUAL_CONTRIBUTIONS=https://www.fec.gov/data/receipts/individual-contributions/
   ```

5. ## Backend Constants

   1. Create a new file `constants.js` in the root folder of your project.

   2. Copy and paste the following boilerplate code into the new file:

   ```javascript
   module.exports = {
     SERVER: {
       MONGODB_CONNECTION_STRING:
         'mongodb+srv://[username]]:[pLaCeHoLdEr]@cluster0.cmxbp.mongodb.net/powerback?retryWrites=true&w=majority',
       SESSION_SECRET: '[passphrase]',
     },
     EMAIL: {
       PASS: '[email account password]',
       PORT: '[email service port #]',
     },
     STRIPE: {
       API: {
         SK_LIVE: '[sk_live_pLaCeHoLdEr1234567890]',
         SK_TEST: '[sk_test_pLaCeHoLdEr1234567890]',
         PK_TEST: '[pk_test_pLaCeHoLdEr1234567890]',
         PK_LIVE: '[pk_live_pLaCeHoLdEr1234567890]',
       },
       FEES: {
         PERCENTAGE: 0.029,
         ADDEND: 0.3,
       },
     },
     API: {
       PROPUBLICA: {
         CONGRESS_KEY: '[pLaCeHoLdEr1234567890]',
         // if you have more than one key you can put in *"ALTERNATE"*, otherwise replace placeholder with your key again here
         CONGRESS_ALTERNATE_KEY: '[pLaCeHoLdEr1234567890]',
       },
       CIVICS: {
         KEY: '[pLaCeHoLdEr1234567890]',
       },
     },
     FEC: { LEGAL_LIMIT: [200, 3300] }, // [noncompliant, compliant] per candidate, per campaign cycle.,
     APP: {
       SETTINGS: {
         showLoginLogout: true,
         emailReceipts: true,
         showToolTips: true,
         autoTweet: false,
       },
     },
   };
   ```

   3. Acquire all API keys needed to run **POWERBACK**. Check out the [API Key list](./KEYLIST.md) on how to do that.

   4. You will need an email service as well as a MongoDB database. Such services will provide you with credentials that you put in `constants.js`.

   5. Replace the `MONGODB_CONNECTION_STRING`, `PASS`, `PORT`, `CONGRESS_KEY`, `CONGRESS_ALTERNATE_KEY`, and (CIVICS) `KEY` with the correct credentials and/or keys.

   6. Replace the `SESSION_SECRET` placeholder with a secure passphrase.

6. ## Start the Development Server:

   1. Ensure you have a running MongoDB instance, and the connection string is correctly defined in the in your `app.js` file in your project's root folder.

   2. Once you've set up your environment variables and ensured your MongoDB instance is running, start the development server:

   ```bash
   npm run dev
   ```

   This will launch the **POWERBACK** server and make it accessible at `http://localhost:3000`.

   3. Open your web browser and navigate to `http://localhost:3000` to access your local instance of **POWERBACK**. You can now start working on features, testing, or making contributions.

## Making Contributions

If you plan to contribute to **POWERBACK**, follow our [Contribution Guidelines](./CONTRIBUTING.md). We appreciate your contributions and look forward to working together to make **POWERBACK** even better.

The [API Directory](./API.md) may be a good starting point to understand how the application works.

## Questions and Support

If you have any questions or need support during the development process, feel free to reach out to us on our [GitHub repository](https://github.com/POWERBACKme/powerback) or by email at [support@powerback.me](mailto:support@powerback.me). We're here to assist you.

Thank you for contributing to **POWERBACK** and being a part of our mission.

Happy coding!
The **POWERBACK** Team

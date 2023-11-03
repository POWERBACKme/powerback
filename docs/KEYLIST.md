# API Key Usage Guide

This guide provides instructions on how to apply for and use API keys for **POWERBACK's** third-party services, including Stripe, ProPublica Congress API, and Google Civics.

_This guide assumes you are following our [Development Setup Guide](./DEVELOPMENT.md)._

- [Stripe](#stripe-api-key)
- [ProPublica Congress](#propublica-congress-api-key)
- [Google Civics](#google-civics-api-key)

## Stripe API Key

### Applying for key

1. Visit the Stripe [website](https://stripe.com).

2. Sign up for a Stripe account if you don't already have one.

3. Log in to your Stripe dashboard.

4. Navigate to the API section in your dashboard.

5. Create a new API key and specify its permissions. Be sure to select payment processing as a required permissions.

6. Note down any the generated API keys for use in your **POWERBACK** environment. Keep these safe.

### Using your key

1. Open your **POWERBACK** project.

2. Edit `TabContents.tsx` in `/client/src/pages/Main/screens/Celebrate/TabContents`.

3. Replace the placeholder on Line 21 with your Stripe API test key.

4. Save the changes and restart your **POWERBACK** server to apply the new API key.

## ProPublica Congress API Key

### Applying for key

1. Visit the ProPublica Congress API [website](https://www.propublica.org/datastore/api/propublica-congress-api).

2. Sign up for a ProPublica account if required.

3. Request an API key from ProPublica for access to the Congress API. Follow the provided instructions to obtain your key.

4. Note down the generated API keys for use in your **POWERBACK** environment.

5. Refer to the ProPublica Congress API [documentation](https://projects.propublica.org/api-docs/congress-api/).

### Using your key

1. Open your **POWERBACK** project.

2. Edit `constants.js`.

3. Replace the `CONGRESS_KEY` and `CONGRESS_ALTERNATE_KEY` placeholders with your ProPublica Congress API key(s).

4. Save the changes and restart your **POWERBACK** server to apply the new API key(s).

## Google Civics API Key

### Applying for key

1. Visit the Google Civics API [website](https://developers.google.com/civic-information).

2. Sign in with your Google account or create one if you don't have an account.

3. Create a new project in the Google Developers Console. If you already have a project, you can use it.

4. In the project's dashboard, navigate to the "APIs & Services" and then "Library" section.

5. Search for "Google Civics Information API" and enable it for your project.

6. In the left sidebar, click on "Credentials."

7. Create a new API key by clicking on the "Create credentials" button and selecting "API key."

8. Note down the generated API key. You'll need this key to access the Google Civics API.

### Using your key

1. Open your **POWERBACK** project.

2. Edit `constants.js`.

3. Replace the `KEY` placeholder under "CIVICS" with your Google Civics API key.

4. Save the changes and restart your **POWERBACK** server to apply the new API key.

By following these instructions, you can apply for and use API keys for the third-party services needed to run **POWERBACK**. If you have any questions please reach out at [support@powerback.me](mailto:support@powerback.me).

Return to the [Development Setup Guide](./DEVELOPMENT.md).

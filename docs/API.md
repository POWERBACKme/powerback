# API Directory

This directory explains each [API endpoint](../client/src/api/API.ts) in the front end React app and the purposes they serve. Each function name is linked to the [`/Controller`](../controller/) file that it executes.

## Endpoints

Each category is a link to its [`Routes`](../routes/) or relevant folder.

### **[`Auth`](../auth/)**

- `refreshToken` checks for user JWT to preserve their session and also protect endpoints from being accessed by non-users in conjunction with the [`/Auth`](../auth/) files

### **[`Users`](../routes/api/users.js/)**

- [`updateUser`](../controller/users/account/update.js) updates user document
- [`changePassword`](../controller/users/password/change.js) changes user password (in-app, during a secure session)
- [`resetPassword`](../controller/users/password/reset.js) changes user password (outside of a secure session, user is verified via unique URL)
- [`confirmResetPasswordHash`](../controller/users/password/utils/validate.js) confirms a unique link provided to user if they ask to reset their password
- [`confirmActivationHash`](../controller/users/account/utils/activate.js) confirms a unique link provided to user if they create a new account
- [`deleteUser`](../controller/users/account/remove.js) deletes user account and stored document
- [`login`](../routes/api/middleware/) logs user into the app
- [`checkPrivilege`](../controller/users/account/privileges/certify.js) checks if user has viewed the Eligibility requirements and clicked "Agree". (Users cannot make Celebrations without this)
- [`givePrivilege`](../controller/users/account/privileges/empower.js) updates a user's document to TRUE for the above
- [`checkDonor`](../controller/users/account/privileges/deem.js) checks is user has submitted all the required information to comply with the [FEC](https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/contribution-limits/) in order to increase their maximum donation amount
- [`promoteDonor`](../controller/users/account/privileges/promote.js) updates a user document to TRUE for the above
- [`getUser`](../controller/users/account/find.js) retrieves a user document from the database
- [`getUserData`](../controller/users/account/contact.js) returns any user data that is exposed by the client
- [`forgotPassword`](../controller/users/password/forgot.js) starts process to allow user to reset their password (if they cannot login)
- [`createUser`](../controller/users/account/create.js) creates a new [`User`](../models/User.js) account document,
- [`logout`](../auth/tokenizer.js) logs out user

### **[`Celebrations`](../routes/api/celebrations.js/)**

- [`saveCelebration`](../controller/celebrations/create.js) sends payment to Stripe and creates a new Celebration document in the database
- [`getCelebrationsByUserId`](../controller/celebrations/find/params/byUserId.js) returns all Celebration documents from a single user
- [`resolveDonation`](../controller/celebrations/resolve.js) converts a Celebration into a donation by updating the document
- [`sendReceipt`](../controller/celebrations/receipt.js) emails Celebration receipt to user
- [`getWhatPolsHaveInEscrow`](../controller/celebrations/find/params/escrowed.js) sums all donation amounts for each politician from across the userbase

### **[`Congress`](../routes/api/congress.js)**

- [`getPolsByIds`](../controller/congress/methods/put/pols.js) returns a group of **Politicians** based on the ID(s) provided
- [`getPol`](../controller/congress/methods/get/pol.js) returns a single **Politician's** document
- [`getBill`](../controller/congress/methods/get/bill.js) returns a single **Bill's** document

### **[`Payments`](../routes/api/payments.js/)** [(Stripe)](https://stripe.com)

- [`sendPayment`](../controller/payments/createPayment.js) sends payment to [`Stripe`](https://stripe.com/docs/payments),
- [`setupIntent`](../controller/payments/setupIntent.js) creates a "payment intent" object
- [`setPaymentMethod`](../controller/payments/setPaymentMethod.js) creates a "payment method" i.e. user's credit card
- [`getNewDonor`](../controller/payments/createDonor.js) registers a new customer with Stripe

### **[`Location`](../routes/api/civics.js/)** [(Google Civics)](https://developers.google.com/civic-information)

- [`getPolsByLocation`](../controller/civics/getLocalPols.js) returns local Representative information (allows user to search by address/ZIP code)

### **[`Sys`](../routes/api/sys.js/)**

- [`notifyImgErr`](../controller/sys/notifyImageErr.js) sends an internal system email if a Politician's profile picture is broken/missing
- [`getConstants`](../controller/sys/pullConstants.js) retrieves private constant values stored on the server

## Other Files

[`trawl.js`](../controller/congress/services/ProPublica/trawl.js) and [`endpoints.js`](../controller/congress/config/endpoints.js) control how the [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/#requests) is used.

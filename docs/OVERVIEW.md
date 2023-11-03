# Project Overview

- [React app](#react-app)
-   [Front end structure](#front-end-structure)
  - [Account Modal](#account-modal)
- [Express app](#express-app)
- [Files](#files)

This document provides an overview of the file and folder structure of the project, explaining how different components and resources are organized.

**POWERBACK** is a _MERN_ app. It uses a [MongoDB](https://www.mongodb.com/docs/) [Atlas](https://www.mongodb.com/docs/atlas/getting-started/) database, an [Express](https://expressjs.com/en/api.html) backend app, a [React](https://react.dev/) front end app, and runs on [Node.js](https://nodejs.org/en/docs).

**Total accessibility** was the driver behind the front end design, and third-party dependencies were chosen based on their relative compability with this goal.

**POWERBACK** is currently in public Beta.

## Project Organization

- **(Root Directory):** The root directory contains project-level files, including configuration files, READMEs, and the back end application server file, [`app.js`](../app.js).

### React app

- **`/client/src/../`** The source directory holds all the front end source code for the React app portion of this project.

  - [`/src/api`](../client/src/api) This folder contains the API that the front end React app uses to connect to the back end Express app. See the [API Directory](./API.md) for all endpoints.

  - [`/src/components`](../client/src/components) This folder contains reusable UI components and widgets used throughout the application.

  - [`/src/constants`](../client/src/constants) This folder contains constant values such as website copy and values that rarely change.

  - [`/src/hooks`](../client/src/hooks) This folder contains custom React hook logic.

  - [`/src/img`](../client/src/img) This folder contains visual assets and media.

  - [`/src/interfaces`](../client/src/interfaces) This folder contains custom Interfaces for unique object shapes.

  - [`/src/pages`](../client/src/pages) This folder contains the TSX to build the HTML layouts for the application's pages.

  - [`/src/tuples`](../client/src/tuples) This folder contains fixed datasets from the real world, such as the 50 US states.

  - [`/src/types`](../client/src/types) This folder contains custom Types for more complex data objects.

  - [`/src/utils`](../client/src/utils) Utility functions and helper scripts are placed in this folder.

- **[`/public`](../client/public)** The public directory contains static assets that are publicly accessible, such as images, fonts, and other resources.

#### Front end structure

The app is made up of three primary pages - [`Login`](../client/src/pages/Login/), [`Main`](../client/src/pages/Main/) and [`Reset`](../client/src/pages/Reset/). After logging in, the user will experience the app through the **Main** page. In case a user forgets their password, they can visit the **Reset** page.

The **Main** page has four major elements arranged in a funnel-like procession for the user to customize and submit a **[`Celebration`](FAQ.md/#celebrations)**, which is a campaign donation to be delivered upon the occurrence of a real-world political event. The four elements are:

- [`/DesignCelebration`](../client/src/pages/Main/screens/Celebrate/TabContents/DesignCelebration/) user chooses a candidate recipient and donation amount
- [`/Payment`](../client/src/pages/Main/screens/Celebrate/TabContents/Payment/) user submits credit card information
- [`/TipAsk`](../client/src/pages/Main/screens/Celebrate/TabContents/TipAsk/) user is asked if they would like to leave a tip for **POWERBACK** before confirming payment
- [`/Support`](../client/src/pages/Main/screens/Celebrate/TabContents/Support/) Celebration is confirmed. User is informed about **POWERBACK's** not-for-profit status and asked to give support

  The **Design Celebration** subsection is the most complex page of the application. Here is where users will make all their major decisions behind their **Celebrations**.

  This page has three major UI interfaces:

  - a [`Search`](../client/src/components/search/) bar with three search category options
  - a [`Carousel`](../client/src/components/interactive/PolCarousel/) of official profile pictures of House members for the users to make their selections
  - a [`Button Grid`](../client/src/components/interactive/BtnGrid/) with monetary amounts (and a numerical input) where users to decide how much to give

  #### Account Modal

  The Account modal is a tabbed interface where users can provide personal information ([`Profile`](../client/src/pages/Main/screens/Celebrate/AccountModal/subcomps/body/panes/Profile/)), view past [`Celebrations`](../client/src/pages/Main/screens/Celebrate/AccountModal/subcomps/body/panes/Celebrations/), and adjust their Settings, reset their password, or delete their account ([`Settings`](../client/src/pages/Main/screens/Celebrate/AccountModal/subcomps/body/panes/Settings/)).

  The modal can be accessed in two different ways depending on your device type:

  - For mobile, clicking the **POWERBACK** "cable" logo in the top-left of the screen opens the `Sidenav` menu, where a link named "Account" can be pressed to open the modal.
  - For desktop, the "Account" link appears in the top-right of the Navigation bar.

### Express app

The back end uses files kept in the following folders:

- **[`/routes/api`](../routes/api/)** this folder contains files that routes API requests from the front end, organized in the following files:

  - [`celebrations.js`](../routes/api/celebrations.js)
  - [`civics.js`](../routes/api/civics.js)
  - [`congress.js`](../routes/api/congress.js)
  - [`payment.js`](../routes/api/payment.js)
  - [`sys.js`](../routes/api/sys.js)
  - [`users.js`](../routes/api/users.js)

- **[`/controller`](../controller/)** this folder contains files that process the data sent from the front end via the API and processes data along with interacting with any third-party APIs as well as the MongoDB database. These files are organized in the following folders corrosponding with `/routes/api`:

  - [`/celebrations`](../controller/celebrations/)
  - [`/civics`](../controller/civics/)
  - [`/comms`](../controller/comms/)\*
  - [`/congress`](../controller/congress/)
  - [`/payments`](../controller/payments/)
  - [`/sys`](../controller/sys/)
  - [`/users`](../controller/users/)

  \*this folder has no corrosponding routes as it manages outgoing email communication

  - **[`/auth`](../auth/)** user authentication files using [JWT](https://jwt.io/introduction)

  - **[`/models`](../models/)** Schemas for MongoDB database documents are as follows:
    - [`Applicant.js`](../models/Applicant.js) a user in the process of making a new account, awaiting account verification,
    - [`Bill.js`](../models/Bill.js) data describing a Bill introduced in Congress, compiled by the [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/bills/),
    - [`Celebration.js`](../models/Celebration.js) schema for a document storing the details of a user Celebration involving a donation amount, a political candidate recipient, etc.,
    - [`ExUser.js`](../models/ExUser.js) document outlining a user that has deleted their account to prevent signing up again with the same username,
    - [`Pol.js`](../models/Pol.js) schema for a real politican in Congress, compiled by the [ProPublica Congress API](https://projects.propublica.org/api-docs/congress-api/members/),
    - [`User.js`](../models/User.js) an approved user

## Files

- **[`README.md`](../README.md)** The main project README file, providing an introduction and essential information about the project.

- **[`package.json`](../package.json)** The package.json file defines project dependencies, scripts, and metadata.

- **[`webpack.config.js`](../webpack.config.js)** The Webpack configuration file, responsible for bundling and building the project. See the [Development Setup Guide](./DEVELOPMENT.md) for detailed instructions on what to do specifically with this file.

- **[`.env`](./DEVELOPMENT.md#environment-variables)** Environment variables and sensitive data are stored in this file, ensuring security and configuration separation.

- **[`.gitignore`](../.gitignore)** A list of files and directories excluded from version control with Git.

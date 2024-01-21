# **GLLRST Contributing Guide**

Thanks for your interest in our art-sharing app GLLRST. If you would like to contribute, you can find the project's repository at our organization's github.  Check out [this link](https://github.com/Par-For-Loops/gallerist/) get a .git URL to fork your own copy of the repo.

Continue reading for an overview of the contribution workflow.

## **Getting Started**

Before you begin, take time to familiarize yourself with the project by checking out our [README.md] in the root directory or by visiting [this link](https://github.com/Par-For-Loops/gallerist/blob/main/README.md).

We developed this project with the version of Node v20.11.0.  We used MongoDB v5.0.21 and Mongosh v2.0.1 as our database.

Also, check out the [STYLE-GUIDE](https://github.com/Par-For-Loops/gallerist/blob/main/STYLE-GUIDE.md) and [package.json](https://github.com/Par-For-Loops/gallerist/blob/main/package.json) to understand our CSS and all relevant dependencies and command scripts to get up and running.

We interact with the Harvard University Art Museum (HUAM) API to retrieve art.  Check out the [documentation](https://github.com/harvardartmuseums/api-docs) for this API at github and sign up for your own API key with Harvard at [this link to a Google form](https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform) in the "Access to the API section". When we initially made this project, this key was free, and the email response from Harvard was instantaneous and automatic.

## **Environmental Variables**

Once you have an API key, this repo relies on a .env file that should have the following environmental variables defined:

- **APIKEY** : set to the key given to you by Harvard
- **GOOGLE_CLIENT_ID** : Necessary for Authentication.  Create a project in your [Google Developer Console](http://console.cloud.google.com/) and create an OAuth client ID. For more details, we followed [this guide](https://www.passportjs.org/tutorials/google/register/) from the Passport docs.
- **GOOGLE_CLIENT_SECRET** : (see above)
- **EXPRESS_SECRET** : a random string of your liking, also used in the authentication set-up

Lastly, the following variables are optional, but are explained for full transparency:

- **NODE_ENV** : set to 'development', although our webpack config will default to 'production' if you don't include this
- **GOOGLEID** : necessary for the 'seed' script to initialize the database with the fakeData found in /server/db/fakeData.js.  You can find your google id and name in the mongosh shell with the command `db.users.find({})`.
- **GOOGLENAME** : (see above)

## **The Specifics of Getting Started**

Fork the organization's [repo](https://github.com/Par-For-Loops/gallerist/) and make a clone to your development environment of choice.  Once you have ensured that you have MongoDB installed and its service started, as well as created the .env file with the necessary variables defined above, you can install the project dependencies by running `npm install`.  You can then run the `npm run build` script to allow webpack and babel to create a transpiled bundle.js.  Lastly, run `npm start` to create a server and you should have a local instance of our site running at the 3000 port. Your server terminal should provide a link to open the application in your browser.

## **Making Changes**

Once you have the repo forked and cloned down, create a branch and get to hacking.

Let this initial version of GLLRST be a muse for whatever code contributions you concoct.

Let your branch be a blank canvas for you to further the artistic vision of GLLRST.

## **Pull Requests**

If you have fixed any issues or added a substantial feature, create a Pull Request on Github for the organization to review. This project was originally created by 4 developers, so it will require approval of 50% of the org (or 2 votes of approval) to merge your changes into the main repository.

If your changes are approved, they will be publicly visible at [this link](https://github.com/Par-For-Loops/gallerist/).

Lastly, this project was created for educational purposes with no license.  We hope that any future contributions are also made for educational purposes.  Thanks!

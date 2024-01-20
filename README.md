# **GLLRST / gallerist**

Welcome to GLLRST, a fun art sharing app for friends! Search through the collections and archives of a museum to curate your own gallery of fine art. Check out our [Press Release](https://github.com/Par-For-Loops/gallerist/blob/main/_PRESS_RELEASE.md) for more details.

This project was created by a small team of 4 developers. Those interested in adding their own twist should check out our [Contributing Guide](https://github.com/Par-For-Loops/gallerist/blob/main/CONTRIBUTING.md). You'll find all the necessary information about forking the repo and getting started. Please check out our [Style Guide](https://github.com/Par-For-Loops/gallerist/blob/main/STYLE-GUIDE.md) too.

## **Features**

Once signed in with a Google account, our home page has a simple navbar to allow the user to access each of the following features.

### **Search**

The search page allows users to search art by a keyword and returns 10 randomized results related to that keyword.
If the users likes an artwork, they can click on the heart emoji below to attempt to add it to their personal
gallery. Some artworks remain out of bounds for GLLRST users (such is the harsh reality of the art market!), and
artworks that have been previously acquired by other users will also not be available. However, successful acquisition of a piece will only cost $5 (deducted from the user's wallet), and will be added to the user's gallery.

### **Gallery**

The gallery page displays all the art in the gallery. You can filter the art by who owns it, and by the culture of the art.
You can also use this page to add friends, based on the art pieces you're looking at. Each piece of art also links to another
page where you can find a more in depth description of the piece.

### **Individual Artwork Info**

(Ky feature explanation)

### **Profile**

The Profile page allows the user to manage their collected artworks and friends' list, as well as check the funds in their wallet.  Art can be listed for sale in the Auction section, or simply deleted from their gallery, where it might still be picked up by an enterprising art dealer.

### **Auction**

The Auction page lists all of the art that has been listed for sale by all of the users.  It also reminds the user of the available funds in their wallet. Artwork can be perused and purchased for the list price with the simple click of a button. Don't spend too much time contemplating your purchase, or it might be bought out from under your nose.  All sales are final.

## **Framework and Libraries**

The app was developed with **Node 20** on an **Express 4.18** framework that handles back-end requests.  Our database is **MongoDb Community v5.0** using a **Mongoose v8** ORM.

Authentication is handled by **Passport** with a **Google Oauth 2.0** strategy. Environmental variables are handled by **Dotenv**.

The front-end was designed with **React v18**, with **Hooks**.  Client-side routing is handled by **React Router v6.21**.  Styling is **Bootstrap v5.3**, with several **React Bootstrap** components, as well as preprocessing with **Sass**.

Several other devDependencies used by our team include linting by **Eslint extending AirBnB** rules, with JSX, React, and React Hooks plugins, as well as a few customizations.  Our build was bundled by **Webpack**, with the JavaScript compiled by **Babel**.  We used **Prettier** to help enforce code formatting.

Please refer to our [package.json](https://github.com/Par-For-Loops/gallerist/blob/main/package.json) for the full list of dependenciese and versions.

## **Getting Started**

### **HUAM API**

We interact with the Harvard University Art Museum (HUAM) API to retrieve art.  Check out the [documentation](https://github.com/harvardartmuseums/api-docs) for this API on Github and sign up for your own API key with Harvard at [this link to a Google form](https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform) in the "Access to the API section".

When we initially made this project in January 2024, this key was free, and the email response from Harvard was instantaneous and automatic. We hope the above details remain true for you, but be aware that this could possibly change.

### **Environmental Variables**

#### **Required Variables for App to Function**

Once you have an API key, this repo relies on a .env file (already listed in the .gitignore) that should have the following environmental variables defined:

- **APIKEY** : set to the key given to you by Harvard
- **GOOGLE_CLIENT_ID** : Necessary for Authentication.  Create a project in your [Google Developer Console](http://console.cloud.google.com/) and create an OAuth client ID. For more details, we followed [this guide](https://www.passportjs.org/tutorials/google/register/) from the Passport docs.
- **GOOGLE_CLIENT_SECRET** : (see above)
- **EXPRESS_SECRET** : a random string of your liking, also used in the authentication set-up

#### **Optional Variable**s

The following variables are optional for setting the Webpack config to Development Mode and seeding the database with a fake dataset, which should no longer be necessary if you got an API Key, but are explained for full transparency:

- **NODE_ENV** : set to 'development', although our webpack config will default to 'production' if you don't include this
- **GOOGLEID** : necessary for the 'seed' script to initialize the database with the fakeData found in /server/db/fakeData.js.  You can find your google id and name in the mongosh shell with the command `db.users.find({})`.
- **GOOGLENAME** : (see above)

## **Terminal Scripts**

Fork the organization's [repo](https://github.com/Par-For-Loops/gallerist/) and make a clone to your development environment of choice.  Once you have ensured that you have MongoDB installed and its service started, as well as created the .env file with the necessary variables defined above, you can install the project dependencies by running `npm install`.

You can then run the `npm run build` script to allow webpack and babel to create a transpiled bundle.js.

Lastly, run `npm start` to create a server and you should have a local instance of our site running at the 3000 port. Your server terminal should provide a link to open the application in your browser.

## **Thank you**

Lastly, we'd like to express our thanks to the instructors and fellow students at Operation Spark in New Orleans, Louisiana for their guidance and expertise, as well as our friends and family for their unconditional support.

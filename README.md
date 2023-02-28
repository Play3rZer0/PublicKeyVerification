Ethereum Public Key Verification For ECDSA

This project is an example of verifying a private key to a public address. This makes
use of the React framework, Axios, ethereum-cryptography components among others.

There are two parts. The client and the server.

Here are the installation steps.

A project folder must be created to store the files.

### Client

This connects the Vite SSR (Server Side Rendering) front-end for React.

1. From a terminal window open your project folder.
2. Go to the `/client` folder.
3. Run `npm install` which installs the dependencies needed.
4. Run `npm run dev` to start application in development mode,
5. The app can be opened at http://127.0.0.1:5173/ (localhost).

### Server

This starts the node server running at port 3042.

1. From a terminal window open your project folder.
2. Go to the `/server` folder
3. Run `npm install` to install all the depedencies
4. Run `npx nodemon index` to start the server

Note: To use nodemon, you must install it first (npm i nodemon)

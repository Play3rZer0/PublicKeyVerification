Public Key Verification For ECDSA

This project is an example of verifying a private key to a public address. This makes
use of the React framework, Axios, ethereum-cryptography components among others.

There are two components. The client and the server.

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

This starts that node server running at port 3042.

1. From a terminal window open your project folder.
   Open a terminal within the `/server` folder
2. Run `npm install` to install all the depedencies
3. Run `apx nodemon index` to start the server

The application should connect to the default server port (3042)

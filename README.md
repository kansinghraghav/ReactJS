This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 'About Assignment List Project'
This is Simple CRUD ReactJS aap to demonstrate how to build an MERN (MongoDB, Express, React and Node) - CRUD app.

## 'Project Setup'
 (you can clone the repo and then can follwo below steps in order to make the application running.)
1. create a new react app - npx create-react-app <your app name>
2. Install bootstrap - npm install bootstrap (as we are going to use bootstrap for styling)
3. Setting up ReactRouter - npm install react-router-dom
4. create the components -
	- assignment list
	- edit-assignment
	- create-assignment
5. Create basic layout and navigation with bootstrap 
=====================
Setting up the backend
1. create a new DIR named it backend
2. we need to install following dependencies -
	- express => Express is a fast and lightweight web framework for Node.js
	- body-parser => Node.js body parsing middleware.
	- cors => CORS is a node.js package for providing an Express middleware that can be used to enable CORS     
                                  with various options. 
	- mongoose => A Node.js framework which lets us access MongoDB in an object-oriented way.
 we can install all the with below command - 
	npm install express body-parser cors mongoose
4. Finally, we need to make sure to install a global package --- npm install -g nodemon
Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. 
5. Start the server by using nodemon  => nodemon server
====================================
Installing MongoDB
-	First makes sure you have monogodb installed on your machine.
Here you can find the installation guide -https://docs.mongodb.com/manual/administration/install-community/.
-	Create a data DIR on your system which will be used by mongoDB  
In your user folder =>  /data/db
-	To start mongodb use following command – mongod
-	The next step is to create the MongoDB database instance. Therefore, we’re connecting to the database server by using the MondoDB client on the command line using command - mongo
-	Once the client is started use the following command to create database – use <databsename>
-	In order to be able to send HTTP request to our back-end we’re making use of the Axios library. Axios is being installed via the following command:
 npm install axios

Once all the setup done you can test the server API on postman.
=================================================================


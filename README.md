# MERN Stack Starter
This is a basic MERN(MongoDB, ExpressJS, React, NodeJS) development setup using ES Module - [read more about ES Module in NodeJS](https://nodejs.org/api/esm.html).

## Setup
 - **.env:** add this file into the root directory.

    
	    NODE_ENV = development
	    PORT = 5000
	    MONGO_URI = <ADD THE MONGODB CONNECTION STRING>
	    MONGO_URI_LOCAL = mongodb://localhost/testDb
	    JWT_SECRET = <ADD SECRET STRING>



 - **Backend:**

    
	    npm i

 

 - **Frontend:**

    
	     cd frontend/
	     npm i

 - **Running the development**
	   
		 npm run server  - backend development setup
		 npm run client - front development setup
	     npm run dev - backend and frontend development setup
  
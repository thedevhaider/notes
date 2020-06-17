# Notes App

# Routes
1. GET  /api/notes/healthcheck - For Checking the Notes endpoints health
2. POST /api/notes - To Create Note
3. GET /api/notes - To List Created Notes

# Setup Guide

To setup the project please follow these guidelines

1. Make sure that you have nodejs and npm installed in your system.
2. Run command 'npm install' in the project root directory to install all the dependencies from the package.json file.
3. Create a file .env in the project root directory and add these environments MONGO_URI, and PORT.
4. Place the MongoDB connection string in the MONGO_URI. You can refer to https://mlab.com/ which i have used.
5. PORT is the port on which you want to run the server. If this is not provided then application will run on default port 5000.
6. After setting up the .env file run 'npm run server' or 'npm start' in the root to run the nodemon server or normal server respectively.
7. Refer to this Postman collection for testing the endpoints https://www.getpostman.com/collections/c41d6cbfa7f7f91f510d

Don't forget to Star and Fork the repository.

Have fun!



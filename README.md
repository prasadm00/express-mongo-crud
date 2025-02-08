Getting Started
Prerequisites

Before running the project, ensure you have the following installed:

    Node.js (v16 or higher)

    MongoDB (local or cloud instance)

    Postman or any API testing tool (optional)

Installation
    Install dependencies:
    bash
    Copy

    npm install

    Create a .env file in the root directory and add the following environment variables:
    env
    Copy

    PORT=5000
    MONGO_URI=mongodb://localhost:27017/express-crud

    Start the development server:
    bash
    Copy

    npm start

Folder Structure

The project follows a modular folder structure for better organization:
Copy

beloa/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── database/        # Database connection setup
│   ├── middlewares/     # Custom middlewares
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   ├── validators/      # Request validation schemas
│   ├── app.js           # Express app configuration
│   └── server.js        # Server entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation

Configuration

The application uses the following key configurations:

    Express.js: For building the RESTful API.

    MongoDB: For database storage.

    Mongoose: For MongoDB object modeling.

    Dotenv: For managing environment variables.

    Morgan: For HTTP request logging.

    CORS: For enabling cross-origin resource sharing.

    Joi: For request validation.

Running the Server

To start the server, run the following command:
bash
Copy

npm start

This will start the server in development mode using nodemon. For production, use:
bash
Copy

node src/server.js

The server will run on http://localhost:5000.
API Endpoints

The following endpoints are available for the User resource:
Method	Endpoint	Description
GET	/api/users	Fetch all users
GET	/api/users/:id	Fetch a single user by ID
POST	/api/users	Create a new user
PUT	/api/users/:id	Update an existing user by ID
DELETE	/api/users/:id	Delete a user by ID
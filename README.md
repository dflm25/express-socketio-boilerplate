# NodeJS Boilerplate.

You will find a scalable API application using node.js with some features like:

- [x] Express.
- [x] Mongoose.
- [x] Secualize (Multiple database).
- [x] Socket.io.
- [x] Express-validator.
- [x] Express-jwt


### Installation
Dillinger requires [Node.js](https://nodejs.org/) v10.4+ to run.
Install the dependencies and devDependencies and start the server.
```sh
$ npm install
$ npm run dev
```

# .env
```sh
APP_PORT=3000
JWT_SECRET=

# DATABASE 1
DB_CRM_HOST=
DB_CRM_PORT=
DB_CRM_USER=
DB_CRM_PASS=
DB_CRM_DATABASE=

# DATABASE 2
DB_CM_HOST=
DB_CM_PORT=3306
DB_CM_USER=
DB_CM_PASS=
DB_CM_DATABASE=

# MONGO
MONGO_URL=mongodb://localhost/mydatabase
MONGO_PORT=
MONGO_USER=
MONGO_PASS=
MONGO_DB=
```

# Directory Structure
Here is the basic app skeleton:
```bash
├── app
│   ├── helpers                 # Application helpers
│   │   ├── example.js
│   ├── http                     
│   │   ├── controllers         # controllers
│   │   │   ├── auth
│   │   │   │   ├── login.js
│   │   │   ├── rooms
│   │   │   │   ├── index.js
│   │   ├── middleware          # Application middlewares (JWT, error handle)
│   │   ├── requests            # validations package express-validator
│   ├── models                  # Application models for mongodb and secualize (mysql)
│   │   ├── crm
│   │   │   ├── users.js
│   │   ├── mongo
│   │   │   ├── index.js
│   │   │   ├── room.js
│   ├── services                # DB transactions (Queries)
│   │   ├── crm
│   │   │   ├── users.js
│   │   ├── mongo
│   │   │   ├── room.js
├── config
│   ├── index.js                
│   ├── mongo.js                # MongoDB connect
│   ├── mysql.js                # Mysql connect
│   ├── socket.js               # Socket.io config
├── database
├── routes
│   ├── index.js                # Group all routes and set the prefix
│   ├── auth.js                 
│   ├── room.js
├── index.js                    # Main file
├── README.md
├── package.json
└── .gitignore
```

License
----
MIT
**Feel free to clone and improve it**

## all emit events
https://socket.io/docs/emit-cheatsheet/
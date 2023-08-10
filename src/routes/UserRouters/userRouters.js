const { Router } = require("express");

const {
    getUsersHandler,
    postUserHandler,
    getUserByIdHandler,
    putStatusUserHandler,
    putUserDataHandler
} = require("../../handlers/Users/usersHandler");

const { auth } = require('express-oauth2-jwt-bearer');
const jwtCheck = auth({
    audience: 'http://localhost:5000',
    issuerBaseURL: 'https://dev-4aecm50nap6pl2q5.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

const userRouters = Router();

userRouters.get("/",  getUsersHandler);
/* userRouters.get("/", jwtCheck, getUsersHandler); */
userRouters.post("/", postUserHandler);
userRouters.get("/:id", getUserByIdHandler);
userRouters.put("/status", putStatusUserHandler);
userRouters.put("/update", putUserDataHandler);

module.exports = userRouters;
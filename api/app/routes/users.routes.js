"use strict";

/**
 * routes for the /users endpoints
 */

const
    users = require('../controllers/users.controller'),
    auth = require('../lib/middleware'),
    bodyParser = require('body-parser'),
    jsonParser = bodyParser.json();

module.exports = (router) => {

    router.route('/users')
        .post(jsonParser, users.create);

    router.route('/users/:id')
        .get(auth.isAuthenticated, auth.isUser, users.read)
        .patch(auth.isAuthenticated, auth.isUser, jsonParser, users.update);

    router.route('/users/login')
          .post(users.login);

    router.route('/users/logout')
          .post(auth.isAuthenticated, users.logout);

};

const routes = require('express').Router();
routes
    .use('01', require('./prove01'))
    .use('02', require('./prove02'))
    .use('03', require('./prove03'))
    .use('04', require('./prove04'))
    .get('/', (req, res, next) => {
        res.render('pages/ProveAssignments/', {
            pageTitle: "Prove Assignments",
            path: "/proveAssignments"
        });
    });
modules.exports = routes;
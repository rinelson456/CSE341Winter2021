const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('pages/proveAssignments/prove03', {
        title: 'Prove 03',
        path: '/prove03', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
    });
});
module.exports = router;
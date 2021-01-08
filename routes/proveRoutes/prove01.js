const express = require('express');
const router = express.Router();
const adminData = require('./admin');
router.get('/', (req, res, next) => {
    res.render('pages/proveAssignments/prove01', {
        title: 'Prove 01',
        path: '/prove01', // For pug, EJS 
        activeTA04: true, // For HBS
        contentCSS: true, // For HBS
        book: books,
        pageTitle: 'View Book',
        hasBooks: books.length > 0
    });
});

const books = [];

router.get('/admin/addProduct', (req, res, next) => {
    res.render('pages/proveAssignments/addProduct', {
        pageTitle: 'Add Book'
    })
});

router.post('/admin/addProduct', (req, res, next) => {
    books.push({ title: req.body.title });
    books.push({ summary: req.body.summary });
    res.redirect('/prove01/');
});

module.exports = router;
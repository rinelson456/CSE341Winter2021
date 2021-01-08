const path = require('path');

const express = require('express');

const router = express.Router();

const books = [];

router.get('/admin/addProduct', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'))
});

router.post('/admin/addProduct', (req, res, next) => {
    books.push({ title: req.body.title });
    books.push({ summary: req.body.summary });
    res.redirect('/prove01/');
});

exports.routes = router;
exports.books = books;
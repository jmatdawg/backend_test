'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var books = new _table2.default('books');

router.get('/', function (req, res) {
    // console.log('get is working')
    books.getAll().then(function (books) {
        res.json(books);
        // console.log('got books')
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;
    books.getBookWithAuthor(id).then(function (book) {
        res.json(book);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

router.put('/:id', function (req, res) {
    var id = req.params.id;
    var row = req.body;
    books.update(id, row).then(function (updatedbook) {
        res.json(updatedbook);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    books.delete(id).then(function (deletedBook) {
        res.send('Poof!');
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

router.post('/', function (req, res) {
    var newBookData = req.body;
    books.insert(newBookData).then(function (newBook) {
        res.json(newBook);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

exports.default = router;
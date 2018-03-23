'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var authors = new _table2.default('authors');

router.get('/', function (req, res) {
    // console.log('get is working')
    authors.getAll().then(function (authors) {
        res.json(authors);
        // console.log('got authors')
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;
    authors.getAuthorWithBooks(id).then(function (author) {
        res.json(author);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

router.put('/:id', function (req, res) {
    var id = req.params.id;
    var row = req.body;
    authors.update(id, row).then(function (updatedAuthor) {
        res.json(updatedAuthor);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;
    authors.delete(id).then(function (deletedAuthor) {
        res.send('Poof!');
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

router.post('/', function (req, res) {
    var newAuthorData = req.body;
    authors.insert(newAuthorData).then(function (newAuthor) {
        res.json(newAuthor);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

exports.default = router;
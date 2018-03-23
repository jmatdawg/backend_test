import { Router } from 'express';
import Table from '../table';

let router = Router();
let authors = new Table('authors');

router.get('/', (req, res) => {
    // console.log('get is working')
        authors.getAll()
        .then(authors => {
            res.json(authors);
    // console.log('got authors')
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

    router.get('/:id', function (req, res) {
        let id = req.params.id;
        authors.getAuthorWithBooks(id)
        .then(author => {
            res.json(author);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.put('/:id', (req, res) => {
        let id = req.params.id;
        let row = req.body;
        authors.update(id, row)
        .then(updatedAuthor => {
            res.json(updatedAuthor);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.delete('/:id', (req, res) => {
        let id = req.params.id;
        authors.delete(id)
        .then(deletedAuthor => {
            res.send('Poof!');
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.post('/', (req, res) => {
        let newAuthorData = req.body;
        authors.insert(newAuthorData)
        .then(newAuthor => {
            res.json(newAuthor);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });


export default router;
import { Router } from 'express';
import Table from '../table';

let router = Router();
let books = new Table('books');

router.get('/', (req, res) => {
    // console.log('get is working')
        books.getAll()
        .then(books => {
            res.json(books);
    // console.log('got books')
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.get('/:id', (req, res) => {
        let id = req.params.id;
        books.getBookWithAuthor(id)
        .then(book => {
            res.json(book);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.put('/:id', (req, res) => {
        let id = req.params.id;
        let row = req.body;
        books.update(id, row)
        .then(updatedbook => {
            res.json(updatedbook);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.delete('/:id', (req, res) => {
        let id = req.params.id;
        books.delete(id)
        .then(deletedBook => {
            res.send('Poof!');
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.post('/', (req, res) => {
        let newBookData = req.body;
        books.insert(newBookData)
        .then(newBook => {
            res.json(newBook);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });


export default router;
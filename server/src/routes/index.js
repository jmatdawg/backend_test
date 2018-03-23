import { Router } from 'express';
import booksRouter from './books';
import authorsRouter from './authors';

let router = Router();

router.use('/books', booksRouter);
router.use('/authors', authorsRouter);

export default router;
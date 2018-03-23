import express from 'express';
import routes from './routes';

let app = express();

app.use(express.json());

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});
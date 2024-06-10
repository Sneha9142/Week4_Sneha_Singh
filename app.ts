import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import sequelize from './config/database';
import { errorHandler, notFoundHandler } from './common/errorHandler';
const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

app.use(errorHandler);
app.use(notFoundHandler);

sequelize.sync().then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log('Error connecting to database', err);
});

export default app;

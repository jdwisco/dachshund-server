import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import middleware from './middleware';

// Route imports
import api from './controllers';
import users from './controllers/users';
import weather from './controllers/weather';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
  exposedHeaders: ['Link']
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit : '100kb' }));

app.use(morgan('dev'));

// Internal middleware
app.use(middleware());

// API
app.use(`/api`, api());
app.use('/users/', users());
app.use(`/api/weather`, weather());

// Server
app.server.listen(process.env.PORT || 8080);
console.log(`Started on port ${app.server.address().port}`);

export default app;

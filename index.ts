import * as bodyParser from 'body-parser';
import config from 'config';
import express from 'express';
import { defaultTo } from 'lodash';
import morgan from 'morgan';
import * as root from './root/router';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json({ type: 'application/ld+json' }));

app.use(root.router);

const port = defaultTo(process.env.PORT, config.get('http.port'));

app.listen(port, () => console.log(`Listening on port ${port}!`));

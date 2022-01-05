const express = require('express');
const cors = require('cors');
const routes = require('../routes/routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/', routes);

module.exports = app;

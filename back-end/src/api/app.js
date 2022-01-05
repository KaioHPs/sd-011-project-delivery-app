const express = require('express');
const routes = require('../routes/routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/', routes);

module.exports = app;

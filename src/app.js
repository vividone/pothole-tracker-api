const express = require('express');
const cors = require('cors');

const app = express();


const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('../swagger.json');

// ==> Rotas da API:
const index = require('./routes/index');
const potholeRoute = require('./routes/pothole.route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', potholeRoute);

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

module.exports = app;